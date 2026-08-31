import "./StarRating.css";

function Star({ size }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.7 5.9 21l1.5-6.8-5.2-4.7 6.9-.7L12 2.5z" />
    </svg>
  );
}

export default function StarRating({ rating, max = 5, size = 18 }) {
  const pct = Math.max(0, Math.min(100, (rating / max) * 100));
  const stars = Array.from({ length: max });

  return (
    <span
      className="star-rating"
      style={{ "--fill": `${pct}%` }}
      role="img"
      aria-label={`${rating} out of ${max} stars`}
    >
      <span className="star-row star-row-bg">
        {stars.map((_, i) => (
          <Star key={i} size={size} />
        ))}
      </span>
      <span className="star-row star-row-fg">
        {stars.map((_, i) => (
          <Star key={i} size={size} />
        ))}
      </span>
    </span>
  );
}
