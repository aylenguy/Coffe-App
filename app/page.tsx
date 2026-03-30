"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Coffee,
  Croissant,
  Sparkles,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const infoCards = [
  {
    icon: Clock3,
    title: "Horarios",
    text: "Lunes a sábado · 8 a 20 hs",
  },
  {
    icon: Coffee,
    title: "Nuestra propuesta",
    text: "Café de especialidad, pastelería y un ambiente pensado para disfrutar.",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    text: "Córdoba 1894, Rosario",
  },
];

const highlightCards = [
  {
    icon: Coffee,
    title: "Café de especialidad",
    text: "Preparaciones cuidadas, buenos granos y una experiencia simple para disfrutar todos los días.",
  },
  {
    icon: Croissant,
    title: "Pastelería",
    text: "Opciones dulces pensadas para acompañar el café con una propuesta cálida y bien resuelta.",
  },
  {
    icon: Sparkles,
    title: "Ambiente",
    text: "Un espacio urbano, cómodo y con identidad para trabajar, encontrarse o hacer una pausa.",
  },
];

const galleryImages = [
  {
    src: "/images/image-1.webp",
    alt: "Pastelería artesanal exhibida",
    width: 800,
    height: 800,
    aspect: "aspect-[1/1]",
  },
  {
    src: "/images/image-5.webp",
    alt: "Producto servido en Ramon",
    width: 800,
    height: 800,
    aspect: "aspect-[1/1]",
  },
  {
    src: "/images/image-3.webp",
    alt: "Barista preparando café",
    width: 800,
    height: 1000,
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/image-4.webp",
    alt: "Interior del local Ramon",
    width: 800,
    height: 1000,
    aspect: "aspect-[4/5]",
  },
];

const reviewImages = [
  { src: "/images/reseña-1.webp", alt: "Reseña cliente" },
  { src: "/images/reseña-2.webp", alt: "Reseña cliente" },
  { src: "/images/reseña-3.webp", alt: "Reseña cliente" },
];

function InfoCard({ icon: Icon, title, text }: any) {
  return (
    <div className="rounded-[24px] border border-[#eee6df] bg-[#fcfaf8] p-6 shadow-[0_10px_30px_rgba(43,33,28,0.04)]">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e8dd]">
        <Icon size={18} className="text-[#8b5e3c]" />
      </div>
      <p className="mb-1 text-sm font-medium text-[#2b211c]">{title}</p>
      <p className="text-sm leading-7 text-[#6f5d52]">{text}</p>
    </div>
  );
}

function HighlightCard({ icon: Icon, title, text, delay = 0 }: any) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className="rounded-[28px] border border-[#eee6df] bg-white p-8 shadow-[0_12px_40px_rgba(43,33,28,0.04)]"
    >
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f1eb] text-[#8b5e3c]">
        <Icon size={20} />
      </div>
      <h3 className="mb-3 text-xl font-medium text-[#2b211c]">{title}</h3>
      <p className="leading-7 text-[#6f5d52]">{text}</p>
    </motion.div>
  );
}

function GalleryCard({ src, alt, width, height, aspect }: any) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group overflow-hidden rounded-[28px] border border-[#eee6df] bg-white shadow-[0_16px_40px_rgba(43,33,28,0.04)]"
    >
      <div className={`relative ${aspect}`}>
        <Image src={src} alt={alt} width={width} height={height} className="object-cover w-full h-full" />
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#2b211c]">
      <section className="px-6 pt-24 pb-20 text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <h1 className="text-6xl md:text-8xl">Ramon</h1>
        </motion.div>
      </section>
    </main>
  );
}