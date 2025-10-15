"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

// Converte URLs comuns (YouTube/Vimeo) para formato de embed
function toEmbedUrl(raw) {
  if (!raw || typeof raw !== "string") return "";
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./, "").toLowerCase();

    // YouTube
    if (host.includes("youtube.com") || host.includes("youtube-nocookie.com")) {
      const v = u.searchParams.get("v");
      if (v) {
        const base = host.includes("nocookie")
          ? "https://www.youtube-nocookie.com/embed/"
          : "https://www.youtube.com/embed/";
        return `${base}${v}?autoplay=1&rel=0&playsinline=1`;
      }
      if (u.pathname.startsWith("/embed/")) {
        const base = host.includes("nocookie")
          ? "https://www.youtube-nocookie.com"
          : "https://www.youtube.com";
        const src = `${base}${u.pathname}`;
        const sep = src.includes("?") ? "&" : "?";
        return `${src}${sep}autoplay=1&rel=0&playsinline=1`;
      }
    }
    if (host === "youtu.be") {
      const id = u.pathname.replace(/^\/+/, "");
      if (id) {
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
      }
    }

    // Vimeo
    if (host.includes("vimeo.com")) {
      if (host.includes("player.vimeo.com")) {
        const base = `${u.origin}${u.pathname}`;
        const sep = base.includes("?") ? "&" : "?";
        return `${base}${sep}autoplay=1`;
      }
      const parts = u.pathname.split("/").filter(Boolean);
      const id = [...parts].reverse().find((p) => /^\d+$/.test(p)) || parts[0];
      if (id) {
        return `https://player.vimeo.com/video/${id}?autoplay=1`;
      }
    }

    const base = `${u.origin}${u.pathname}`;
    const sep = base.includes("?") ? "&" : "?";
    return `${base}${sep}autoplay=1`;
  } catch {
    const hasQuery = raw.includes("?");
    const sep = hasQuery ? "&" : "?";
    return `${raw}${sep}autoplay=1`;
  }
}

export default function ProjectCard({ projeto = {} }) {
  const { tipo, imagem_url, video_url, titulo } = projeto || {};
  const [isPlaying, setIsPlaying] = useState(false);

  // Calcular src do iframe de forma estável
  const iframeSrc = useMemo(() => toEmbedUrl(video_url), [video_url]);

  if (tipo === "video") {
    if (isPlaying && iframeSrc) {
      return (
        <div className="project-card">
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <iframe
              src={iframeSrc}
              title={titulo || "Vídeo do projeto"}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              className="w-full h-full block"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="project-card">
        {imagem_url ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Reproduzir vídeo"
            className="relative w-full group"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={imagem_url}
              alt={titulo || "Thumbnail do vídeo"}
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full block"
              sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            />
            <span className="absolute inset-0 grid place-items-center" aria-hidden="true">
              <span className="bg-black/40 group-hover:bg-black/50 transition-colors rounded-full p-4">
                <FaPlay className="text-white text-xl" />
              </span>
            </span>
          </button>
        ) : (
          <div className="bg-gray-200 w-full" style={{ aspectRatio: "16/9" }} />
        )}
      </div>
    );
  }

  return (
    <div className="project-card">
      {imagem_url ? (
        <Image
          src={imagem_url}
          alt={titulo || "Projeto"}
          width={500}
          height={300}
          className="object-contain w-full h-auto block"
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
        />
      ) : (
        <div className="bg-gray-200 w-full h-[300px]" />
      )}
    </div>
  );
}