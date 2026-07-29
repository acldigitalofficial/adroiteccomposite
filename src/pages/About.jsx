import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <>
      <section className="hero" style={{ minHeight: '50vh', padding: '160px 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="hero_badge">About Us</span>
            <h1 className="hero_title" style={{ fontSize: '42px' }}>About Adroitec Composite Lab</h1>
            <p className="hero_text" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Specializing in design, analysis, development, and manufacturing of advanced composite structures for marine, aerospace, and defense applications.
            </p>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="container">
          <SectionTitle
            subtitle="Our Story"
            title="36+ Years of Engineering Heritage"
            description="Adroitec Composite Lab is a division of Adroitec Information Systems, leveraging decades of engineering expertise to deliver precision composite solutions across India's key industrial corridors."
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div data-aos="fade-right">
              <img src="/img/Custom Composite Fabrication.png" alt="About ACL" style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div data-aos="fade-left">
              <h3 style={{ marginBottom: '16px' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                To pioneer advanced composite engineering in India, translating complex designs into high-performance structural realities for aerospace, naval, and defense applications.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="icon-check" style={{ color: '#0DA574' }}></i> Advanced Composite Materials</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="icon-check" style={{ color: '#0DA574' }}></i> Precision Design & FEA Analysis</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="icon-check" style={{ color: '#0DA574' }}></i> Prototyping & Testing</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><i className="icon-check" style={{ color: '#0DA574' }}></i> Low-Volume & Production Manufacturing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
