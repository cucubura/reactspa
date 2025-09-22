import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">React SPA</div>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'link active' : 'link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'link active' : 'link'}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'link active' : 'link'}>Contact Us</NavLink>
          <NavLink to="/help" className={({ isActive }) => isActive ? 'link active' : 'link'}>Help</NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} React SPA</small>
      </footer>
    </div>
  )
}
