import kitchenBath from "../assets/illustrations/services/kitchen-bath-blueprint.png";
import decksBalconies from "../assets/illustrations/services/decks-balconies-blueprint.png";
import interiorRemodeling from "../assets/illustrations/services/interior-remodeling-blueprint.png";
import "./Projects.css";

const CATEGORIES = [
  { image: kitchenBath, title: "Kitchen & Bath Remodels" },
  { image: decksBalconies, title: "Decks & Balconies" },
  { image: interiorRemodeling, title: "Interior Remodeling" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-eyebrow">Recent Work</span>
        <h2>Projects</h2>
        <hr className="rule" />
        <p className="projects-intro">
          Project photos are added as jobs wrap up. In the meantime, browse the categories below
          or reach out for references from recent Poway-area clients.
        </p>

        <div className="projects-grid">
          {CATEGORIES.map((cat) => (
            <a className="project-card" href="#contact" key={cat.title}>
              <div className="project-card-media">
                <img src={cat.image} alt={`${cat.title} example illustration`} />
              </div>
              <div className="project-card-copy">
                <h3>{cat.title}</h3>
                <span className="project-card-link">Ask about this project type →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
