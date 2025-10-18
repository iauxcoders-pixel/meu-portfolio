"use client";
import { useMemo, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

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
      // Já no formato /embed/<id>
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
      // Já é player.vimeo.com
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

    // Fallback: usar URL base + autoplay
    const base = `${u.origin}${u.pathname}`;
    const sep = base.includes("?") ? "&" : "?";
    return `${base}${sep}autoplay=1`;
  } catch {
    const hasQuery = raw.includes("?");
    const sep = hasQuery ? "&" : "?";
    return `${raw}${sep}autoplay=1`;
  }
}

export default function VideoCard({ video = {} }) {
  const { video_url, thumbnail_url, titulo } = video || {};
  const thumb = thumbnail_url;
  const [isPlaying, setIsPlaying] = useState(false);

  const iframeSrc = useMemo(() => toEmbedUrl(video_url), [video_url]);

  if (!isPlaying) {
    return (
      <div className="project-card">
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Tocar vídeo: ${video.titulo}`}
          className="relative w-full cursor-pointer group"
          style={{ aspectRatio: "9/16" }}
        >
          {thumb ? (
            <Image
              src={thumb}
              alt={video.alt_text_thumbnail || video.titulo}
              fill
              className="absolute inset-0 object-cover w-full h-full"
              sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            />
          ) : (
            <div className="bg-gray-200 w-full h-full" />
          )}
          <span className="absolute inset-0 grid place-items-center" aria-hidden="true">
            <span className="bg-black/40 group-hover:bg-black/50 transition-colors rounded-full p-6">
              <FaPlay className="text-white text-3xl" aria-hidden="true" />
            </span>
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="project-card">
      <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
        <iframe
          src={iframeSrc}
          title={titulo || "Vídeo em destaque"}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}