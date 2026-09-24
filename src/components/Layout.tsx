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
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span>© {new Date().getFullYear()} AutoSol Technologies. All rights reserved.</span>
            <span style={{ display: "inline-block" }}>
              <a href="tel:+918668686934" style={{ color: "inherit", lineHeight: 1.2, whiteSpace: "nowrap" }}>+91 86686 86934</a>
            </span>
            <span style={{ color: "inherit", lineHeight: 1.2 }}>Kolhapur, Maharashtra</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
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
            <a
              href="https://www.linkedin.com/in/autosoltechnologies-4b948043a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-bottom-ig"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3zm-1.25 1.06h2.5v8.44h-2.5V9.56zm4.11 0h2.39v1.15h.03c.33-.63 1.14-1.3 2.34-1.3 2.5 0 2.96 1.64 2.96 3.77v6.82h-2.5v-6.38c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.65-2.44 3.35v6.5h-2.5V9.56z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
