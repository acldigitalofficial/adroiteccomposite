import { useEffect } from 'react'

const parent = {
  name: 'Adroitec Information Systems',
  role: 'Group Holding Company',
  badge: 'Parent Entity · 36+ Yrs',
  logo: '/svg/logo-adroitec-green.svg',
  url: 'https://www.adroitecinfo.com',
  tags: ['CAD / CAM', 'Carbon Composites', 'Systems Integration'],
  desc: 'CAD, Reverse Engineering, Additive Manufacturing, Carbon Composites, Systems Integration and Software Solutions.',
}

const children = [
  {
    name: 'Adroitec Composite Lab',
    role: 'Advanced Composites',
    badge: 'This Site',
    badgeColor: '#0DA574',
    logo: '/img/logo.png',
    url: '/',
    tags: ['Marine', 'Aerospace', 'Defence'],
    desc: 'Marine, Aerospace & Defence composite structures using Glass Fiber, Carbon Fiber and Kevlar.',
    highlight: true,
  },
  {
    name: '4D Simulations (4DS)',
    role: 'Additive Manufacturing',
    logo: '/svg/logo-4ds.svg',
    url: 'https://www.4d-simulations.com',
    tags: ['Metal AM', 'Polymer AM', '3D Printing'],
    desc: 'Stratasys, V Fuse Metal, Intech Additive, Xact Metal & Smart Scan. Polymer to metal AM.',
  },
  {
    name: 'AMS-India',
    role: 'Engineering & Automation',
    logo: '/svg/logo-ams-india.svg',
    url: 'https://www.ams-india.co.in',
    tags: ['Robotics', 'IIoT', 'BIM'],
    desc: 'CAD/CAM/CAE/PLM, Robotic Automation (ABB), IIoT, Honeywell CoE, BIM, Drone Manufacturing.',
  },
  {
    name: 'Adroitec Engineering Solutions',
    role: 'CAD / PLM / KBE',
    logo: '/svg/logo-adroitec-blue.svg',
    url: 'https://www.adroitecinfo.com',
    tags: ['PTC Creo', 'Ansys', 'PLM'],
    desc: 'ISO 9001:2015. 300+ engineers. PTC Creo, Windchill, Ansys. US subsidiary HOPE Consulting Inc.',
  },
  {
    name: 'Hope Technologies',
    role: 'IT & GIS Solutions',
    logo: '/svg/logo-hope.svg',
    url: 'https://www.adroitecinfo.com',
    tags: ['GIS', 'ZWCAD', 'Bentley'],
    desc: 'CAD, GIS, Remote Sensing. Authorised reseller of ZWCAD, Bentley and SketchUp.',
  },
]

export default function GroupOfCompanies() {
  // Draw the horizontal rail connecting child branches
  useEffect(() => {
    const draw = () => {
      const rail = document.getElementById('orgRail')
      const level = rail?.closest('.org-level--children')
      if (!rail || !level) return
      const branches = level.querySelectorAll('.org-branch')
      if (branches.length < 2) return
      const first = branches[0].getBoundingClientRect()
      const last = branches[branches.length - 1].getBoundingClientRect()
      const parent = level.getBoundingClientRect()
      rail.style.left = (first.left + first.width / 2 - parent.left) + 'px'
      rail.style.right = (parent.right - (last.left + last.width / 2)) + 'px'
    }
    draw()
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  return (
    <section className="group-companies">
      <div className="group-companies__rule" aria-hidden="true" />
      <div className="container">
        {/* Header */}
        <div className="group-companies__header" data-aos="fade-up" data-aos-duration="600">
          <span className="group-companies__eyebrow">Adroitec Group</span>
          <h2 className="group-companies__title">Our Group of Companies</h2>
          <p className="group-companies__lead">Five specialised entities. One shared legacy of engineering excellence.</p>
        </div>

        {/* Org Tree */}
        <div className="org-tree">
          {/* Level 1 — Parent */}
          <div className="org-level" data-aos="fade-up" data-aos-duration="700">
            <a href={parent.url} target="_blank" rel="noopener noreferrer"
               className="org-node org-node--parent" aria-label={`Visit ${parent.name}`}>
              <div className="org-node__logo-pane">
                <img src={parent.logo} alt={parent.name} className="org-node__logo" />
              </div>
              <div className="org-node__body">
                <span className="org-node__badge">{parent.badge}</span>
                <h3 className="org-node__name">{parent.name}</h3>
                <p className="org-node__role">{parent.role}</p>
                <p className="org-node__desc">{parent.desc}</p>
                <ul className="org-node__tags">
                  {parent.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
                <span className="org-node__cta">Visit website →</span>
              </div>
            </a>
          </div>

          {/* Stem */}
          <div className="org-stem" aria-hidden="true" />

          {/* Level 2 — Children */}
          <div className="org-level org-level--children" style={{ position: 'relative', paddingTop: 0 }}>
            <div className="org-rail" id="orgRail" aria-hidden="true" />

            {children.map((child, i) => (
              <div className="org-branch" key={i}
                   data-aos="fade-up" data-aos-duration="600"
                   data-aos-delay={60 * (i + 1)}>
                <div className="org-branch__drop" aria-hidden="true" />
                <a
                  href={child.url}
                  target={child.url.startsWith('/') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`org-node${child.highlight ? ' org-node--acl' : ''}`}
                  aria-label={`Visit ${child.name}`}
                >
                  <div className="org-node__logo-pane">
                    <img src={child.logo} alt={child.name} className="org-node__logo" />
                  </div>
                  <div className="org-node__body">
                    {child.badge && (
                      <span className="org-node__badge"
                            style={child.badgeColor ? { background: child.badgeColor } : undefined}>
                        {child.badge}
                      </span>
                    )}
                    <h3 className="org-node__name">{child.name}</h3>
                    <p className="org-node__role">{child.role}</p>
                    <p className="org-node__desc">{child.desc}</p>
                    <ul className="org-node__tags">
                      {child.tags.map(t => <li key={t}>{t}</li>)}
                    </ul>
                    {!child.highlight && <span className="org-node__cta">Visit website →</span>}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="group-companies__rule" aria-hidden="true" />
    </section>
  )
}
