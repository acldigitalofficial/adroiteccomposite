import { Link } from 'react-router-dom'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Products & Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/blogs', label: 'Blog' },
  { path: '/contact', label: 'Contact Us' },
]

const serviceLinks = [
  'Marine Composite Doors',
  'UAV & Drone Components',
  'Defense Composite Products',
  'Custom Composite Fabrication',
  'Prototype to Production',
  'Engineering Services',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_grid">
          {/* Brand */}
          <div className="footer_brand-col">
            <div className="footer_brand">
              <img src="/img/logo.png" alt="Adroitec Composite Lab" />
            </div>
            <p className="footer_desc">
              Designing and manufacturing high-performance composite structures using glass fiber, carbon fiber, and Kevlar reinforcements for marine, aerospace, and defense applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              {quickLinks.map((link) => (
                <li className="footer_link-item" key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer_title">Our Services</h4>
            <ul className="footer_links">
              {serviceLinks.map((s) => (
                <li className="footer_link-item" key={s}>
                  <Link to="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer_title">Contact Us</h4>
            <div className="footer_contact-info">
              <div className="footer_contact-item">
                <FiMapPin className="footer_contact-icon" />
                <div>
                  Sidco Industrial Estate,<br />
                  Alathur, Tamil Nadu
                </div>
              </div>
              <div className="footer_contact-item">
                <FiMail className="footer_contact-icon" />
                <div>
                  <a href="mailto:dr.nabi@adroitecinfo.com">dr.nabi@adroitecinfo.com</a>
                </div>
              </div>
              <div className="footer_contact-item">
                <FiPhone className="footer_contact-icon" />
                <div>
                  <a href="tel:+918015146726">+91 80151 46726</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_secondary">
          <p>&copy; {new Date().getFullYear()} Adroitec Composite Lab. All Rights Reserved. A division of Adroitec Information Systems.</p>
        </div>
      </div>
    </footer>
  )
}
