import { useState, useEffect } from 'react'

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', company: '', message: '' })
      onClose()
    }, 2500)
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
            <p>We've received your request. Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Request a Quote</h2>
              <p className="modal-desc">Fill in your details and our engineering team will get back to you within 24-48 hours.</p>
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
                <label htmlFor="quote-message">Project Details / Requirements *</label>
                <textarea id="quote-message" name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Describe your composite requirements, material type, quantity, timeline..." required></textarea>
              </div>

              <button type="submit" className="modal-form__submit">
                Submit Request <span>→</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
