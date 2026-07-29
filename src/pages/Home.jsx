import SectionTitle from '../components/SectionTitle'
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
        <div className="container">
          <div className="hero_split">
            <div className="hero_left" data-aos="fade-right" data-aos-duration="1000">
              <span className="hero_badge">Advanced Composite Engineering | Marine • Aerospace • Defense</span>
              <h1 className="hero_title">
                Advanced Composite <span>Solutions for Tomorrow's</span> Engineering Challenges
              </h1>
              <p className="hero_text">
                Adroitec Composite Lab (ACL) designs, develops, and manufactures lightweight, high-strength composite structures using Glass Fiber (GFRP), Carbon Fiber (CFRP), Kevlar Reinforced Composites, and Advanced Epoxy Systems.
              </p>
              <div className="hero_cta-group">
                <a className="btn-primary btn-request-demo" href="#contactSection">
                  Request a Quote <i className="icon-arrow_right"></i>
                </a>
                <a className="btn-secondary" href="#contactSection">Contact Our Experts</a>
              </div>
              <div className="hero_chips">
                {heroChips.map((chip) => (
                  <div className="hero_chip" key={chip}><i className="icon-check"></i> {chip}</div>
                ))}
              </div>
            </div>

            <div className="hero_right" data-aos="fade-left" data-aos-duration="1000">
              <div className="hero_collage">
                {collageItems.map((item, i) => (
                  <div className={`collage_item${item.tall ? ' collage_item--tall' : ''}`} key={i}>
                    <img src={item.img} alt={item.label} className="collage_img" />
                    <span className="collage_label">{item.label}</span>
                  </div>
                ))}
              </div>
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
                <div className="why_card" data-aos="fade-up" data-aos-delay={100 * (i + 1)} key={i}>
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
              <div className="material_card" data-aos="fade-up" data-aos-delay={100 * (i + 1)} key={i}>
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

      {/* MANUFACTURING CAPABILITIES */}
      <section className="mfg theme-dark">
        <div className="container">
          <SectionTitle
            subtitle="Manufacturing Capabilities"
            title="State-of-the-Art Composite Manufacturing Processes"
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

      {/* OUR PROCESS */}
      <section className="process">
        <div className="container">
          <SectionTitle
            subtitle="Our Process"
            title="From Concept to Delivery — A Seamless Engineering Workflow"
          />
          <div className="process_timeline-outer" data-aos="fade-up">
            <div className="process_timeline">
              {processSteps.map((step, i) => (
                <div className="process_node" key={i}>
                  <div className="process_dot">{String(i + 1).padStart(2, '0')}</div>
                  <div className="process_name">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries theme-dark">
        <div className="container">
          <SectionTitle
            subtitle="Industries We Serve"
            title="Trusted Across Critical Sectors"
            description="Our composite solutions serve the most demanding environments — from deep-sea naval operations to high-altitude aerospace missions."
          />
          <div className="ind_grid">
            {industries.map((ind, i) => (
              <div className="ind_card" data-aos="fade-up" data-aos-delay={100 * (i + 1)} key={i}>
                <div className="ind_img-wrap">
                  <img src={ind.img} alt={ind.title} className="ind_img" />
                </div>
                <div className="ind_overlay"></div>
                <div className="ind_content">
                  <h3 className="ind_title">{ind.title}</h3>
                </div>
              </div>
            ))}
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
              <div className="proj_card" data-aos="fade-up" data-aos-delay={100 * (i + 1)} key={i}>
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
