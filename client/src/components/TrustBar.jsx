import { VeteranIcon, StarIcon, HeartIcon, PinIcon, PhoneIcon, PeopleIcon } from "./icons";
import "./TrustBar.css";

const ITEMS = [
  { icon: <VeteranIcon />, label: "Veteran Owned" },
  { icon: <StarIcon />, label: "CA Lic. #1058143" },
  { icon: <HeartIcon />, label: "25+ Nextdoor Faves" },
  { icon: <PinIcon />, label: "Serving Poway & San Diego" },
  { icon: <PhoneIcon />, label: "619.339.5722", href: "tel:+16193395722" },
];

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Credentials">
      <div className="container trust-row">
        {ITEMS.map((item, i) => {
          const content = (
            <>
              <span className="trust-icon">{item.icon}</span>
              <span>{item.label}</span>
            </>
          );
          return (
            <div className="trust-item-wrap" key={item.label}>
              {item.href ? (
                <a className="trust-item" href={item.href}>
                  {content}
                </a>
              ) : (
                <span className="trust-item">{content}</span>
              )}
              {i < ITEMS.length - 1 && <span className="trust-divider" aria-hidden="true" />}
            </div>
          );
        })}
      </div>

      <div className="container recommended-row">
        <PeopleIcon />
        <p>
          Recommended by local homeowners for quality work, responsiveness, attention to detail,
          and a clean jobsite.
        </p>
      </div>
    </section>
  );
}
