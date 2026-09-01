import Carousel from "./Carousel";
import bathroom1 from "../assets/projects/bathroom1.jpg";
import bathroom2 from "../assets/projects/bathroom2.jpg";
import decks1 from "../assets/projects/decks1.jpg";
import decks2 from "../assets/projects/decks2.jpg";
import decks3 from "../assets/projects/decks3.jpg";
import decks4 from "../assets/projects/decks4.jpg";
import decks5 from "../assets/projects/decks5.jpg";
import decks6 from "../assets/projects/decks6.jpg";
import fencing1 from "../assets/projects/fencing1.jpg";
import kitchen1 from "../assets/projects/kitchen1.jpg";
import kitchen2 from "../assets/projects/kitchen2.jpg";
import kitchen3 from "../assets/projects/kitchen3.jpg";
import kitchen4 from "../assets/projects/kitchen4.jpg";
import laundryroom1 from "../assets/projects/laundryroom1.jpg";
import powderroom1 from "../assets/projects/powderroom1.jpg";
import "./Projects.css";

const SLIDES = [
  { src: kitchen2, category: "Kitchen & Bath", caption: "Finished kitchen remodel with quartz counters" },
  { src: bathroom1, category: "Kitchen & Bath", caption: "Frameless glass shower with mosaic marble tile" },
  { src: bathroom2, category: "Kitchen & Bath", caption: "Freestanding soaking tub with a garden view" },
  { src: powderroom1, category: "Kitchen & Bath", caption: "Powder room remodel" },
  { src: kitchen1, category: "Kitchen & Bath", caption: "Kitchen remodel in progress" },
  { src: kitchen3, category: "Kitchen & Bath", caption: "Finished kitchen with waterfall island opening to the great room" },
  { src: kitchen4, category: "Kitchen & Bath", caption: "Finished kitchen with stacked wall ovens and subway tile backsplash" },
  { src: decks1, category: "Decks & Balconies", caption: "Elevated deck rebuild — before & after" },
  { src: decks2, category: "Decks & Balconies", caption: "Elevated deck rebuild, structural detail" },
  { src: decks3, category: "Decks & Balconies", caption: "New elevated deck and stair rebuild" },
  { src: decks4, category: "Decks & Balconies", caption: "New elevated deck with lattice skirting" },
  { src: decks5, category: "Decks & Balconies", caption: "Composite balcony deck with metal railing" },
  { src: decks6, category: "Decks & Balconies", caption: "Redwood deck build and refinish" },
  { src: fencing1, category: "Repairs & Improvements", caption: "New cedar fence" },
  { src: laundryroom1, category: "Interior Remodeling", caption: "Laundry room refresh" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container projects-layout">
        <div className="projects-intro-col">
          <span className="section-eyebrow">Recent Work</span>
          <h2>Projects</h2>
          <hr className="rule" />
          <p className="projects-intro">
            A look at recent kitchens, baths, decks, and interior work from around Poway and San
            Diego. Reach out if you'd like references for any of these.
          </p>
        </div>

        <div className="projects-carousel-col">
          <Carousel slides={SLIDES} />
        </div>
      </div>
    </section>
  );
}
