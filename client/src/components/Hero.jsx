import heroSketch from "../assets/illustrations/cs-blueprint-house-hero-transparent.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            Built Right.
            <br />
            Built to Last.
          </h1>
          <hr className="rule" />
          <p className="hero-subhead">Poway Remodeling Backed by 30+ Years of Experience</p>
          <p className="hero-body">
            From kitchens and baths to decks, interior remodeling, and home repairs — quality
            work with clear communication from start to finish.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Request a Free Estimate
            </a>
            <a href="#projects" className="btn btn-outline">
              See Our Projects
            </a>
          </div>
        </div>

        <div className="hero-art">
          <img
            src={heroSketch}
            alt="Architectural sketch of a craftsman-style home remodeled by C&S Remodeling"
          />
        </div>
      </div>
    </section>
  );
}
