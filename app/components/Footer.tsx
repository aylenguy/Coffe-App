import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#5a3a25] text-[#f6f1ea]">
      {" "}
      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* GRID */}
        <div className="grid gap-12 text-center md:grid-cols-3 md:gap-10">
          {/* Marca */}
          <div className="flex flex-col items-center">
            <h3 className="mb-4 font-[Bryndan,serif] text-3xl tracking-[0.08em]">
              Lume 
            </h3>

            <p className="max-w-xs text-sm leading-7 text-[#d8cfc7]">
              Café de especialidad y pastelería en Rosario. Un espacio pensado
              para disfrutar sin apuro.
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#a78f7a]">
              Información
            </p>

            <ul className="space-y-2 text-sm text-[#e7ddd5]">
              <li>Alsina 1345, Rosario</li>
              <li>Lunes a sábado · 8 a 20 hs</li>
            </ul>
          </div>

          {/* Navegación */}
          <div className="flex flex-col items-center">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#a78f7a]">
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
                  href="https://www.instagram.com/ramoncafe____/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#f6f1ea] transition hover:opacity-70"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* LINEA FINAL */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-[#a78f7a]">
          © {new Date().getFullYear()} Lume Café
        </div>
      </div>
    </footer>
  );
}
