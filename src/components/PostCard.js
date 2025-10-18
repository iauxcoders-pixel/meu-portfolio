import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  if (!post) return null;

  const href = `/blog/${post.slug}`;
  const coverUrl = post.imagem_capa_url;
  const hasCover = coverUrl !== null && coverUrl !== undefined && String(coverUrl).trim() !== "";
  const categoryName = post?.categorias?.nome;
  const title = post?.titulo || "Sem título";
  const summary = post?.resumo || "";

  return (
    <Link
      href={href}
      aria-label={`Ler post: ${post.titulo}`}
      className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-white/10 bg-white/5"
    >
      {hasCover && (
        <Image
          src={coverUrl}
          alt={post.alt_text_capa || post.titulo}
          width={1200}
          height={675}
          className="w-full h-56 sm:h-64 object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}

      <div className="p-4">
        {categoryName && (
          <span className="text-xs uppercase tracking-wide text-gray-400">
            {categoryName}
          </span>
        )}
        <h2 className="mt-1 text-lg font-semibold text-white">{title}</h2>
        {summary && (
          <p className="mt-2 text-sm text-gray-300">{summary}</p>
        )}
      </div>
    </Link>
  );
}