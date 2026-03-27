"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Coffee,
  Croissant,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
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
    title: "Café de especialidad",
    text: "Una propuesta cálida, cuidada y bien hecha.",
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
    text: "Sabores cuidados, preparaciones simples y una experiencia pensada para disfrutar.",
  },
  {
    icon: Croissant,
    title: "Pastelería",
    text: "Opciones dulces para acompañar cada momento con una propuesta cálida y bien resuelta.",
  },
  {
    icon: Sparkles,
    title: "Ambiente",
    text: "Un espacio urbano, cómodo y con identidad para hacer una pausa sin apuro.",
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
  {
    src: "/images/reseña-1.webp",
    alt: "Captura de reseña real de cliente en Google",
  },
  {
    src: "/images/reseña-2.webp",
    alt: "Segunda captura de reseña real de cliente en Google",
  },
  {
    src: "/images/reseña-3.webp",
    alt: "Tercera captura de reseña real de cliente en Google",
  },
];

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
}) {
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

function HighlightCard({
  icon: Icon,
  title,
  text,
  delay = 0,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
  delay?: number;
}) {
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

function GalleryCard({
  src,
  alt,
  width,
  height,
  aspect,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group self-start overflow-hidden rounded-[28px] border border-[#eee6df] bg-white shadow-[0_16px_40px_rgba(43,33,28,0.04)]"
    >
      <div className={`relative ${aspect} w-full overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#2b211c]">
      {/* HERO */}
      <section className="px-6 pb-20 pt-24 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <p className="mb-5 text-[11px] uppercase tracking-[0.38em] text-[#8b5e3c] md:text-xs">
              Café · Pastelería · Rosario
            </p>

            <h1 className="mb-6 font-[Bryndan,serif] text-6xl tracking-[0.03em] text-[#2b211c] md:text-8xl">
              Ramon
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-[#6f5d52] md:text-lg">
              Café de especialidad, pastelería y una propuesta simple para
              encontrar carta, horarios y ubicación en un solo lugar.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/carta"
                className="inline-flex items-center gap-2 rounded-full bg-[#8b5e3c] px-7 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#6e472d]"
              >
                Ver carta
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-[#dfd3c8] px-7 py-3 text-sm font-medium text-[#2b211c] transition duration-300 hover:bg-[#2b211c] hover:text-white"
              >
                Cómo llegar
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="mt-14 flex justify-center"
          >
            <div className="w-full max-w-6xl overflow-hidden rounded-[30px] border border-[#eee6df] shadow-[0_20px_60px_rgba(43,33,28,0.06)]">
              <video
                src="/videos/ramon.mp4"
                poster="/images/image-2.webp"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                controls={false}
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                className="pointer-events-none h-[260px] w-full object-cover object-center md:h-[340px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FRANJA INFO */}
      <section className="px-6 py-10 md:py-12">
        <motion.div
          className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {infoCards.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </motion.div>
      </section>

      {/* DESTACADOS */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 text-center"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8b5e3c]">
              Lo esencial
            </p>

            <h2 className="text-4xl font-light text-[#2b211c] md:text-5xl">
              Una experiencia simple, cálida y bien resuelta
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlightCards.map((item, index) => (
              <HighlightCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.text}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MOSAICO */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-[32px] border border-[#eee6df] bg-white shadow-[0_20px_60px_rgba(43,33,28,0.06)]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/image-2.webp"
                alt="Mesa con café servido en Ramon"
                width={1000}
                height={1200}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[32px] border border-[#eee6df] bg-[#fcfaf8] p-8 shadow-[0_16px_50px_rgba(43,33,28,0.04)]"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8b5e3c]">
                La experiencia
              </p>

              <h2 className="mb-4 text-4xl font-light leading-tight text-[#2b211c]">
                Un espacio pensado para disfrutar el café sin apuro
              </h2>

              <p className="leading-8 text-[#6f5d52]">
                Una propuesta donde conviven café de especialidad, pastelería y
                una estética simple, urbana y cálida.
              </p>
            </motion.div>

            <div className="grid items-start gap-6 sm:grid-cols-2">
              {galleryImages.map((image) => (
                <GalleryCard
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  aspect={image.aspect}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8b5e3c]">
              Opiniones
            </p>

            <h2 className="text-4xl font-light text-[#2b211c] md:text-5xl">
              Lo que dicen quienes nos visitan
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#6f5d52]">
              Experiencias reales compartidas por nuestros clientes.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {reviewImages.map((review, index) => (
              <motion.div
                key={review.src}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[24px] border border-[#eee6df] bg-white p-2 shadow-[0_10px_30px_rgba(43,33,28,0.04)]"
              >
                <Image
                  src={review.src}
                  alt={review.alt}
                  width={600}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="h-auto w-full rounded-[16px] object-contain"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 text-center text-sm text-[#8b5e3c]"
          >
            ⭐ 4.9 en Google Reviews
          </motion.div>
        </div>
      </section>
    </main>
  );
}
