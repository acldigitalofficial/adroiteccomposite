import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import Header from './components/Header'
import Footer from './components/Footer'
import MapEmbed from './components/MapEmbed'
import Home from './pages/Home'
import About from './pages/About'
import CompanyProfile from './pages/CompanyProfile'
import Services from './pages/Services'
import Capabilities from './pages/Capabilities'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 50,
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    })
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <MapEmbed />
      <Footer />
    </Router>
  )
}

export default App
