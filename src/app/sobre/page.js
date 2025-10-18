"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PaginaSobre() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const slides = [
    {
      title: "Perfil & Objetivos",
      description: `Designer apaixonado por criar soluções visuais atrativas e focadas na experiência do usuário. Busco projetos de freelancer onde posso aplicar minhas habilidades no desenvolvimento de interfaces para sites, aplicativos e sistemas, criação de conteúdo para redes sociais e vídeos animados, sempre alinhando técnicas de UX/UI com as novas possibilidades da inteligência artificial para gerar resultados impactantes.`,
    },
    {
      title: "Projetos & Experiências de Destaque",
      description: `Com mais de 6 anos de jornada no design, tive a oportunidade de colaborar com marcas de peso como Fiat, Jeep, Mitsubishi e Ram, além de atuar em projetos inovadores para empresas de tecnologia no agronegócio, energia solar e startups.

Em todas essas experiências, meu grande diferencial foi o suporte ao design visual para projetos digitais e gráficos, garantindo sempre consistência e alta qualidade na comunicação. Essa jornada me permitiu desenvolver uma vasta gama de materiais, incluindo interfaces para sites, landing pages de eventos e produtos, vídeos e animações que capturam a atenção e geram resultados.`,
    },
    {
      title: "Formação & Estratégia",
      description: `Minha jornada acadêmica foi construída de forma estratégica, onde cada especialização alavanca o potencial da outra. A base sólida da graduação em Design Gráfico (Univel) foi aprofundada com a pós-graduação em UX/UI Design (Unopar), permitindo-me criar não apenas visuais atraentes, mas também experiências digitais intuitivas. Para conectar tudo ao resultado, a pós em Marketing Digital (Ampli) trouxe a visão de negócio, garantindo que cada projeto atinja seus objetivos de forma eficaz.`,
    },
    {
      title: "Meu Arsenal Criativo: Ferramentas e Habilidades",
      description: `Para transformar ideias em realidade, domino as principais ferramentas do mercado. Com o Figma, construo protótipos e interfaces intuitivas, enquanto o Pacote Adobe (Photoshop, Illustrator, After Effects e Premiere) me dá o poder de criar desde identidades visuais marcantes até vídeos e animações dinâmicas. Minha expertise em UX/UI Design, combinada com a habilidade de Gestão de Conteúdo e Design para Redes Sociais, garante que cada projeto não seja apenas bonito, mas também funcional e estratégico.`,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(0);
  const contentShownRef = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Inicialmente, manter o bloco dinâmico oculto para que H1 e P apareçam primeiro
      if (contentRef.current) {
        gsap.set(contentRef.current, { autoAlpha: 0, y: 24 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Garantir H1, P e imagem visíveis imediatamente e centralizados no sticky
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
      gsap.set(subtitleRef.current, { opacity: 1, y: 0 });
      gsap.set(imageRef.current, { autoAlpha: 1, y: 0 });

      // Controla troca de conteúdo conforme progresso do scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1
          const idx = Math.min(slides.length - 1, Math.floor(progress * slides.length));

          // Revela conteúdo dinâmico só após pequeno avanço do scroll
          const threshold = 0.08;
          if (progress > threshold && !contentShownRef.current) {
            contentShownRef.current = true;
            gsap.to(contentRef.current, { autoAlpha: 1, y: 0, duration: 0.5 });
          } else if (progress <= threshold && contentShownRef.current) {
            contentShownRef.current = false;
            gsap.to(contentRef.current, { autoAlpha: 0, y: 24, duration: 0.3 });
          }

          if (idx !== activeSlideRef.current) {
            activeSlideRef.current = idx;
            setActiveSlide(idx);
            if (contentShownRef.current) {
              gsap.fromTo(
                contentRef.current,
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, duration: 0.5 }
              );
            }
          }

        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [slides.length]);

  return (
    <main className="min-h-screen p-0">
      <section ref={sectionRef} aria-labelledby="sobre-titulo" aria-describedby="sobre-subtitulo">
        {/* Contentor sticky alinhado ao topo */}
        <div className="sticky top-0 h-screen flex items-start justify-center">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-[120px]">
            {/* Coluna Esquerda: cabeçalho fixo e bloco dinâmico separados */}
            <div className="text-left">
              {/* Div 1: H1 e P fixos */}
              <div className="space-y-2">
                <h1 id="sobre-titulo" ref={titleRef} className="text-4xl font-bold">João Paulo Schausteck</h1>
                <p id="sobre-subtitulo" ref={subtitleRef} className="text-white/80">CEO UX Coders | Designer Gráfico & Digital | UX/UI Designer</p>
              </div>

              {/* Div 2: Bloco dinâmico do sticky */}
              <div ref={contentRef} className="mt-[60px] space-y-2" aria-live="polite">
                <h2 className="text-2xl font-semibold">{slides[activeSlide].title}</h2>
                <p className="text-white/80 whitespace-pre-line">{slides[activeSlide].description}</p>
              </div>
            </div>

            {/* Coluna Direita: Imagem 75% com cantos arredondados */}
            <div ref={imageRef} className="justify-self-end">
              <Image
                src="https://exadjcpmzycgxlpvpvqr.supabase.co/storage/v1/object/public/Designer%20Joao/o%20joao.webp"
                alt="Designer João"
                width={600}
                height={750}
                className="w-auto h-auto rounded-2xl object-cover shadow-lg border border-white/10"
                priority
              />
            </div>
          </div>
        </div>

        {/* Painel de rolagem para criar espaço de scroll */}
        <div className="h-[300vh]" />
      </section>
    </main>
  );
}