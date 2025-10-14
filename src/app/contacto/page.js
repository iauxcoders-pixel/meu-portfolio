export default function PaginaContacto() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-bold">Entre em Contacto</h1>
        <p className="text-gray-700">
          Fico feliz em ouvir de você! Para dúvidas, propostas ou parcerias, entre em contacto pelo e-mail abaixo.
        </p>
        <p className="text-gray-700">
          <a href="mailto:joao@email.com" className="text-blue-600 hover:underline">
            joao@email.com
          </a>
        </p>
      </div>
    </main>
  );
}