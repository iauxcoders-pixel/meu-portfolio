export const metadata = {
  title: "Termos e Condições — UX Coders Tecnologia",
  description: "Leia os termos e condições de uso dos nossos serviços e website.",
};

export default function TermosECondicoes() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto pt-[120px]">
        {/* Título principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Termos e Condições de Uso</h1>

        {/* Conteúdo estruturado oficial */}
        <div className="space-y-8 text-white/80">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Termos</h2>
            <p>
              Ao acessar ao site UX CODERS TECNOLOGIA E DESIGN LTDA, concorda em cumprir estes termos de serviço,
              todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis
              locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este
              site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais
              aplicáveis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">2. Uso de Licença</h2>
            <p>
              É concedida permissão para a visualização dos materiais (informações, software, e principalmente os
              trabalhos de design exibidos no portfólio) no site UX CODERS TECNOLOGIA E DESIGN LTDA, apenas para fins
              de inspiração e avaliação pessoal e não comercial. Esta é a concessão de uma licença de visualização, não
              uma transferência de título.
            </p>
            <p>Sob esta licença, você está estritamente proibido de:</p>
            <p>1. modificar ou copiar os materiais;</p>
            <p>2. usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial) sem a nossa autorização prévia e por escrito;</p>
            <p>3. tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</p>
            <p>4. remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</p>
            <p>5. transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</p>
            <p>
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
              rescindida por UX CODERS TECNOLOGIA E DESIGN LTDA a qualquer momento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">3. Isenção de Responsabilidade</h2>
            <p>
              Os materiais no site da UX CODERS TECNOLOGIA E DESIGN LTDA são fornecidos 'como estão'. UX CODERS
              TECNOLOGIA E DESIGN LTDA não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega
              todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização,
              adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Limitações</h2>
            <p>
              Em nenhum caso o UX CODERS TECNOLOGIA E DESIGN LTDA ou seus fornecedores serão responsáveis por quaisquer
              danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios)
              decorrentes do uso ou da incapacidade de usar os materiais em UX CODERS TECNOLOGIA E DESIGN LTDA, mesmo
              que um representante autorizado tenha sido notificado da possibilidade de tais danos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">5. Precisão dos Materiais</h2>
            <p>
              Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. UX CODERS
              TECNOLOGIA E DESIGN LTDA não se compromete a atualizar os materiais e não garante que qualquer material
              em seu site seja preciso, completo ou atual.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">6. Links</h2>
            <p>
              O UX CODERS TECNOLOGIA E DESIGN LTDA não analisou todos os sites vinculados ao seu site e não é
              responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por
              parte da UX CODERS TECNOLOGIA E DESIGN LTDA. O uso de qualquer site vinculado é por conta e risco do
              usuário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">7. Modificações</h2>
            <p>
              O UX CODERS TECNOLOGIA E DESIGN LTDA pode revisar estes termos de serviço do site a qualquer momento, sem
              aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de
              serviço.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">8. Lei Aplicável</h2>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis da República Federativa do
              Brasil e fica eleito o foro da comarca de Cascavel, Estado do Paraná, para dirimir quaisquer
              controvérsias oriundas do presente instrumento.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}