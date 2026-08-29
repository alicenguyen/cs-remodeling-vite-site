import kitchenBath from "../assets/illustrations/services/kitchen-bath-blueprint.png";
import decksBalconies from "../assets/illustrations/services/decks-balconies-blueprint.png";
import interiorRemodeling from "../assets/illustrations/services/interior-remodeling-blueprint.png";
import repairsImprovements from "../assets/illustrations/services/repairs-improvements-blueprint.png";
import "./ServicesStrip.css";

const SERVICES = [
  {
    image: kitchenBath,
    title: ["Kitchen", "& Bath"],
    href: "#services",
  },
  {
    image: decksBalconies,
    title: ["Decks &", "Balconies"],
    href: "#services",
  },
  {
    image: interiorRemodeling,
    title: ["Interior", "Remodeling"],
    href: "#services",
  },
  {
    image: repairsImprovements,
    title: ["Repairs &", "Improvements"],
    href: "#services",
  },
];

export default function ServicesStrip() {
  return (
    <section className="services-strip" aria-label="Our services">
      <div className="container services-strip-grid">
        {SERVICES.map((service) => (
          <a className="service-item" href={service.href} key={service.title.join(" ")}>
            <img src={service.image} alt={`${service.title.join(" ")} illustration`} />
            <div className="service-item-copy">
              <h3>
                {service.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              <hr className="rule" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
