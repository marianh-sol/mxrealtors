/**
 * MX Realtors — Team Page (/equipo)
 * Design: Luxury Editorial Realty
 * Colors: #0a0a0a (dark), #f8f5f0 (cream), #e8197a (magenta accent)
 * Fonts: Playfair Display (serif) + Montserrat (body, negro)
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageCircle, Users } from "lucide-react";
import { agents } from "@/lib/agents";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: easeOut, delay }}
      className={`will-change-transform will-change-opacity ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Team() {
  const bilingualCount = agents.filter((a) => a.bilingual).length;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ── HERO HEADER ─────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 bg-[#0a0a0a] border-b border-white/10">
        <div className="container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#e8197a] transition-colors text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <ArrowLeft size={14} />
              Volver al inicio
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.span
                className="section-label block mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
              >
                Nuestro Equipo
              </motion.span>
              <motion.h1
                className="font-display text-5xl lg:text-6xl text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
              >
                Conoce a Tus<br />
                <span className="italic text-[#e8197a]">Asesores</span>
              </motion.h1>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-8 lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
            >
              <div className="text-center lg:text-right">
                <div className="font-display text-4xl text-white">
                  {agents.length}<span className="text-[#e8197a]">+</span>
                </div>
                <p className="text-white/50 text-sm mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Asesores Expertos
                </p>
              </div>
              <div className="text-center lg:text-right">
                <div className="font-display text-4xl text-white">
                  {bilingualCount}<span className="text-[#e8197a]">+</span>
                </div>
                <p className="text-white/50 text-sm mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Bilingües
                </p>
              </div>
              <div className="text-center lg:text-right">
                <div className="font-display text-4xl text-white">
                  80<span className="text-[#e8197a]">%</span>
                </div>
                <p className="text-white/50 text-sm mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Hablan Inglés
                </p>
              </div>
            </motion.div>
          </div>

          {/* Accent line */}
          <motion.div
            className="mt-10 h-px bg-gradient-to-r from-[#e8197a] via-white/10 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
          />
        </div>
      </section>

      {/* ── AGENTS GRID ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          {/* Filter label */}
          <FadeUp className="flex items-center gap-3 mb-12">
            <Users size={16} className="text-[#e8197a]" />
            <span
              className="text-white/50 text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Todos los asesores — {agents.length} profesionales
            </span>
          </FadeUp>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                className="agent-card group cursor-default"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, ease: easeOut, delay: Math.min(i * 0.07, 0.5) }}
                style={{ willChange: "transform" }}
              >
                <img
                  src={agent.img}
                  alt={`Asesor inmobiliario bilingüe ${agent.name} en San Luis Potosí - MX Realtors`}
                  className="w-full"
                  loading="lazy"
                  style={{ aspectRatio: "3/4", objectFit: "cover", objectPosition: "top" }}
                />
                <div className="overlay">
                  {agent.bilingual && (
                    <span className="inline-block bg-[#e8197a] text-white text-xs font-body font-semibold px-2 py-0.5 tracking-widest uppercase mb-2">
                      Bilingüe
                    </span>
                  )}
                  <h4 className="font-display text-white text-base font-semibold">{agent.name}</h4>
                  <p className="text-white/60 text-xs font-body mt-0.5">{agent.role}</p>
                  {/* WhatsApp CTA on hover */}
                  <a
                    href="https://wa.me/524444905999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[#e8197a] text-xs font-body font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle size={12} />
                    Contactar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#111] border-t border-white/10">
        <div className="container text-center">
          <FadeUp>
            <span className="section-label block mb-4">¿Listo para Empezar?</span>
            <h2 className="font-display text-4xl lg:text-5xl text-white mb-6">
              Habla con Uno de<br />
              <span className="italic text-[#e8197a]">Nuestros Expertos</span>
            </h2>
            <p
              className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nuestros asesores responden en menos de 1 hora. Cuéntanos qué estás buscando y te ayudamos a encontrarlo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-sm mx-auto sm:max-w-none">
              <a
                href="https://wa.me/524444905999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mx-primary inline-flex items-center gap-2"
              >
                <MessageCircle size={14} />
                Escribir por WhatsApp
              </a>
              <Link
                href="/#contacto"
                className="btn-mx-outline inline-flex items-center gap-2"
              >
                Agendar una Cita
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
