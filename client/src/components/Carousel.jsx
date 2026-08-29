import { useCallback, useEffect, useRef, useState } from "react";
import "./Carousel.css";

const AUTOPLAY_MS = 5000;

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (i) => {
      setIndex(((i % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || slides.length <= 1) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, slides.length]);

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  }

  const slide = slides[index];

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project photos"
      tabIndex={0}
    >
      <div className="carousel-viewport">
        <img key={slide.src} src={slide.src} alt={slide.alt} className="carousel-image" />

        <button
          type="button"
          className="carousel-arrow carousel-arrow-prev"
          onClick={prev}
          aria-label="Previous photo"
        >
          &#8249;
        </button>
        <button
          type="button"
          className="carousel-arrow carousel-arrow-next"
          onClick={next}
          aria-label="Next photo"
        >
          &#8250;
        </button>

        <span className="carousel-category">{slide.category}</span>
      </div>

      <div className="carousel-footer">
        <p className="carousel-caption">{slide.caption}</p>

        <div className="carousel-dots" role="tablist" aria-label="Choose photo">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show photo ${i + 1} of ${slides.length}`}
              className={`carousel-dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
