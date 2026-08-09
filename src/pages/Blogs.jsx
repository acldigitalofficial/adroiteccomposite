import { useEffect, useState } from 'react'
import { fetchBlogPosts } from '../utils/blogFeed'
import { BlogCard } from '../components/BlogSection'

const POSTS_PER_PAGE = 9

export default function Blogs() {
  const [posts, setPosts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [activeLabel, setActiveLabel] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchBlogPosts(50)
      .then(data => {
        setPosts(data)
        setFiltered(data)
        setLoading(false)
      })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  const allLabels = ['All', ...Array.from(new Set(posts.flatMap(p => p.labels || [])))]

  // Filter by label — reset to page 1 on filter change
  useEffect(() => {
    let result = posts
    if (activeLabel !== 'All') {
      result = result.filter(p => p.labels?.includes(activeLabel))
    }
    setFiltered(result)
    setCurrentPage(1)
  }, [activeLabel, posts])

  // Pagination calculations
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE
  const pagePosts = filtered.slice(startIdx, startIdx + POSTS_PER_PAGE)

  const goToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Build page number array with ellipsis
  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages = []
    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, '...', totalPages)
    } else if (currentPage >= totalPages - 3) {
      pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
    }
    return pages
  }

  return (
    <>
      {/* Page Banner */}
      <section className="blogs-hero">
        <div className="container">
          <span className="hero_badge" data-aos="fade-up" data-aos-duration="600">ACL Blog</span>
          <h1 className="blogs-hero__title" data-aos="fade-up" data-aos-delay="80" data-aos-duration="700">Our Latest Articles</h1>
          <p className="blogs-hero__desc" data-aos="fade-up" data-aos-delay="160" data-aos-duration="700">
            Technical insights, project highlights, and composite engineering news from Adroitec Composite Lab.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="blogs-content">
        <div className="container">

          {/* Label filters */}
          {!loading && !error && allLabels.length > 1 && (
            <div className="blogs-filters" data-aos="fade-up" data-aos-duration="600">
              {allLabels.map(label => (
                <button
                  key={label}
                  className={`blogs-filter-btn${activeLabel === label ? ' active' : ''}`}
                  onClick={() => setActiveLabel(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="blog-section__loading">
              <div className="blog-section__spinner"></div>
              <p>Loading articles...</p>
            </div>
          )}

          {error && (
            <div className="blog-section__error">
              <p>Unable to load posts. Please try again later.</p>
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="blog-section__error">
              <p>No articles found.</p>
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <>
              {/* Count + page info */}
              <div className="blogs-meta-row">
                <p className="blogs-count">
                  {filtered.length} article{filtered.length !== 1 ? 's' : ''}
                </p>
                {totalPages > 1 && (
                  <p className="blogs-page-info">
                    Page {currentPage} of {totalPages}
                  </p>
                )}
              </div>

              {/* Grid */}
              <div className="blog-section__grid blogs-page__grid">
                {pagePosts.map((post, i) => (
                  <BlogCard key={post.postId || i} post={post} delay={80 * ((i % 3) + 1)} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="blogs-pagination" aria-label="Blog pagination">
                  {/* Prev */}
                  <button
                    className="blogs-pagination__btn blogs-pagination__arrow"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    ← Prev
                  </button>

                  {/* Page numbers */}
                  {getPageNumbers().map((page, i) =>
                    page === '...' ? (
                      <span key={`ellipsis-${i}`} className="blogs-pagination__ellipsis">…</span>
                    ) : (
                      <button
                        key={page}
                        className={`blogs-pagination__btn${currentPage === page ? ' active' : ''}`}
                        onClick={() => goToPage(page)}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    )
                  )}

                  {/* Next */}
                  <button
                    className="blogs-pagination__btn blogs-pagination__arrow"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    Next →
                  </button>
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
