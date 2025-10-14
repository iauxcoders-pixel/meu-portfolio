"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg p-2 z-50">
        <div className="flex items-center justify-center">
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center justify-center">
            <Link href="/sobre" className="px-8 py-2">
              Sobre
            </Link>
            <Link href="/" className="bg-[#152020] text-white rounded-full px-6 py-2 lg:mx-16 md:mx-8 mx-4">
              O Designer João
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
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Painel do Menu Móvel */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 z-40">
          <Link href="/sobre" className="text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </Link>
          <Link href="/" className="text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            O Designer João
          </Link>
          <Link href="/contato" className="text-3xl text-white" onClick={() => setIsMenuOpen(false)}>
            Contato
          </Link>
        </div>
      )}
    </>
  );
}