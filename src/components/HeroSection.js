export default function HeroSection({ showTexts = true }) {
  return (
    <section className="relative h-screen overflow-hidden">
      {showTexts && (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center gap-[32px]">
          {/* Bloco 1: Criatividade + Inovação que gera impacto (gap 22px) */}
          <div className="flex items-center gap-[22px] hero-fade-in-up hero-stagger-1">
            <h2 className="text-white uppercase font-extrabold text-5xl sm:text-6xl md:text-7xl">
              CRIATIVIDADE
            </h2>
            <p className="text-white/90 uppercase font-bold text-xs sm:text-sm md:text-base">
              INOVAÇÃO QUE
              <br />
              GERA IMPACTO
            </p>
          </div>

          {/* Bloco 2: Conexões reais com IA + Negócios (gap 22px) */}
          <div className="flex items-center gap-[22px] hero-fade-in-up hero-stagger-2">
            <p className="text-white/90 uppercase font-bold text-xs sm:text-sm md:text-base">
              CONEXÕES REAIS COM
              <br />
              INTELIGÊNCIA ARTIFICIAL
            </p>
            <h2 className="text-white uppercase font-extrabold text-5xl sm:text-6xl md:text-7xl">
              NEGÓCIOS
            </h2>
          </div>

          {/* Bloco 3: Futuro + Experiência de design... (gap 22px) */}
          <div className="flex items-center gap-[22px] hero-fade-in-up hero-stagger-3">
            <h2 className="text-white uppercase font-extrabold text-5xl sm:text-6xl md:text-7xl">
              FUTURO
            </h2>
            <p className="text-white/90 uppercase font-bold text-xs sm:text-sm md:text-base">
              EXPERIÊNCIA DE DESIGN QUE
              <br />
              ACELERA SEU CRESCIMENTO
            </p>
          </div>
        </div>
      )}
    </section>
  );
}