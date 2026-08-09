// Fetches Blogger posts using JSONP (script injection) to bypass CORS
const BLOG_BASE = 'https://acldigitalofficial.blogspot.com'

export function fetchBlogPosts(maxResults = 50) {
  return new Promise((resolve, reject) => {
    const callbackName = `blogCb_${Date.now()}`
    const script = document.createElement('script')

    window[callbackName] = (data) => {
      delete window[callbackName]
      document.head.removeChild(script)
      const entries = data?.feed?.entry || []
      resolve(entries.map(parseEntry))
    }

    script.onerror = () => {
      delete window[callbackName]
      document.head.removeChild(script)
      reject(new Error('Failed to load blog feed'))
    }

    script.src = `${BLOG_BASE}/feeds/posts/default?alt=json-in-script&max-results=${maxResults}&callback=${callbackName}`
    document.head.appendChild(script)
  })
}

// Fetch a single post by its Blogger post ID
export function fetchPostById(postId) {
  return new Promise((resolve, reject) => {
    const callbackName = `blogPostCb_${Date.now()}`
    const script = document.createElement('script')

    window[callbackName] = (data) => {
      delete window[callbackName]
      document.head.removeChild(script)
      const entry = data?.entry
      if (entry) resolve(parseEntry(entry, true))
      else reject(new Error('Post not found'))
    }

    script.onerror = () => {
      delete window[callbackName]
      document.head.removeChild(script)
      reject(new Error('Failed to load post'))
    }

    script.src = `${BLOG_BASE}/feeds/posts/default/${postId}?alt=json-in-script&callback=${callbackName}`
    document.head.appendChild(script)
  })
}

// Convert a post title to a URL slug
export function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Extract Blogger numeric post ID from the entry id string
export function extractPostId(entry) {
  const raw = entry.id?.$t || ''
  const match = raw.match(/post-(\d+)/)
  return match ? match[1] : raw.split('/').pop()
}

function parseEntry(entry, fullContent = false) {
  const title = entry.title?.$t || 'Untitled'
  const postId = extractPostId(entry)
  const slug = toSlug(title)

  const altLink = (entry.link || []).find(l => l.rel === 'alternate')
  const externalUrl = altLink?.href || BLOG_BASE

  const published = entry.published?.$t
    ? new Date(entry.published.$t).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric'
      })
    : ''

  const publishedRaw = entry.published?.$t || ''

  // Thumbnail
  let image = '/img/placeholder.jpg'
  if (entry.media$thumbnail?.url) {
    image = entry.media$thumbnail.url
      .replace('/s72-c/', '/s800/')
      .replace('/s72/', '/s800/')
  } else {
    const raw = entry.content?.$t || entry.summary?.$t || ''
    const imgMatch = raw.match(/<img[^>]+src=["']([^"']+)["']/)
    if (imgMatch) image = imgMatch[1]
  }

  // Content
  const content = entry.content?.$t || entry.summary?.$t || ''

  // Excerpt
  const excerpt = content.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()

  // Labels
  const labels = (entry.category || []).map(c => c.term)

  // Author
  const author = entry.author?.[0]?.name?.$t || 'ACL Team'

  return {
    postId,
    slug,
    title,
    externalUrl,
    published,
    publishedRaw,
    image,
    content: fullContent ? content : '',
    excerpt,
    labels,
    author,
  }
}
