import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchBlogPosts, fetchPostById } from '../utils/blogFeed'

export default function BlogPost() {
  const { postId } = useParams()

  const [post, setPost] = useState(null)
  const [allPosts, setAllPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    setPost(null)
    window.scrollTo(0, 0)

    Promise.all([fetchPostById(postId), fetchBlogPosts(50)])
      .then(([fullPost, posts]) => {
        setPost(fullPost)
        setAllPosts(posts)
        setLoading(false)
        document.title = `${fullPost.title} | ACL Blog`
      })
      .catch(() => { setError(true); setLoading(false) })

    return () => { document.title = 'Adroitec Composite Lab (ACL)' }
  }, [postId])

  const currentIndex = allPosts.findIndex(p => p.postId === postId)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  if (loading) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="blog-section__loading" style={{ paddingTop: '160px' }}>
            <div className="blog-section__spinner"></div>
            <p>Loading article...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="blog-post-page" style={{ paddingTop: '160px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '24px' }}>Article not found</h2>
          <Link to="/blogs" className="btn-primary">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <article className="blog-post-page">

      {/* Hero Banner */}
      <div className="blog-post__hero">
        <img
          src={post.image}
          alt={post.title}
          className="blog-post__hero-img"
          onError={e => { e.target.src = '/img/placeholder.jpg' }}
        />
        <div className="blog-post__hero-overlay" />
        <div className="container blog-post__hero-content">
          <nav className="blog-post__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blogs">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </nav>
          {post.labels?.length > 0 && (
            <div className="blog-post__labels">
              {post.labels.map(l => (
                <span className="blog-post__label" key={l}>{l}</span>
              ))}
            </div>
          )}
          <h1 className="blog-post__title">{post.title}</h1>
          <div className="blog-post__meta">
            <span>✍ {post.author}</span>
            <span>📅 {post.published}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container">
        <div className="blog-post__layout">
          <div
            className="blog-post__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Prev / Next navigation */}
        <nav className="blog-post__nav">
          {prevPost ? (
            <Link
              to={`/blogs/${prevPost.postId}/${prevPost.slug}`}
              className="blog-post__nav-item blog-post__nav-item--prev"
            >
              <span className="blog-post__nav-dir">← Previous Article</span>
              <img
                src={prevPost.image}
                alt={prevPost.title}
                className="blog-post__nav-img"
                onError={e => { e.target.src = '/img/placeholder.jpg' }}
              />
              <span className="blog-post__nav-title">{prevPost.title}</span>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              to={`/blogs/${nextPost.postId}/${nextPost.slug}`}
              className="blog-post__nav-item blog-post__nav-item--next"
            >
              <span className="blog-post__nav-dir">Next Article →</span>
              <img
                src={nextPost.image}
                alt={nextPost.title}
                className="blog-post__nav-img"
                onError={e => { e.target.src = '/img/placeholder.jpg' }}
              />
              <span className="blog-post__nav-title">{nextPost.title}</span>
            </Link>
          ) : <div />}
        </nav>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Link to="/blogs" className="btn-primary">← Back to All Articles</Link>
        </div>
      </div>
    </article>
  )
}
