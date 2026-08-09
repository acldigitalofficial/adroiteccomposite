import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import Home from './pages/Home'
import About from './pages/About'
import CompanyProfile from './pages/CompanyProfile'
import Services from './pages/Services'
import Capabilities from './pages/Capabilities'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 50,
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    })
  }, [])

  // Global event listener: any click on .btn-request-demo opens the modal
  useEffect(() => {
    const handleClick = (e) => {
      const trigger = e.target.closest('.btn-request-demo')
      if (trigger) {
        e.preventDefault()
        setModalOpen(true)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
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
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:postId/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Router>
  )
}

export default App
