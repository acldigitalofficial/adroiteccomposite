import { useState, useEffect } from 'react'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyFsK3_vkGhVObGby2Owo3mHhCWMfTsrljqOXMCZoMN_KndE-lPC5NUf4Bcn7gYsdbaEQ/exec'

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Google Apps Script requires no-cors for JSONP-style submission
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      // no-cors means we can't read the response — assume success if no throw
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => {
        setSubmitted(false)
        setForm({ name: '', email: '', phone: '', company: '', message: '' })
        onClose()
      }, 2800)
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success__icon">✓</div>
            <h3>Thank You!</h3>
            <p>We've received your request and saved your details. Our team will contact you within 24–48 hours.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Request a Quote</h2>
              <p className="modal-desc">Fill in your details and our engineering team will get back to you within 24–48 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-form__row">
                <div className="modal-form__field">
                  <label htmlFor="quote-name">Full Name *</label>
                  <input id="quote-name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
                </div>
                <div className="modal-form__field">
                  <label htmlFor="quote-email">Email Address *</label>
                  <input id="quote-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
                </div>
              </div>

              <div className="modal-form__row">
                <div className="modal-form__field">
                  <label htmlFor="quote-phone">Phone Number</label>
                  <input id="quote-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your contact number" />
                </div>
                <div className="modal-form__field">
                  <label htmlFor="quote-company">Company / Organization</label>
                  <input id="quote-company" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                </div>
              </div>

              <div className="modal-form__field">
                <label htmlFor="quote-message">Project Details / Requirements <span style={{ fontWeight: 400, textTransform: 'none', color: 'var(--text-muted)' }}>(optional)</span></label>
                <textarea id="quote-message" name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Describe your composite requirements, material type, quantity, timeline..."></textarea>
              </div>

              {error && (
                <p style={{ color: '#e53e3e', fontSize: '13px', marginTop: '-8px' }}>{error}</p>
              )}

              <button type="submit" className="modal-form__submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="modal-spinner"></span> Submitting...
                  </>
                ) : (
                  <>Submit Request <span>→</span></>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
