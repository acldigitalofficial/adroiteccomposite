import SectionTitle from '../components/SectionTitle'
import BlogSection from '../components/BlogSection'
import MapEmbed from '../components/MapEmbed'
import GroupOfCompanies from '../components/GroupOfCompanies'
import { FiFeather, FiCrosshair, FiShield, FiPackage } from 'react-icons/fi'
import { heroChips, collageItems, whyCards, materials, mfgCapabilities, processSteps, industries, projects } from '../data/homeData'

const iconMap = {
  Feather: FiFeather,
  Crosshair: FiCrosshair,
  Shield: FiShield,
  Package: FiPackage,
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* Full-bleed background image */}
        <div className="hero__bg">
          <img
            src="/img/Carbon Fiber Reinforced Polymer (CFRP).jpg"
            alt="Advanced Composite Engineering"
            className="hero__bg-img"
          />
          <div className="hero__bg-overlay" />
        </div>

        <div className="container hero__container">

          {/* Left: badge + heading + desc + CTAs */}
          <div className="hero__left" data-aos="fade-up" data-aos-duration="900">

            <span className="hero_badge">
              Marine &nbsp;·&nbsp; Aerospace &nbsp;·&nbsp; Defense
            </span>

            <h1 className="hero__heading">
              Precision<br />
              Composite<br />
              <span>Solutions</span>
            </h1>

            <p className="hero__sub">
              Designing and manufacturing lightweight, high-strength composite structures using Glass Fiber, Carbon Fiber, Kevlar, and Advanced Epoxy Systems.
            </p>

            <div className="hero__actions">
              <a className="hero__btn-primary btn-request-demo" href="#contactSection">
                Request a Quote
              </a>
              <a className="hero__btn-secondary" href="/about">
                Learn More
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="hero__stats-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="hero__stat">
              <span className="hero__stat-value">100+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">100%</span>
              <span className="hero__stat-label">Quality Rate</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">50+</span>
              <span className="hero__stat-label">Engineers</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">36+</span>
              <span className="hero__stat-label">Yrs Heritage</span>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <div className="container">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Engineering Excellence Through Advanced Composite Technology"
            description="We combine advanced engineering, premium composite materials, and precision manufacturing to develop lightweight, durable, and high-performance solutions from concept to production."
          />
          <div className="why_grid">
            {whyCards.map((card, i) => {
              const IconComponent = iconMap[card.icon]
              return (
                <div className="why_card" data-aos="fade-up" data-aos-delay={100 * (i + 1)} data-aos-duration="700" key={i}>
                  <div className="why_icon-wrap">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h3 className="why_title">{card.title}</h3>
                  <p className="why_desc">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* GROUP OF COMPANIES */}
      <GroupOfCompanies />

      {/* CORE MATERIALS */}
      <section className="materials theme-dark">
        <div className="container">
          <SectionTitle
            subtitle="Our Core Materials"
            title="Advanced Composite Materials & Structural Formulations"
            description="We work with the finest composite reinforcement materials and resin systems, sourced globally and tailored for marine, aerospace, and defense-grade applications."
          />
          <div className="materials_grid">
            {materials.map((mat, i) => (
              <div className="material_card" data-aos="fade-up" data-aos-delay={100 * (i + 1)} data-aos-duration="700" key={i}>
                <div className="material_img-wrap">
                  <img src={mat.img} alt={mat.title} className="material_img" />
                </div>
                <div className="material_content">
                  <h3 className="material_title">{mat.title}</h3>
                  <div className="material_features">
                    {mat.features.map((f) => (
                      <span className="material_feature" key={f}><i className="icon-check"></i> {f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="process">
        <div className="container">
          <SectionTitle
            subtitle="Our Process"
            title="From Concept to Delivery — A Seamless Engineering Workflow"
          />
          <div className="process_timeline-outer" data-aos="fade-up" data-aos-duration="700">
            <div className="process_timeline">
              {processSteps.map((step, i) => (
                <div className="process_node" key={i} data-aos="fade-up" data-aos-delay={80 * (i + 1)} data-aos-duration="600">
                  <div className="process_dot">{String(i + 1).padStart(2, '0')}</div>
                  <div className="process_name">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <div className="container">
          <SectionTitle
            subtitle="Featured Projects"
            title="Our Work Speaks for Itself"
            description="A selection of high-impact composite engineering projects delivered across marine, aerospace, and defense sectors."
          />
          <div className="proj_grid">
            {projects.map((proj, i) => (
              <div className="proj_card" data-aos="fade-up" data-aos-delay={100 * (i + 1)} data-aos-duration="700" key={i}>
                <div className="proj_img-wrap">
                  <img src={proj.img} alt={proj.title} className="proj_img" />
                </div>
                <div className="proj_content">
                  <span className="proj_tag">{proj.tag}</span>
                  <h3 className="proj_title">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <BlogSection />

      {/* MAP */}
      <MapEmbed />

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta_wrap" data-aos="zoom-in">
            <h2 className="cta_title">Ready to Build the Future?</h2>
            <p className="cta_desc">Whether you need a custom composite component, a full engineering solution, or prototype-to-production support — we're your trusted partner.</p>
            <div className="cta_btn-group">
              <a className="btn-primary btn-request-demo" href="#contactSection">Request a Quote <i className="icon-arrow_right"></i></a>
              <a className="btn-secondary" href="#contactSection">Contact Our Team</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
