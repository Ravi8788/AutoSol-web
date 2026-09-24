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
        </div>
      </footer>
    </main>
  );
}
