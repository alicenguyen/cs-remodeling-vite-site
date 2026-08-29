import heroSketch from "../assets/illustrations/cs-blueprint-house-hero-transparent.png";
import { CheckIcon } from "./icons";
import "./About.css";

const POINTS = [
  "30+ years of combined remodeling experience",
  "Veteran owned and operated",
  "Licensed — CA Lic. #1058143",
  "Serving Poway and the greater San Diego area",
  "Clear communication and a clean jobsite on every job",
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-art">
          <img src={heroSketch} alt="Sketch of a remodeled craftsman home" />
        </div>

        <div className="about-copy">
          <span className="section-eyebrow">Who We Are</span>
          <h2>About C&S Remodeling</h2>
          <hr className="rule" />
          <p>
            C&S Remodeling is a Poway-based remodeling company built on three decades of
            hands-on construction experience. We take on kitchens, baths, decks, interior
            remodels, and general home repairs — and we treat every job, large or small,
            with the same attention to detail.
          </p>
          <p>
            As a veteran-owned business, we bring the same discipline and reliability to your
            home that we brought to our service. Homeowners across Poway and San Diego have come
            to trust us for straightforward communication and quality craftsmanship from start to
            finish.
          </p>

          <ul className="about-points">
            {POINTS.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
