import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";

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
      <div className="full-site-width">
        <ProjectsCarousel items={data || []} />
      </div>
    </main>
  );
}
