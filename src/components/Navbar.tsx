import { useState } from "react";
import { NavLink } from "react-router-dom";
import mkcLogo from "@/assets/mkc-logo.jpeg";

const navLinks = [
  { label: "Kendo", to: "/kendo" },
  { label: "Iaido", to: "/iaido" },
  { label: "Il Dojo", to: "/dojo" },
  { label: "Merch", to: "/merch" },
  { label: "Contatti", to: "/contatti" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <NavLink to="/kendo" className="flex items-center gap-3">
          <img src={mkcLogo} alt="MKC Logo" className="h-10 w-auto rounded" />
          <span className="font-heading text-xl tracking-wider text-foreground uppercase hidden sm:block">
            MKC
          </span>
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-heading text-sm tracking-widest uppercase transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-6 pb-6">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 font-heading text-sm tracking-widest uppercase transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
