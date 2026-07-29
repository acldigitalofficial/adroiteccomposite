import SectionTitle from '../components/SectionTitle'
import { mfgCapabilities } from '../data/homeData'

export default function Capabilities() {
  return (
    <>
      <section className="hero" style={{ minHeight: '50vh', padding: '160px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="hero_badge">Manufacturing</span>
          <h1 className="hero_title" style={{ fontSize: '42px' }}>Manufacturing Capabilities</h1>
          <p className="hero_text" style={{ maxWidth: '700px', margin: '0 auto' }}>State-of-the-art composite manufacturing from hand lay-up to CNC finishing.</p>
        </div>
      </section>

      <section className="mfg theme-dark">
        <div className="container">
          <SectionTitle subtitle="Our Processes" title="Full-Cycle Composite Manufacturing" />
          <div className="mfg_grid">
            {mfgCapabilities.map((cap, i) => (
              <div className="mfg_card" data-aos="fade-up" data-aos-delay={80 * (i + 1)} key={i}>
                <div className="mfg_img-wrap">
                  <img src={cap.img} alt={cap.title} className="mfg_img" />
                </div>
                <div className="mfg_content">
                  <h3 className="mfg_title">{cap.title}</h3>
                  <p className="mfg_desc">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
