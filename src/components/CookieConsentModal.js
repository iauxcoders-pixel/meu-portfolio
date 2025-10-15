"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsentModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (consent === null) {
        setShowModal(true);
      }
    } catch (err) {
      // Em ambientes onde localStorage não está disponível, mostramos o modal por segurança.
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie_consent", "aceito");
    } catch (err) {
      // Ignora falhas ao escrever no localStorage
    }
    setShowModal(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookie_consent", "recusado");
    } catch (err) {
      // Ignora falhas ao escrever no localStorage
    }
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg p-8 shadow-2xl max-w-md mx-4 text-center">
        <h2 className="text-xl font-semibold mb-3">Cookies e Privacidade</h2>
        <p className="text-sm text-gray-700 mb-4">
          Usamos cookies para análise e marketing para melhorar sua experiência.
          Consulte nossa
          {" "}
          <Link href="/politica-de-privacidade" className="hover:underline font-medium">
            Política de Privacidade
          </Link>
          {" "}e os{ " "}
          <Link href="/termos-e-condicoes" className="hover:underline font-medium">
            Termos de Uso
          </Link>
          .
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100"
          >
            Recusar
          </button>
          <Link
            href="/politica-de-privacidade"
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100"
          >
            Personalizar
          </Link>
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-2 rounded-md bg-black text-white hover:bg-black/90 shadow-md"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}