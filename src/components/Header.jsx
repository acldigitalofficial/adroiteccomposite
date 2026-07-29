import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/company-profile', label: 'Company Profile' },
  { path: '/services', label: 'Products & Services' },
  { path: '/capabilities', label: 'Capabilities' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const [opened, setOpened] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setOpened(false)
  }, [location.pathname])

  const headerClass = `header${sticky ? ' sticky' : ''}${opened ? ' opened' : ''}`

  return (
    <header className={headerClass}>
      <div className="container">
        <Link className="brand" to="/">
          <img src="/img/logo.png" alt="Adroitec Composite Lab (ACL)" />
        </Link>

        <nav className={`header_nav${opened ? ' active' : ''}`}>
          <ul className="header_nav-list">
            {navLinks.map((link) => (
              <li className="header_nav-list_item" key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'current' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="header_nav-list_item">
              <a className="btn-nav-cta btn-request-demo" href="#contactSection">
                Request a Quote
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="header_trigger"
          aria-label="Toggle menu"
          onClick={() => setOpened(!opened)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
