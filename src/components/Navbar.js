"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg p-2 z-50">
        <div className="flex items-center justify-center">
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center justify-center gap-x-[0.6rem]">
            <Link href="/design" className="px-8 py-2 md:-mr-[0.6rem]">
              Design
            </Link>
            {/* Mantém a ordem, com Design antes de Sobre */}
            <Link href="/sobre" className="px-8 py-2">
              Sobre
            </Link>
            <Link href="/" className="bg-[#152020] text-white rounded-full px-8 py-2">
              <TypeAnimation
                sequence={[
                  "O Designer João", 2000,
                  "Criatividade", 2000,
                  "UX Coders", 2000,
                  "Negócios & Futuro", 2000,
                  "Estúdio Usteck", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Link>
            <Link href="/blog" className="px-8 py-2 md:-mr-[0.6rem]">
              Blog
            </Link>
            <Link href="/contato" className="px-8 py-2">
              Contato
            </Link>
          </div>

          {/* Botão Hambúrguer - visível apenas em telas pequenas */}
          <button
            type="button"
            className="md:hidden p-2 rounded-full hover:bg-white/60"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-panel"
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Painel do Menu Móvel */}
      {isMenuOpen && (
        <div id="mobile-menu-panel" className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 z-40">
          <Link href="/design" className="text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            Design
          </Link>
          <Link href="/sobre" className="text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </Link>
          <Link href="/" className="text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            O Designer João
          </Link>
          <Link href="/blog" className="text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contato" className="text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            Contato
          </Link>
        </div>
      )}
    </>
  );
}