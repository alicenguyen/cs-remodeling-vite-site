import kitchenBath from "../assets/illustrations/services/kitchen-bath-blueprint.png";
import decksBalconies from "../assets/illustrations/services/decks-balconies-blueprint.png";
import interiorRemodeling from "../assets/illustrations/services/interior-remodeling-blueprint.png";
import repairsImprovements from "../assets/illustrations/services/repairs-improvements-blueprint.png";
import "./ServicesDetail.css";

const SERVICES = [
  {
    image: kitchenBath,
    title: "Kitchen & Bath",
    copy:
      "Full kitchen and bathroom remodels, from layout changes and cabinetry to countertops, tile, and fixtures.",
  },
  {
    image: decksBalconies,
    title: "Decks & Balconies",
    copy:
      "New decks, balcony rebuilds, and repairs built to hold up against San Diego's coastal and inland climate.",
  },
  {
    image: interiorRemodeling,
    title: "Interior Remodeling",
    copy:
      "Flooring, drywall, trim, paint, and full room reconfigurations that update how your home lives and feels.",
  },
  {
    image: repairsImprovements,
    title: "Repairs & Improvements",
    copy:
      "Punch-list repairs and smaller home improvement projects handled with the same care as a full remodel.",
  },
];

export default function ServicesDetail() {
  return (
    <section id="services" className="services-detail">
      <div className="container">
        <span className="section-eyebrow">What We Do</span>
        <h2>Services</h2>
        <hr className="rule" />
        <p className="services-detail-intro">
          Every project starts with a clear scope and a straight answer about cost and timeline —
          then we get to work.
        </p>

        <div className="services-detail-grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt={`${service.title} illustration`} />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
