import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

function Layout() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-background"></div>
      <div className="absolute inset-0 gradient-overlay opacity-60"></div>

      <Nav />

      <div className="relative z-10 pt-12">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
