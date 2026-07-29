import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/homeData'

export default function Projects() {
  return (
    <>
      <section className="hero" style={{ minHeight: '50vh', padding: '160px 0 80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="hero_badge">Our Work</span>
          <h1 className="hero_title" style={{ fontSize: '42px' }}>Projects</h1>
          <p className="hero_text" style={{ maxWidth: '700px', margin: '0 auto' }}>A selection of high-impact composite engineering projects delivered across marine, aerospace, and defense sectors.</p>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <SectionTitle subtitle="Featured Projects" title="Engineering Excellence in Action" />
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
    </>
  )
}
