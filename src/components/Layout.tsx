import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router";
import logo from "@/imports/logo_attachment2.jpeg";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? "brand--footer" : ""}`}
      aria-label="AutoSol Technologies home"
    >
      <span className="brand-image">
        <img src={logo} alt="" />
      </span>
      <span className="brand-type">
        <strong>Auto<span>Sol</span></strong>
        <small>TECHNOLOGIES</small>
      </span>
    </Link>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <ScrollToTop />
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
            <NavLink to="/work" onClick={closeMenu}>Work</NavLink>
            <NavLink to="/training" onClick={closeMenu}>Training</NavLink>
            <NavLink to="/insights" onClick={closeMenu}>Insights</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            <Link to="/contact" className="mobile-contact" onClick={closeMenu}>
              Contact us <Arrow />
            </Link>
          </nav>
          <Link to="/contact" className="nav-cta">Start a project <Arrow /></Link>
          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <Outlet />

      <WhatsAppButton />
      <footer>
        <div className="container footer-grid">
          <div>
            <Brand footer />
            <p>From ideas to intelligent systems.</p>
            <strong>BUILD. AUTOMATE. GROW.</strong>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <h3>Capabilities</h3>
            <Link to="/services">AI & Automation</Link>
            <Link to="/services">Software & Data</Link>
            <Link to="/training">Training</Link>
          </div>
          <div className="footer-links">
            <h3>Products</h3>
            <Link to="/products">AI Core</Link>
            <Link to="/products">AutoSol CRM</Link>
            <Link to="/products">Business OS</Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} AutoSol Technologies. All rights reserved.
            <span style={{ display: "inline-flex", flexDirection: "column", marginLeft: "10px", verticalAlign: "top" }}>
              <a href="tel:+918668686934" style={{ color: "inherit", lineHeight: 1.2, display: "block" }}>+91</a>
              <a href="tel:+918668686934" style={{ color: "inherit", lineHeight: 1.2, display: "block" }}>86686 86934</a>
            </span>
          </span>
          <a
            href="https://www.instagram.com/autosoltechnologies"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-bottom-ig"
            aria-label="Instagram"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
