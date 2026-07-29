import SectionTitle from '../components/SectionTitle'

const services = [
  { img: '/img/Marine Composite Doors.png', title: 'Marine Composite Doors', desc: 'High-performance A30/A60 fire-rated and watertight composite doors for naval vessels, commercial ships, and offshore platforms.', features: ['A30/A60 Fire Rated', 'Watertight Sealed', 'Lightweight Design', 'Naval Grade'] },
  { img: '/img/UAV & Drone Components1.jpg', title: 'UAV & Drone Components', desc: 'Ultra-lightweight airframes, fuselage components, wing structures, and radomes optimized for aerospace missions.', features: ['Carbon Fiber Airframes', 'Wing Structures', 'Radomes', 'Fuselage Panels'], reverse: true },
  { img: '/img/Defense Composite Products.jpg', title: 'Defense Composite Products', desc: 'Lightweight ballistic armor panels, Kevlar protective components, and specialized shielding for defense systems.', features: ['Ballistic Armor', 'Kevlar Panels', 'Vehicle Protection', 'Blast Shields'] },
]

export default function Services() {
  return (
    <>
      <section className="hero" style={{ minHeight: '50vh', padding: '160px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="hero_badge">Our Services</span>
          <h1 className="hero_title" style={{ fontSize: '42px' }}>Products & Services</h1>
          <p className="hero_text" style={{ maxWidth: '700px', margin: '0 auto' }}>End-to-end composite engineering solutions from design to production.</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <SectionTitle subtitle="What We Offer" title="Precision-Engineered Composite Solutions" />
          <div className="services_grid">
            {services.map((svc, i) => (
              <div className={`service_card${svc.reverse ? ' service_card--reverse' : ''}`} data-aos="fade-up" key={i}>
                <div className="service_img-wrap">
                  <img src={svc.img} alt={svc.title} className="service_img" />
                </div>
                <div className="service_info-wrap">
                  <h3 className="service_title">{svc.title}</h3>
                  <p className="service_desc">{svc.desc}</p>
                  <ul className="service_list">
                    {svc.features.map((f) => (
                      <li className="service_item" key={f}><i className="icon-check"></i> {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
