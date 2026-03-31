"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/carta", label: "Carta" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#eee6df]/80 bg-white/88 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="font-[Bryndan,serif] text-3xl tracking-[0.04em] text-[#2b211c]"
        >
          Ramon
        </Link>

        {/* desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#2b211c] transition hover:opacity-65"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://www.instagram.com/ramoncafe____/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#8b5e3c] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#6e472d]"
          >
            Instagram
          </a>
        </nav>

        {/* mobile button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e6d8ca] text-[#2b211c] transition hover:bg-[#f8f2ec] md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[#eee6df] bg-white md:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-[#f2e8df] py-4 text-base text-[#2b211c]"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://www.instagram.com/ramoncafe____/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#8b5e3c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#6e472d]"
            >
              Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}