"use client";
import VideoCard from "@/components/VideoCard";

export default function VideosCarousel({ items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  const doubled = [...items, ...items];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {doubled.map((v, i) => (
          <div
            key={`${v.id ?? i}-${i < items.length ? "a" : "b"}`}
            className="carousel-item"
          >
            <VideoCard
              video={{ ...v, thumbnail_url: v?.thumbnail_url || v?.imagem_url }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}