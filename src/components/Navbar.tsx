import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Kame House' },
    { to: '/game', label: 'Mini Juego' },
    { to: '/mundo-z', label: 'Mundo Z' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-dark/95 border-b-2 border-primary">
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <figure className="size-9 rounded-full overflow-hidden border border-primary/50 shadow-[0_0_12px_0] shadow-primary/40 group-hover:scale-105 transition-transform">
            <img
              src="/logo-image.png"
              alt="DBZ Logo"
              className="w-full h-full object-cover"
            />
          </figure>
          <span className="text-primary font-extrabold text-lg tracking-wider  sm:inline-block">
            DRAGON BALL Z
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${isActive
                  ? 'border-b-primary text-primary font-bold'
                  : 'border-b-transparent text-light hover:text-primary hover:border-b-light'
                } text-base font-semibold border-b-2 transition-all duration-300 pb-1`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Secondary logo (Desktop) */}
        <figure className="hidden md:block size-8 rounded-full overflow-hidden border border-primary/40 shadow-[0_0_10px_0] shadow-primary/30">
          <img src="/logo-image.png" alt="DBZ" className="w-full h-full object-cover" />
        </figure>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-lg text-light hover:text-primary hover:bg-primary/10 transition-colors focus:outline-none"
        >
          {isOpen ? <X className="size-6 text-primary" /> : <Menu className="size-6 text-primary" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-dark border-b border-primary/30 px-6 py-4 flex flex-col gap-3 shadow-xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive
                    ? 'bg-primary/20 text-primary border-l-4 border-primary font-bold pl-3'
                    : 'text-light hover:text-primary hover:bg-primary/10 pl-3'
                  } py-2 rounded-r-lg text-base transition-all duration-200`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

