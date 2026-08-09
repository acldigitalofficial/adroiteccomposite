import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchBlogPosts } from '../utils/blogFeed'

export default function BlogSection() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchBlogPosts(3)
      .then(data => { setPosts(data); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  return (
    <section className="blog-section">
      <div className="container">
        <div className="section_title-wrap" data-aos="fade-up">
          <span className="section_subtitle">Latest Updates</span>
          <h2 className="section_title">From Our Blog</h2>
          <p className="section_desc">Insights, news, and technical articles from the ACL team.</p>
        </div>

        {loading && (
          <div className="blog-section__loading">
            <div className="blog-section__spinner"></div>
            <p>Loading posts...</p>
          </div>
        )}

        {error && (
          <div className="blog-section__error">
            <p>Unable to load posts right now. <Link to="/blogs">View all posts →</Link></p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-section__grid" data-aos="fade-up">
            {posts.map((post, i) => (
              <BlogCard key={i} post={post} delay={100 * (i + 1)} />
            ))}
          </div>
        )}

        <div className="blog-section__footer" data-aos="fade-up">
          <Link to="/blogs" className="btn-primary">View All Posts →</Link>
        </div>
      </div>
    </section>
  )
}

export function BlogCard({ post, delay = 0 }) {
  return (
    <Link
      to={`/blogs/${post.postId}/${post.slug}`}
      className="blog-card"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="blog-card__img-wrap">
        <img
          src={post.image}
          alt={post.title}
          className="blog-card__img"
          onError={e => { e.target.src = '/img/placeholder.jpg' }}
        />
        {post.labels?.[0] && (
          <span className="blog-card__category">{post.labels[0]}</span>
        )}
      </div>
      <div className="blog-card__body">
        <span className="blog-card__date">{post.published}</span>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">
          {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt}
        </p>
        <span className="blog-card__read-more">Read More →</span>
      </div>
    </Link>
  )
}
