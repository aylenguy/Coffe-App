import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#bfa05d] text-[#f6f1ea]">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-12 text-center md:grid-cols-3 md:gap-10">
          {/* Marca */}
          <div className="flex flex-col items-center">
          <h3 className="mb-5 font-['Archivo'] text-xl md:text-2xl tracking-[0.12em] text-white">
  ORLAN CAFÉ
</h3>


            <p className="max-w-xs text-sm leading-7 text-[#fff8ef]">
              Café de especialidad y pastelería en Rosario. Un espacio pensado
              para disfrutar sin apuro.
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#f3e6cf]">
              Información
            </p>

            <ul className="space-y-2 text-sm text-[#fff8ef]">
              <li>Salta 1861, Rosario</li>
              <li>Lunes a domingo · 8 a 20 hs</li>
            </ul>
          </div>

          {/* Navegación */}
          <div className="flex flex-col items-center">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#f3e6cf]">
              Navegación
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/carta"
                className="text-sm text-[#f6f1ea] transition hover:opacity-70"
              >
                Ver carta
              </Link>

              <Link
                href="/contacto"
                className="text-sm text-[#f6f1ea] transition hover:opacity-70"
              >
                Cómo llegar
              </Link>

              <a
                href="https://www.instagram.com/cafeorlan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#f6f1ea] transition hover:opacity-70"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-[#fff3df]">
          © {new Date().getFullYear()} Café Orlan
        </div>
      </div>
    </footer>
  );
}