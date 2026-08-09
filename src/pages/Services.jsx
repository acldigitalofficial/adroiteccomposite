import SectionTitle from '../components/SectionTitle'
import { mfgCapabilities } from '../data/homeData'
import { FiCheck } from 'react-icons/fi'

const services = [
  {
    img: '/img/Marine Composite Doors.png',
    title: 'Marine Composite Doors',
    desc: 'High-performance A30/A60 fire-rated and watertight composite doors for naval vessels, commercial ships, and offshore platforms.',
    features: ['A30/A60 Fire Rated', 'Watertight Sealed', 'Lightweight Design', 'Naval Grade'],
  },
  {
    img: '/img/UAV & Drone Components1.jpg',
    title: 'UAV & Drone Components',
    desc: 'Ultra-lightweight airframes, fuselage components, wing structures, and radomes optimized for aerospace missions.',
    features: ['Carbon Fiber Airframes', 'Wing Structures', 'Radomes', 'Fuselage Panels'],
    reverse: true,
  },
  {
    img: '/img/Defense Composite Products.jpg',
    title: 'Defense Composite Products',
    desc: 'Lightweight ballistic armor panels, Kevlar protective components, and specialized shielding for defense systems.',
    features: ['Ballistic Armor', 'Kevlar Panels', 'Vehicle Protection', 'Blast Shields'],
  },
  {
    img: '/img/Custom Composite Fabrication.png',
    title: 'Custom Composite Fabrication',
    desc: 'Precision manufacturing of bespoke composite components using glass fiber, carbon fiber, Kevlar, and advanced epoxy systems.',
    features: ['Bespoke Components', 'Multi-material', 'Tight Tolerances', 'Low to High Volume'],
    reverse: true,
  },
  {
    img: '/img/Engineering Services.jpg',
    title: 'Engineering Services',
    desc: 'End-to-end CAD modelling, Finite Element Analysis (FEA), material optimisation, and design-for-manufacture support.',
    features: ['CAD Modelling', 'FEA Analysis', 'Material Optimisation', 'DFM Support'],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="/img/Marine Composite Doors.png" alt="Products & Services" className="about-hero__img" />
          <div className="about-hero__overlay" />
        </div>
        <div className="container about-hero__content">
          <span className="hero_badge" data-aos="fade-up" data-aos-duration="600">Products &amp; Services</span>
          <h1 className="about-hero__title" data-aos="fade-up" data-aos-delay="80" data-aos-duration="700">
            Precision-Engineered<br /><span>Composite Solutions</span>
          </h1>
          <p className="about-hero__sub" data-aos="fade-up" data-aos-delay="160" data-aos-duration="700">
            End-to-end composite engineering from design to delivery — marine, aerospace, and defense.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Products & Services"
            description="Bespoke composite solutions engineered for the most demanding marine, aerospace, and defense applications."
          />
          <div className="services_grid">
            {services.map((svc, i) => (
              <div
                className={`service_card${svc.reverse ? ' service_card--reverse' : ''}`}
                data-aos="fade-up"
                data-aos-delay={80 * (i + 1)}
                data-aos-duration="700"
                key={i}
              >
                <div className="service_img-wrap">
                  <img src={svc.img} alt={svc.title} className="service_img" />
                </div>
                <div className="service_info-wrap">
                  <h3 className="service_title">{svc.title}</h3>
                  <p className="service_desc">{svc.desc}</p>
                  <ul className="service_list">
                    {svc.features.map((f) => (
                      <li className="service_item" key={f}>
                        <FiCheck style={{ color: 'var(--burgundy)', flexShrink: 0 }} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities — merged in */}
      <section className="mfg theme-dark">
        <div className="container">
          <SectionTitle
            subtitle="Manufacturing Capabilities"
            title="State-of-the-Art Composite Manufacturing"
            description="Our facility at Sidco Industrial Estate, Alathur (Tamil Nadu) is equipped for full-cycle composite manufacturing from lay-up through finishing."
          />
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
