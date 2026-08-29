import { useState } from "react";
import logo from "../assets/branding/cs-remodeling-logo-transparent.png";
import { PhoneIcon } from "./icons";
import "./Header.css";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

const PHONE_DISPLAY = "619.339.5722";
const PHONE_HREF = "tel:+16193395722";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <a className="topbar-phone" href={PHONE_HREF}>
            <PhoneIcon />
            <span>{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <div className="container navbar">
        <a href="#top" className="brand">
          <img src={logo} alt="C&S Remodeling logo" className="brand-logo" />
          <span className="brand-name">C&S Remodeling</span>
        </a>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-outline nav-contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
