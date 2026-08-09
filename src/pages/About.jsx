import SectionTitle from '../components/SectionTitle'
import { FiCheck, FiAward, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi'

const team = [
  {
    name: 'Dr. S Mohamed Nabi',
    designation: 'Head, Composite Lab',
    dept: 'Leadership',
    bio: 'B.Sc · B.Tech · M.E · Ph.D (IIT Madras). Leading advanced composite engineering in India with 36+ years of expertise.',
    img: null,
    initials: 'SN',
    color: '#0B1F3A',
  },
  {
    name: 'Composite Engineer',
    designation: 'Senior Design Engineer',
    dept: 'Engineering',
    bio: 'Specialist in FEA, structural analysis, and CAD design for marine and aerospace composite structures.',
    img: null,
    initials: 'CE',
    color: '#1A365D',
  },
  {
    name: 'Materials Specialist',
    designation: 'Materials & Process Engineer',
    dept: 'R&D',
    bio: 'Expert in Carbon Fiber, Glass Fiber, Kevlar systems and advanced epoxy resin formulations.',
    img: null,
    initials: 'MS',
    color: '#FFC631',
    textColor: '#0B1F3A',
  },
  {
    name: 'Manufacturing Lead',
    designation: 'Production & Quality Manager',
    dept: 'Manufacturing',
    bio: 'Oversees all lay-up, vacuum bagging, resin infusion, and structural bonding operations at Alathur facility.',
    img: null,
    initials: 'ML',
    color: '#0DA574',
    textColor: '#fff',
  },
  {
    name: 'Naval Systems Eng.',
    designation: 'Marine Composites Specialist',
    dept: 'Marine',
    bio: 'Designs A30/A60 fire-rated composite doors and watertight structures for naval and offshore applications.',
    img: null,
    initials: 'NS',
    color: '#2D6A9F',
  },
  {
    name: 'Aerospace Engineer',
    designation: 'UAV & Aerospace Structures Lead',
    dept: 'Aerospace',
    bio: 'Develops ultra-lightweight airframes, radomes, and fuselage components for UAV and drone platforms.',
    img: null,
    initials: 'AE',
    color: '#6B4C9A',
  },
]

const stats = [
  { icon: FiAward, value: '36+', label: 'Years of Heritage' },
  { icon: FiUsers, value: '50+', label: 'Expert Engineers' },
  { icon: FiTarget, value: '100+', label: 'Projects Delivered' },
  { icon: FiTrendingUp, value: '100%', label: 'Quality Compliance' },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="/img/Aerospace Sector.jpg" alt="About ACL" className="about-hero__img" />
          <div className="about-hero__overlay" />
        </div>
        <div className="container about-hero__content">
          <span className="hero_badge" data-aos="fade-up">About Us</span>
          <h1 className="about-hero__title" data-aos="fade-up" data-aos-delay="80">
            Adroitec<br /><span>Composite Lab</span>
          </h1>
          <p className="about-hero__sub" data-aos="fade-up" data-aos-delay="160">
            Designing and manufacturing high-performance composite structures for marine, aerospace, and defense since 1988.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats__grid">
            {stats.map((s, i) => (
              <div className="about-stat" key={i} data-aos="fade-up" data-aos-delay={80 * (i + 1)}>
                <s.icon className="about-stat__icon" />
                <span className="about-stat__value">{s.value}</span>
                <span className="about-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Mission */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div data-aos="fade-right">
              <img
                src="/img/Custom Composite Fabrication.png"
                alt="ACL Manufacturing"
                className="about-story__img"
              />
            </div>
            <div className="about-story__content" data-aos="fade-left">
              <span className="section_subtitle">Our Story</span>
              <h2 className="about-story__title">36+ Years of Engineering Heritage</h2>
              <p className="about-story__text">
                Adroitec Composite Lab is a specialized division of Adroitec Information Systems — a group with over three decades of engineering excellence across CAD, additive manufacturing, robotics, and now advanced composites.
              </p>
              <p className="about-story__text">
                Our manufacturing facility at Sidco Industrial Estate, Alathur (Tamil Nadu) is equipped for full-cycle composite manufacturing — from concept and FEA analysis to hand lay-up, vacuum bagging, resin infusion, structural bonding, and CNC finishing.
              </p>
              <ul className="about-story__list">
                {['Advanced Composite Materials', 'Precision Design & FEA Analysis', 'Prototyping & Testing', 'Low-Volume & Production Manufacturing'].map(item => (
                  <li key={item}>
                    <FiCheck className="about-story__check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <SectionTitle
            subtitle="Our Team"
            title="The People Behind Our Excellence"
            description="A dedicated team of composite engineers, materials specialists, and manufacturing professionals driving innovation from concept to delivery."
          />

          <div className="team-grid">
            {team.map((member, i) => (
              <div
                className="team-card"
                key={i}
                data-aos="fade-up"
                data-aos-delay={80 * ((i % 3) + 1)}
              >
                {/* Avatar */}
                <div className="team-card__avatar-wrap">
                  {member.img ? (
                    <img src={member.img} alt={member.name} className="team-card__avatar-img" />
                  ) : (
                    <div
                      className="team-card__initials"
                      style={{
                        background: member.color,
                        color: member.textColor || '#fff',
                      }}
                    >
                      {member.initials}
                    </div>
                  )}
                  <span className="team-card__dept">{member.dept}</span>
                </div>

                {/* Info */}
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <span className="team-card__designation">{member.designation}</span>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
