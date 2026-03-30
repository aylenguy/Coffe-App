"use client";

import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-20 pt-24 text-[#2b211c] md:pt-28">
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8b5e3c]">
          Ramon Café
        </p>

        <h1 className="mb-5 text-4xl font-light md:text-5xl">Contacto</h1>

        <p className="mx-auto mb-12 max-w-2xl leading-8 text-[#6f5d52]">
          Encontrá nuestras sucursales, horarios y canales de contacto en un solo lugar.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#eee6df] bg-white p-8 text-left shadow-[0_12px_40px_rgba(43,33,28,0.04)]">
            <div className="mb-4 flex items-center gap-2 text-[#8b5e3c]">
              <MapPin size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">Rosario</p>
            </div>

            <p className="mb-4 text-lg font-medium">Córdoba 1894</p>

            <div className="flex items-start gap-2 text-sm text-[#6f5d52]">
              <Clock size={16} className="mt-1 shrink-0" />
              <div>
                <p>Lunes a sábado · 8 a 20 hs</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/tR7w95HqbmofCn989"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-[#8b5e3c] hover:underline"
            >
              Ver en mapa
            </a>
          </div>

          <div className="rounded-[28px] border border-[#eee6df] bg-white p-8 text-left shadow-[0_12px_40px_rgba(43,33,28,0.04)]">
            <div className="mb-4 flex items-center gap-2 text-[#8b5e3c]">
              <MapPin size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">Funes</p>
            </div>

            <p className="mb-4 text-lg font-medium">
              RN 9 Esq. Galindo — Local 5
            </p>

            <div className="flex items-start gap-2 text-sm text-[#6f5d52]">
              <Clock size={16} className="mt-1 shrink-0" />
              <div>
                <p>Lunes a sábado · 8 a 20 hs</p>
                <p>Domingo · 08:30 a 13:30 hs</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/nqVgZhgY879CQTxcA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-[#8b5e3c] hover:underline"
            >
              Ver en mapa
            </a>
          </div>
        </div>

        <div className="mt-14 rounded-[28px] border border-[#eee6df] bg-[#fcfaf8] p-8 shadow-[0_12px_40px_rgba(43,33,28,0.04)]">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8b5e3c]">
            Instagram
          </p>

          <p className="mx-auto mb-6 max-w-xl leading-7 text-[#6f5d52]">
            También podés escribirnos por Instagram para consultas, novedades y contenido del café.
          </p>

          <a
            href="https://www.instagram.com/ramoncafe____/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#8b5e3c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#6e472d]"
          >
            <ExternalLink size={16} />
            @ramoncafe__
          </a>
        </div>
      </section>
    </main>
  );
}