import { StarIcon, HeartIcon, VeteranIcon } from "./icons";
import YelpReviewEmbed from "./YelpReviewEmbed";
import "./Reviews.css";

const FEATURED_REVIEWS = [
  {
    reviewId: "o1SwJwZKOwi6CQhdy6jwaQ",
    reviewerName: "Long N.",
    reviewerUrl: "https://www.yelp.com/user_details?userid=Wg3seyxdOMRvttgTIlCZNw",
    bizName: "C&S Remodeling",
    bizUrl: "https://www.yelp.com/biz/USxvR4SCi_4AjDIUYtQ0Rw",
    bizReviewUrl: "https://www.yelp.com/biz/c-and-s-remodeling-poway-2?hrid=o1SwJwZKOwi6CQhdy6jwaQ",
  },
  {
    reviewId: "97xJEdGiRlBjtZ7K9k_Y0g",
    reviewerName: "V K.",
    reviewerUrl: "https://www.yelp.com/user_details?userid=gWmcnc_mJI7tdtu-pTZd3A",
    bizName: "C&S Remodeling",
    bizUrl: "https://www.yelp.com/biz/USxvR4SCi_4AjDIUYtQ0Rw",
    bizReviewUrl: "https://www.yelp.com/biz/c-and-s-remodeling-poway-2?hrid=97xJEdGiRlBjtZ7K9k_Y0g",
  },
];

const HIGHLIGHTS = [
  {
    icon: <HeartIcon />,
    title: "25+ Nextdoor Faves",
    copy: "Recommended repeatedly by homeowners in our own Poway neighborhood.",
    link: "https://nextdoor.com/pages/cs-handyman-services-poway-ca/",
  },
  {
    icon: <StarIcon />,
    title: "Licensed & Insured",
    copy: "California Contractor License #1058143.",
    link: null,
  },
  {
    icon: <VeteranIcon />,
    title: "Veteran Owned",
    copy: "The same discipline and reliability we brought to our service, on every job.",
    link: null,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <span className="section-eyebrow">What Homeowners Say</span>
        <h2>Reviews</h2>
        <hr className="rule" />
        <p className="reviews-intro">
          Word of mouth is how most of our clients find us. Here's what that reputation is built
          on.
        </p>

        <div className="yelp-embeds">
          {FEATURED_REVIEWS.map((review) => (
            <div className="yelp-embed-card" key={review.reviewId}>
              <YelpReviewEmbed {...review} />
            </div>
          ))}
        </div>

        <div className="reviews-grid">
          {HIGHLIGHTS.map((item) => {
            const content = (
              <>
                <span className="review-highlight-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </>
            );

            return item.link ? (
              <a
                className="review-highlight review-highlight-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.title}
              >
                {content}
              </a>
            ) : (
              <div className="review-highlight" key={item.title}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="reviews-cta">
          <p>Worked with us recently? We'd love to hear about it — find us on Yelp or Nextdoor, or send us a note.</p>
          <a className="btn btn-outline" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
