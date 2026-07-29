import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you within 24-48 hours.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <section className="hero" style={{ minHeight: '50vh', padding: '160px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="hero_badge">Get In Touch</span>
          <h1 className="hero_title" style={{ fontSize: '42px' }}>Contact Us</h1>
          <p className="hero_text" style={{ maxWidth: '700px', margin: '0 auto' }}>Our technical sales and engineering teams are ready to support your custom composite projects.</p>
        </div>
      </section>

      <section className="contact theme-dark" id="contactSection">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div className="contact_form-wrapper" data-aos="fade-right">
              <h3 className="contact_form-title" style={{ marginBottom: '24px' }}>Send Us a Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label className="contact_label" style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600 }}>Full Name</label>
                  <input className="contact_input" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-grey)', fontSize: '15px' }} />
                </div>
                <div>
                  <label className="contact_label" style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600 }}>Email Address</label>
                  <input className="contact_input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-grey)', fontSize: '15px' }} />
                </div>
                <div>
                  <label className="contact_label" style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600 }}>Phone</label>
                  <input className="contact_input" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Your contact number" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-grey)', fontSize: '15px' }} />
                </div>
                <div>
                  <label className="contact_label" style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600 }}>Message</label>
                  <textarea className="contact_textarea" name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Describe your requirements..." required style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-grey)', fontSize: '15px', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>Submit Request</button>
              </form>
            </div>

            <div className="contact_info-card" data-aos="fade-left" style={{ padding: '36px' }}>
              <h3 className="contact_info-title" style={{ marginBottom: '24px' }}>Contact Information</h3>
              <div className="contact_info-text" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <strong style={{ display: 'block', marginBottom: '4px' }}>Corporate Headquarters</strong>
                  Noida (NCR), Uttar Pradesh, India
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '4px' }}>Manufacturing Facility</strong>
                  Sidco Industrial Estate, Alathur, Tamil Nadu
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '4px' }}>Email</strong>
                  <a href="mailto:dr.nabi@adroitecinfo.com" style={{ color: 'var(--burgundy)' }}>dr.nabi@adroitecinfo.com</a>
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '4px' }}>Point of Contact</strong>
                  Dr S M Nabi — Head, Composite Lab
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
