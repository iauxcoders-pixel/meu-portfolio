"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FiArrowRight } from "react-icons/fi";

export default function PaginaContacto() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [servico, setServico] = useState("Design");
  const [descricao, setDescricao] = useState("");
  const [consentimento, setConsentimento] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const { error } = await supabase
      .from("contatos")
      .insert([
        {
          nome,
          whatsapp,
          email,
          servico,
          descricao,
          consentimento,
        },
      ]);

    if (error) {
      setErrorMessage("Não foi possível enviar. Tente novamente.");
      setLoading(false);
      return;
    }

    setSuccessMessage("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    setNome("");
    setWhatsapp("");
    setEmail("");
    setServico("Design");
    setDescricao("");
    setConsentimento(false);
    setLoading(false);
  }
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
              className="mt-8 inline-flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Chamar no WhatsApp"
            >
              <span className="cta-label">Chamar no WhatsApp</span>
              <span className="cta-icon" aria-hidden="true">
                <FiArrowRight size={18} />
              </span>
            </a>
          </div>

          {/* Coluna Direita: Formulário */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Nome */}
              <div>
                <label htmlFor="nome" className="block mb-2 text-sm font-medium">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-md border border-gray-400 bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium">WhatsApp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full rounded-md border border-gray-400 bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-400 bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Serviço */}
              <div>
                <label htmlFor="servico" className="block mb-2 text-sm font-medium">Serviço</label>
              <select
                id="servico"
                name="servico"
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                className="w-full rounded-md border border-gray-400 bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
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
                <textarea
                  id="descricao"
                  name="descricao"
                  rows={6}
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  className="w-full rounded-md border border-gray-400 bg-white text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Consentimento */}
              <div className="flex items-start gap-3">
                <input
                  id="consentimento"
                  name="consentimento"
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  checked={consentimento}
                  onChange={(e) => setConsentimento(e.target.checked)}
                  required
                />
                <label htmlFor="consentimento" className="text-sm">
                  Concordo com a política de privacidade e a lei de proteção de dados (LGPD)
                </label>
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                disabled={!consentimento || loading}
                className={`inline-flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!consentimento || loading ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                <span className="cta-label">{loading ? "Enviando..." : "Enviar Mensagem"}</span>
                <span className="cta-icon" aria-hidden="true">
                  <FiArrowRight size={18} />
                </span>
              </button>

              {/* Feedback Visual */}
              <div className="min-h-[28px]">
                {successMessage && (
                  <p className="mt-2 text-sm text-green-500">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}