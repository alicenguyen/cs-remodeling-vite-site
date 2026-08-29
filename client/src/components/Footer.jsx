import logo from "../assets/branding/cs-remodeling-logo-transparent.png";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="C&S Remodeling logo" />
          <span>C&S Remodeling</span>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-meta">
          © {year} C&S Remodeling · CA Lic. #1058143 · Poway, CA
        </p>
      </div>
    </footer>
  );
}
