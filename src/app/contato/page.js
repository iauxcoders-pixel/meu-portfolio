"use client";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function PaginaContacto() {
  const [consent, setConsent] = useState(false);
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto pt-[120px]">
        {/* Título central único com quebras de linha */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Vamos conversar?
          <br />
          ou preencha o nosso formulário
          <br />
          para receber o nosso contato.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Coluna Esquerda: Informações */}
          <div>
            <div className="space-y-4">
              {/* Nome */}
              <div className="flex items-start">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">Nome</p>
                  <p className="text-lg text-white">João Paulo Schausteck</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">WhatsApp</p>
                  <a
                    href="https://wa.me/5545999839859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white hover:underline"
                  >
                    55 (45) 99983-9859
                  </a>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">E-mail</p>
                  <a
                    href="mailto:jo%C3%A3o@uxcoders.com.br"
                    className="text-lg text-white hover:underline"
                  >
                    João@uxcoders.com.br
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">Instagram</p>
                  <a
                    href="https://instagram.com/odesignerjoao.ia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white hover:underline"
                  >
                    @odesignerjoao.ia
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/70">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/jo%C3%A3o-paulo-ceo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white hover:underline"
                  >
                    /in/joao-paulo-ceo
                  </a>
                </div>
              </div>
            </div>

            {/* Botão WhatsApp (CTA estilo pastilha) */}
            <a
              href="https://wa.me/5545999839859"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button mt-8"
            >
              <span className="cta-label">Chamar no WhatsApp</span>
              <span className="cta-icon" aria-hidden="true">
                <FiArrowRight size={18} />
              </span>
            </a>
          </div>

          {/* Coluna Direita: Formulário */}
          <div>
            <form className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block mb-2 text-sm font-medium">Nome</label>
                <input id="nome" name="nome" type="text" className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium">WhatsApp</label>
                <input id="whatsapp" name="whatsapp" type="text" className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              {/* Serviço */}
              <div>
                <label htmlFor="servico" className="block mb-2 text-sm font-medium">Serviço</label>
              <select id="servico" name="servico" className="w-full rounded-md border border-white/10 bg-transparent text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Design" style={{ backgroundColor: "#ffffff", color: "#152020" }}>Design</option>
                <option value="Social Media" style={{ backgroundColor: "#ffffff", color: "#152020" }}>Social Media</option>
                <option value="Vídeo Animado" style={{ backgroundColor: "#ffffff", color: "#152020" }}>Vídeo Animado</option>
                <option value="Site" style={{ backgroundColor: "#ffffff", color: "#152020" }}>Site</option>
                <option value="Aplicativo" style={{ backgroundColor: "#ffffff", color: "#152020" }}>Aplicativo</option>
                <option value="Sistema" style={{ backgroundColor: "#ffffff", color: "#152020" }}>Sistema</option>
              </select>
              </div>

              {/* Descrição do Projeto */}
              <div>
                <label htmlFor="descricao" className="block mb-2 text-sm font-medium">Descrição do Projeto</label>
                <textarea id="descricao" name="descricao" rows={6} className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              {/* Consentimento */}
              <div className="flex items-start gap-3">
                <input
                  id="consentimento"
                  name="consentimento"
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <label htmlFor="consentimento" className="text-sm">
                  Concordo com a política de privacidade e a lei de proteção de dados (LGPD)
                </label>
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                disabled={!consent}
                className={`cta-button ${!consent ? "is-disabled" : ""}`}
              >
                <span className="cta-label">Enviar Mensagem</span>
                <span className="cta-icon" aria-hidden="true">
                  <FiArrowRight size={18} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}