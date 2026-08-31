import { useEffect } from "react";

const WIDGET_SRC = "https://www.yelp.com/embed/widgets.js";

// Renders Yelp's official review embed. The plain-text fallback below is
// what shows if the widget script is blocked (common with ad blockers) —
// it links straight to the real review, so it degrades gracefully.
export default function YelpReviewEmbed({
  reviewId,
  hostname = "www.yelp.com",
  reviewerName,
  reviewerUrl,
  bizName,
  bizUrl,
  bizReviewUrl,
}) {
  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <span className="yelp-review" data-review-id={reviewId} data-hostname={hostname}>
      Read{" "}
      <a href={reviewerUrl} rel="nofollow noopener">
        {reviewerName}
      </a>
      's <a href={bizReviewUrl} rel="nofollow noopener">review</a> of{" "}
      <a href={bizUrl} rel="nofollow noopener">
        {bizName}
      </a>{" "}
      on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a>
    </span>
  );
}
