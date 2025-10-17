import { supabase } from "@/lib/supabaseClient";
import PostCard from "@/components/PostCard";

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*, autores(nome), categorias(nome)")
    .eq("status", "publicado")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar posts:", error.message);
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto pt-[120px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Blog</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}