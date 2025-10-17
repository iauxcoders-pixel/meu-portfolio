import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import VideoCard from "@/components/VideoCard";
import { FiArrowRight } from "react-icons/fi";
import VideosCarousel from "@/components/VideosCarousel";

export const metadata = {
  title: "Design",
  verification: {
    google: "3ZGzAg49XVcR3_F9DqeIaYnj9eIZ42AhrysmxCQnMBQ",
  },
};

export default async function Design() {
  const { data, error } = await supabase.from("projetos").select("*");
  const { data: videos, error: videosError } = await supabase.from("projeto videos").select("*");

  const normalizeUrl = (u) => {
    if (!u || typeof u !== "string") return "";
    try {
      const trimmed = u.trim();
      const withoutQuery = trimmed.split("?")[0];
      return withoutQuery.replace(/\/$/, "").toLowerCase();
    } catch {
      return u;
    }
  };

  const thumbsFromTable = (videos || [])
    .map((v) => v?.thumbnail_url || v?.imagem_url)
    .filter(Boolean);

  const getVideoKey = (v) => {
    const byVideo = normalizeUrl(v?.video_url);
    const byThumb = normalizeUrl(v?.thumbnail_url);
    const byImage = normalizeUrl(v?.imagem_url);
    const byTitle = typeof v?.titulo === "string" ? v.titulo.trim().toLowerCase() : "";
    const byId = v?.id != null ? String(v.id) : "";
    return byVideo || byThumb || byImage || byTitle || byId;
  };

  const uniqueVideos = (() => {
    const map = new Map();
    (videos || []).forEach((v) => {
      const thumbKey = normalizeUrl(v?.thumbnail_url || v?.imagem_url);
      const fallbackKey = thumbKey || normalizeUrl(v?.video_url) || (v?.id != null ? String(v.id) : "");
      if (fallbackKey && !map.has(fallbackKey)) map.set(fallbackKey, v);
    });
    return Array.from(map.values());
  })();

  const videoThumbSet = new Set(
    uniqueVideos
      .map((v) => normalizeUrl(v?.thumbnail_url || v?.imagem_url))
      .filter(Boolean)
  );

  const projectsForCarousel = (data || []).filter((p) => !videoThumbSet.has(normalizeUrl(p?.imagem_url)));

  if (error) {
    return (
      <main className="min-h-screen p-8">
        <h1 className="text-2xl font-bold mb-4">Erro ao carregar projetos</h1>
        <p className="text-red-600">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      {/* Hero removido nesta página para evitar espaço vazio */}
      <h2 className="section-title">Design de Alto Padrão</h2>
      <div className="full-site-width">
        {(() => {
          const items = projectsForCarousel || [];
          return (
            <div className="carousel-container">
              <div className="carousel-track">
                {items.map((p, i) => (
                  <div key={p.id ?? i} className="carousel-item">
                    <ProjectCard projeto={p} />
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      <h2 className="section-title">Animações de Alto Impacto</h2>

      <div className="full-site-width">
        <VideosCarousel
          items={(uniqueVideos || []).map((video) => ({
            ...video,
            thumbnail_url: video?.thumbnail_url || video?.imagem_url,
          }))}
        />
      </div>

      <div className="py-[60px] text-center">
        <a
          href="https://wa.me/5545999839859"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          aria-label="Chamar no WhatsApp"
        >
          <span className="cta-label">Chamar no WhatsApp</span>
          <span className="cta-icon" aria-hidden="true">
            <FiArrowRight size={18} />
          </span>
        </a>
      </div>
    </main>
  );
}