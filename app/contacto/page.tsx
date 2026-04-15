"use client";

import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-20 pt-24 text-[#2b211c] md:pt-28">
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#bfa05d]">
          Orlan Café
        </p>

        <h1 className="mb-5 text-4xl font-light md:text-5xl">
          Contacto
        </h1>

        <p className="mx-auto mb-12 max-w-2xl leading-8 text-[#6f5d52]">
          Encontrá nuestras sucursales, horarios y canales de contacto en un solo lugar.
        </p>

        {/* 🔥 CENTRADO REAL */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-[28px] border border-[#eee6df] bg-white p-8 text-center shadow-[0_12px_40px_rgba(43,33,28,0.04)]">
            
            <div className="mb-4 flex items-center justify-center gap-2 text-[#bfa05d]">
              <MapPin size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">
                Rosario
              </p>
            </div>

            <p className="mb-4 text-lg font-medium">
              Salta 1861
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-[#6f5d52]">
              <Clock size={16} className="shrink-0" />
              <p>Lunes a domingo · 8 a 20 hs</p>
            </div>

            <a
              href="https://maps.app.goo.gl/FMXFN1MU9MyW5Cbk9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#bfa05d] hover:underline"
            >
              Ver en mapa
            </a>

          </div>
        </div>

        {/* INSTAGRAM */}
        <div className="mt-14 rounded-[28px] border border-[#eee6df] bg-[#fcfaf8] p-8 shadow-[0_12px_40px_rgba(43,33,28,0.04)]">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#bfa05d]">
            Instagram
          </p>

          <p className="mx-auto mb-6 max-w-xl leading-7 text-[#6f5d52]">
            También podés escribirnos por Instagram para consultas, novedades y contenido del café.
          </p>

          <a
            href="https://www.instagram.com/cafeorlan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#bfa05d] px-5 py-2.5 text-sm text-white transition hover:bg-[#a88c4e]"
          >
            <ExternalLink size={16} />
            @orlancafe__
          </a>
        </div>
      </section>
    </main>
  );
}