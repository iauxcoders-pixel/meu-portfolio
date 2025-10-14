import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export const metadata = {
  verification: {
    google: "3ZGzAg49XVcR3_F9DqeIaYnj9eIZ42AhrysmxCQnMBQ",
  },
};

export default async function Home() {
  const { data, error } = await supabase.from("projetos").select("*");

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
      <HeroSection />
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(data || []).map((p) => (
            <div
              key={p.id}
              className="rounded-lg shadow-sm bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-4"
            >
              {p.imagem_url ? (
                <Image
                  src={p.imagem_url}
                  alt={p.titulo || "Projeto"}
                  width={500}
                  height={300}
                  className="object-cover rounded mb-3 w-full"
                />
              ) : (
                <div className="bg-gray-200 rounded mb-3 w-full h-[300px]" />
              )}
              <h2 className="text-lg font-semibold text-[#152020]">{p.titulo || "Sem título"}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
