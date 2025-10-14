import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 m-0 w-full">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* Ícones sociais */}
        <div className="flex items-center space-x-6">
          <a
            href="https://instagram.com/odesignerjoao.ia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-paulo-ceo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://wa.me/5545999839859"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>

        {/* Tagline */}
        <p className="font-light">Do PR para o mundo • Criatividade, Negócios & Futuro</p>

        {/* Informações legais */}
        <p className="text-sm text-gray-500">
          UX CODERS TECNOLOGIA E DESIGN LTDA . © 2025 . CNPJ 62.832.636/0001-57
        </p>
      </div>
    </footer>
  );
}