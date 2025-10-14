import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg p-2 z-50">
      <div className="flex items-center justify-center">
        <Link href="/sobre" className="px-8 py-2">
          Sobre
        </Link>
        <Link href="/" className="bg-[#152020] text-white rounded-full px-6 py-2 mx-16">
          O Designer João
        </Link>
        <Link href="/contacto" className="px-8 py-2">
          Contato
        </Link>
      </div>
    </nav>
  );
}