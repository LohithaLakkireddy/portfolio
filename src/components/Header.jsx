import { NavLink } from 'react-router-dom'

const Header = () => {
  const navItems = ['About', 'Education', 'Internships', 'Skills', 'Certifications', 'Projects', 'Contact']

  return (
    <header className="bg-secondary text-text py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <nav className="space-x-4 text-sm">
          <NavLink to="/" className="hover:text-accent font-semibold">Home</NavLink>
          {navItems.map((item) => (
            <NavLink key={item} to={`/${item}`} className="hover:text-accent capitalize font-semibold">
              {item}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
