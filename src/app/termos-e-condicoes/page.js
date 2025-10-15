export const metadata = {
  title: "Termos e Condições — UX Coders Tecnologia",
  description: "Leia os termos e condições de uso dos nossos serviços e website.",
};

export default function TermosECondicoes() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto pt-[120px]">
        {/* Título principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Termos e Condições</h1>

        {/* Conteúdo estruturado (placeholder até receber o texto oficial) */}
        <div className="space-y-8 text-white/80">
          <section className="space-y-3">
            <p>
              Esta página contém os Termos e Condições de uso do nosso website e serviços. Assim que o texto oficial
              for fornecido, será inserido e estruturado com títulos em <strong>h2</strong> e parágrafos <strong>p</strong> para
              facilitar a leitura, mantendo a consistência visual com as demais páginas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Introdução</h2>
            <p>Conteúdo dos termos introdutórios (a ser substituído pelo texto oficial).</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Aceitação dos Termos</h2>
            <p>Conteúdo sobre aceitação e concordância (a ser substituído pelo texto oficial).</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Uso do Serviço</h2>
            <p>Diretrizes de uso do site/serviço (a ser substituído pelo texto oficial).</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Limitações e Responsabilidades</h2>
            <p>Limitações de responsabilidade e garantias (a ser substituído pelo texto oficial).</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Contato</h2>
            <p>Canal para dúvidas sobre estes termos (a ser substituído pelo texto oficial).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}