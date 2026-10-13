import React from 'react'
import { NavLink } from 'react-router-dom'

const currentYear = new Date().getFullYear()

export const Footer: React.FC = () => {
  const navLinks = [
    { to: '/', label: 'Kame House' },
    { to: '/game', label: 'Mini Juego' },
    { to: '/mundo-z', label: 'Mundo Z' },
  ]

  return (
    <footer className="w-full bg-dark border-t-2 border-primary/40 mt-20 text-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col items-center gap-8">
        {/* Brand & Logo */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <figure className="size-16 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_18px_0] shadow-primary/50">
            <img
              src="/logo-image.png"
              alt="Dragon Ball Z"
              className="w-full h-full object-cover"
            />
          </figure>
          <div>
            <h3 className="text-xl font-extrabold text-primary tracking-widest uppercase">
              Universo Dragon Ball Z
            </h3>
            <p className="text-xs text-light/70 max-w-md mt-1">
              Explora sagas legendarias, personajes con ki inmenso y planetas descubiertos por los guerreros más poderosos del cosmos.
            </p>
          </div>
        </div>

        {/* Links with NavLink */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'border-b-primary text-primary font-bold'
                    : 'border-b-transparent text-light/80 hover:text-primary hover:border-b-light'
                } text-sm sm:text-base font-semibold border-b-2 transition-all duration-300 pb-1`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-primary/20" />

        {/* DBZ Small Tribute / Legal note */}
        <div className="text-center text-xs text-light/60 space-y-1">
          <p>
            Inspirado en el universo de Akira Toriyama • Toei Animation • Bird Studio / Shueisha
          </p>
          <p className="text-[11px] text-light/40">
            © {currentYear} Mundo Z — Creado para los verdaderos Guerreros Z.
          </p>
        </div>
      </div>
    </footer>
  )
}

