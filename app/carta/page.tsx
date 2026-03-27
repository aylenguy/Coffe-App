"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

export default function CartaPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <main className="min-h-screen bg-white px-6 pb-20 pt-24 text-[#2b211c] md:pt-28">
        <section className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8b5e3c]">
            Ramon Café
          </p>

          <h1 className="mb-5 text-4xl font-light md:text-5xl">
            Nuestra carta
          </h1>

          <p className="mx-auto mb-12 max-w-2xl leading-8 text-[#6f5d52]">
            Conocé nuestra propuesta de cafetería y pastelería.
          </p>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group mx-auto block w-full max-w-3xl overflow-hidden rounded-[28px] border border-[#eee6df] bg-white shadow-[0_16px_50px_rgba(43,33,28,0.05)] transition hover:shadow-[0_22px_60px_rgba(43,33,28,0.08)]"
            aria-label="Abrir carta ampliada"
          >
            <div className="relative">
              <Image
                src="/images/image-6.webp"
                alt="Carta de Ramon Café"
                width={1400}
                height={2000}
                priority
                className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.01]"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />

              <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm text-[#2b211c] shadow-sm">
                <ZoomIn size={16} />
                Ampliar carta
              </div>
            </div>
          </button>
        </section>
      </main>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Carta ampliada de Ramon Café"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2b211c] shadow-md transition hover:scale-105"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>

          <div
            className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[24px] bg-white p-2 md:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/image-6.webp"
              alt="Carta ampliada de Ramon Café"
              width={1600}
              height={2200}
              className="h-auto w-full rounded-[18px] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
