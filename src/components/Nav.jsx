import { NavLink } from 'react-router-dom'

const links = [
  { to: '/watch', label: 'Watch' },
  { to: '/vision', label: 'Vision' },
  { to: '/iphone', label: 'iPhone' },
  { to: '/ipad', label: 'iPad' },
  { to: '/mac', label: 'Mac' },
]

function Nav() {
  return (
    <nav className="apple-nav fixed top-0 left-0 right-0 z-50 fade-in">
      <div className="nav-container">
        <div className="flex items-center justify-between h-12">
          <NavLink to="/watch" className="apple-logo" aria-label="Home">
            <div className="icon-apple text-lg"></div>
          </NavLink>

          <div className="flex items-center space-x-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-item${isActive ? ' active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="icon-search text-lg text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity"></div>
            <div className="icon-shopping-bag text-lg text-[#1d1d1f] cursor-pointer hover:opacity-70 transition-opacity"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
