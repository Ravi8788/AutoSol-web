"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";
import Motion from "./Motion";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

function NavItem({
  href,
  end = false,
  onClick,
  children,
}: {
  href: string;
  end?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const active = end ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link href={href} className={active ? "active" : undefined} onClick={onClick}>
      {children}
    </Link>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${footer ? "brand--footer" : ""}`}
      aria-label="AutoSol Technologies home"
    >
      <span className="brand-image">
        <Image
          src="/logo-mark.png"
          alt="AutoSol Technologies logo"
          priority
          width={48}
          height={48}
          unoptimized
        />
      </span>
      <span className="brand-type">
        <strong>Auto<span>Sol</span></strong>
        <small>TECHNOLOGIES</small>
      </span>
    </Link>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <main>
      <ScrollToTop />
      <Motion />
      <header ref={headerRef} className="site-header">
        <div className="nav-wrap">
          <Brand />
          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            <NavItem href="/" end onClick={closeMenu}>Home</NavItem>
            <NavItem href="/services" onClick={closeMenu}>Services</NavItem>
            <NavItem href="/products" onClick={closeMenu}>Products</NavItem>
            <NavItem href="/work" onClick={closeMenu}>Work</NavItem>
            <NavItem href="/training" onClick={closeMenu}>Training</NavItem>
            <NavItem href="/insights" onClick={closeMenu}>Insights</NavItem>
            <NavItem href="/contact" onClick={closeMenu}>Contact</NavItem>
            <Link href="/contact" className="mobile-contact" onClick={closeMenu}>
              Contact us <Arrow />
            </Link>
          </nav>
          <Link href="/contact" className="nav-cta">Start a project <Arrow /></Link>
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

      {children}

      <WhatsAppButton />
      <footer>
        <div className="container footer-grid">
          <div>
            <Brand footer />
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/autosoltechonologies?stkn=YmE5eWhqeGdkbWtp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/autosoltechnologies-4b948043a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 9.04c.84 0 1.53-.68 1.53-1.52S7.78 5.99 6.94 5.99s-1.53.68-1.53 1.53c0 .84.68 1.52 1.53 1.52zm-1.27 1.16h2.53v7.8H5.67v-7.8zm4.04 0h2.43v1.06h.04c.34-.63 1.17-1.3 2.4-1.3 2.57 0 3.04 1.69 3.04 3.89v3.15h-2.54v-2.95c0-.7-.01-1.6-1-1.6-1 0-1.15 0.78-1.15 1.58v2.97H9.71v-7.8zm-4.04 0h2.53v7.8H5.67v-7.8z"/>
                </svg>
              </a>
            </div>
            <p>From ideas to intelligent systems.</p>
            <strong>BUILD. AUTOMATE. GROW.</strong>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <h3>Capabilities</h3>
            <Link href="/services">AI & Automation</Link>
            <Link href="/services">Software & Data</Link>
            <Link href="/training">Training</Link>
          </div>
          <div className="footer-links">
            <h3>Products</h3>
            <Link href="/products">AI Core</Link>
            <Link href="/products">AutoSol CRM</Link>
            <Link href="/products">Business OS</Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <div className="footer-bottom-inner">
            <span className="footer-copyright">© {new Date().getFullYear()} AutoSol Technologies. All rights reserved.</span>
            <div className="footer-policy-links">
              <span className="footer-policy-link">Privacy Policy</span>
              <span>|</span>
              <span className="footer-policy-link">Terms &amp; Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
