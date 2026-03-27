"use client";

import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-20 pt-24 text-[#2b211c] md:pt-28">
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8b5e3c]">
          Ramon Café
        </p>

        <h1 className="mb-5 text-4xl font-light md:text-5xl">Contacto</h1>

        <p className="mx-auto mb-12 max-w-2xl leading-8 text-[#6f5d52]">
          Encontranos en nuestras sucursales o escribinos por Instagram para
          consultas.
        </p>

        {/* Sucursales */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Rosario */}
          <div className="rounded-[28px] border border-[#eee6df] bg-white p-8 text-left shadow-[0_12px_40px_rgba(43,33,28,0.04)]">
            <div className="mb-4 flex items-center gap-2 text-[#8b5e3c]">
              <MapPin size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">Rosario</p>
            </div>

            <p className="mb-4 text-lg font-medium">Córdoba 1894</p>

            <div className="flex items-start gap-2 text-sm text-[#6f5d52]">
              <Clock size={16} className="mt-1" />
              <div>
                <p>Lunes a sábado · 8 a 20 hs</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="mt-6 inline-block text-sm text-[#8b5e3c] hover:underline"
            >
              Ver en mapa
            </a>
          </div>

          {/* Funes */}
          <div className="rounded-[28px] border border-[#eee6df] bg-white p-8 text-left shadow-[0_12px_40px_rgba(43,33,28,0.04)]">
            <div className="mb-4 flex items-center gap-2 text-[#8b5e3c]">
              <MapPin size={18} />
              <p className="text-sm uppercase tracking-[0.2em]">Funes</p>
            </div>

            <p className="mb-4 text-lg font-medium">
              RN 9 Esq. Galindo — Local 5
            </p>

            <div className="flex items-start gap-2 text-sm text-[#6f5d52]">
              <Clock size={16} className="mt-1" />
              <div>
                <p>Lunes a sábado · 8 a 20 hs</p>
                <p>Domingo · 08:30 a 13:30 hs</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="mt-6 inline-block text-sm text-[#8b5e3c] hover:underline"
            >
              Ver en mapa
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="mt-14">
          <p className="mb-4 text-sm text-[#6f5d52]">
            También podés escribirnos por Instagram
          </p>

          <a
            href="https://instagram.com/ramoncafe__"
            target="_blank"
            className="inline-flex items-center rounded-full bg-[#8b5e3c] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#6e472d]"
          >
            @ramoncafe__
          </a>
        </div>
      </section>
    </main>
  );
}
