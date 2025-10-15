"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CookieConsentModal() {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const value = localStorage.getItem("cookie_consent");
      // Exibir modal até que seja ACEITO (não ocultar em caso de recusa)
      setShowModal(value !== "aceito");
    } catch (err) {
      // Se localStorage não estiver disponível, exibir modal para capturar decisão
      setShowModal(true);
    }
  }, []);

  // Reabrir modal ao trocar de página, se ainda não tiver sido ACEITO
  useEffect(() => {
    try {
      const value = localStorage.getItem("cookie_consent");
      setShowModal(value !== "aceito");
    } catch (err) {
      setShowModal(true);
    }
  }, [pathname]);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie_consent", "aceito");
      // Notificar outros componentes (ex.: TrackingScripts) sobre a mudança
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("cookie-consent"));
      }
    } catch (err) {
      // Ignora falhas ao escrever no localStorage
    }
    setShowModal(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("cookie_consent", "recusado");
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("cookie-consent"));
      }
    } catch (err) {
      // Ignora falhas ao escrever no localStorage
    }
    // Fechar no momento; reabrirá em navegação/refresh se não for ACEITO
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
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
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleDecline}
            className="text-gray-700 hover:underline"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-6 py-2 rounded-md bg-black text-white hover:bg-black/90 shadow-md font-semibold"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}