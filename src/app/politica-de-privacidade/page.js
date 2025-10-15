export const metadata = {
  title: "Política de Privacidade — UX Coders Tecnologia",
  description: "Conheça nossa política de privacidade e como tratamos seus dados.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto pt-[120px]">
        {/* Título principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Política de Privacidade</h1>

        {/* Conteúdo estruturado */}
        <div className="space-y-8 text-white/80">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Introdução</h2>
            <p>
              Esta página descreve como coletamos, utilizamos e protegemos seus dados pessoais. O conteúdo completo
              será inserido conforme o texto fornecido, mantendo estrutura com títulos e parágrafos para leitura clara.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Coleta de Dados</h2>
            <p>
              Indicaremos aqui os tipos de dados coletados, as fontes e as bases legais aplicáveis. Substitua este
              parágrafo pelo texto oficial quando disponibilizado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Uso dos Dados</h2>
            <p>
              Descreveremos as finalidades do tratamento, tais como comunicação, melhoria de serviços e cumprimento
              de obrigações legais. Este conteúdo será atualizado com o texto definitivo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Compartilhamento e Terceiros</h2>
            <p>
              Caso exista compartilhamento com parceiros ou provedores, os detalhes e salvaguardas serão descritos
              nesta seção.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Seus Direitos</h2>
            <p>
              Explicaremos direitos como acesso, correção, exclusão e portabilidade dos dados, bem como contato para
              solicitações.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Contato</h2>
            <p>
              Informaremos os canais oficiais (e-mail e WhatsApp) para dúvidas ou solicitações relacionadas à
              privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Atualizações</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data de última atualização será indicada quando o
              texto oficial for inserido.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}