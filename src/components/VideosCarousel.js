"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import VideoCard from "@/components/VideoCard";

export default function VideosCarousel({ items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  const doubled = useMemo(() => [...items, ...items], [items]);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const firstItemRef = useRef(null);

  const [step, setStep] = useState(0);
  const [offset, setOffset] = useState(0);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    function measure() {
      const itemEl = firstItemRef.current;
      const trackEl = trackRef.current;
      if (!itemEl || !trackEl) return;
      const itemWidth = itemEl.offsetWidth;
      const styles = window.getComputedStyle(trackEl);
      const gapPx = parseFloat(styles.gap || "0");
      setStep(itemWidth + (isNaN(gapPx) ? 0 : gapPx));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const normalizeOffset = (value) => {
    const max = step * items.length;
    if (max <= 0) return 0;
    let v = value % max;
    if (v < 0) v += max;
    return v;
  };

  const handlePrev = () => {
    setInteracting(true);
    setOffset((prev) => normalizeOffset(prev - step));
  };

  const handleNext = () => {
    setInteracting(true);
    setOffset((prev) => normalizeOffset(prev + step));
  };

  return (
    <div className="relative">
      <div ref={containerRef} className="carousel-container">
        <div
          ref={trackRef}
          className="carousel-track"
          style={interacting ? { transform: `translateX(-${offset}px)`, animation: "none" } : undefined}
        >
          {doubled.map((v, i) => (
            <div
              key={`${v.id ?? i}-${i < items.length ? "a" : "b"}`}
              className="carousel-item"
              ref={i === 0 ? firstItemRef : undefined}
            >
              <VideoCard
                video={{ ...v, thumbnail_url: v?.thumbnail_url || v?.imagem_url }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botões fora do container mascarado para evitar desfoque/mascara nas bordas */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Ver anterior"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 bg-white text-black shadow-lg border border-gray-300 rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FiChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Ver próximo"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 bg-white text-black shadow-lg border border-gray-300 rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FiChevronRight size={22} />
      </button>
    </div>
  );
}