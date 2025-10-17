import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  try {
    const { data: post, error } = await supabase
      .from("posts")
      .select("titulo, resumo")
      .eq("slug", slug)
      .single();

    if (error || !post) {
      return {};
    }

    return {
      title: `${post.titulo} | UX CODERS`,
      description: post.resumo || "",
    };
  } catch (e) {
    return {};
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params || {};

  const { data: post, error } = await supabase
    .from("posts")
    .select("*, autores(nome), categorias(nome)")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-3xl mx-auto pt-[120px]">
          <h1 className="text-2xl font-bold">Post não encontrado</h1>
          <p className="mt-2 text-white/70">Verifique o endereço ou tente novamente mais tarde.</p>
        </div>
      </main>
    );
  }

  const authorName = post?.autores?.nome;

  const formattedDate = (() => {
    try {
      const d = post?.created_at ? new Date(post.created_at) : null;
      return d && !isNaN(d) 
        ? d.toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })
        : "";
    } catch {
      return "";
    }
  })();

  const coverUrl = post?.imagem_capa_url;
  const hasCover = coverUrl !== null && coverUrl !== undefined && String(coverUrl).trim() !== "";

  return (
    <main className="min-h-screen p-8">
      <article className="max-w-3xl mx-auto pt-[120px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.titulo}</h1>
        <p className="text-sm text-white/70 mb-6">
          {authorName ? `Por ${authorName}` : ""}
          {formattedDate ? (authorName ? " • " : "") + formattedDate : ""}
        </p>

        {hasCover && (
          <Image
            src={coverUrl}
            alt={post.titulo}
            width={1600}
            height={900}
            className="w-full rounded-xl mb-8 object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            priority
          />
        )}

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post?.conteudo || ""}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}