import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const navItems = ['About', 'Education', 'Internships', 'Skills', 'Certifications', 'Projects', 'Contact']

  return (
    <header className="bg-secondary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        {/* Logo / Name */}
        <h1 className="text-lg font-bold">Portfolio</h1>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" onClick={closeMenu} className="hover:text-accent font-medium">Home</NavLink>
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              onClick={closeMenu}
              className={({ isActive }) =>
                `hover:text-accent capitalize font-medium ${
                  isActive ? 'text-accent' : 'text-white'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button className="text-xl md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary px-4 pb-4 space-y-2">
          <NavLink to="/" onClick={closeMenu} className="block hover:text-accent font-medium">Home</NavLink>
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block hover:text-accent capitalize font-medium ${
                  isActive ? 'text-accent' : 'text-white'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
