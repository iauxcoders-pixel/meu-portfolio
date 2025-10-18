"use client";
import Image from "next/image";

export default function ProjectsCarousel({ items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  // Duplicamos os itens para permitir loop contínuo (animação suave)
  const doubled = [...items, ...items];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {doubled.map((p, i) => (
          <div
            key={`${p.id ?? i}-${i < items.length ? "a" : "b"}`}
            className="carousel-item"
          >
            <div className="project-card">
              {p.imagem_url ? (
                <Image
                  src={p.imagem_url}
                  alt={p.alt_text_imagem || p.titulo || "Projeto"}
                  width={500}
                  height={300}
                  className="object-contain w-full h-auto block"
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                />
              ) : (
                <div className="bg-gray-200 w-full h-[300px]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}