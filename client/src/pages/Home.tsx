/*
 * MX Realtors — Home Page
 * Design: Luxury Editorial Realty
 * Sections: Hero, Stats, About, Services, Team, Why Us, FAQ, Contact
 * Colors: #0a0a0a (dark), #f8f5f0 (cream), #e8197a (magenta accent)
 * Fonts: Playfair Display (serif) + Montserrat (body, negro)
 */
import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  CheckCircle,
  ArrowRight,
  Star,
  Home as HomeIcon,
  Key,
  Users,
  Shield,
  Clock,
  Globe,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
} from "lucide-react";

// ── Asset URLs ──────────────────────────────────────────────────────────────
const ASSETS = {
  heroHouse: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/hero-slp-luxury-mwRUAzyVsMJGYt3URXkGDn.webp",
  heroInterior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/hero-interior-luxury-AXRX4Xb4RQyfFunqu66DBa.webp",
  heroCity: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/hero-city-slp-RnZFPU3p2ebDQf2fkcY82c.webp",
  equipo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/equipo-mxrealtors_8cc700eb.jpg",
  logoBlanco: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/mx-realtors-horizontal-blanco_7e7f6490.png",
};

// ── Agents Data ──────────────────────────────────────────────────────────────
const agents = [
  {
    name: "Daniela Navarro",
    role: "Fundadora & Directora",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Fundadora%20Daniela%20Navarro_6e210cc9.jpg",
    bilingual: true,
  },
  {
    name: "Eduardo",
    role: "Asesor Inmobiliario",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Eduardo_ea819f8b.jpg",
    bilingual: true,
  },
  {
    name: "Héctor",
    role: "Asesor Inmobiliario",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Hector_516effb8.jpg",
    bilingual: false,
  },
  {
    name: "Ingrid",
    role: "Asesora Inmobiliaria",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Ingrid_6767bf4e.jpg",
    bilingual: true,
  },
  {
    name: "Lore Lazcano",
    role: "Asesora Inmobiliaria",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Lore%20Lazcano_908ae054.jpg",
    bilingual: false,
  },
  {
    name: "Lorena Rodríguez",
    role: "Asesora Inmobiliaria",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Lorena%20Rodr%C3%ADguez_bfbfcdac.jpg",
    bilingual: false,
  },
  {
    name: "Mariana Alonso",
    role: "Asesora Inmobiliaria",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Mariana%20Alonso_73f4098e.jpg",
    bilingual: false,
  },
  {
    name: "Maricarmen Robinson",
    role: "Asesora Inmobiliaria",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Maricarmen%20Robinson_80804ec8.jpg",
    bilingual: true,
  },
  {
    name: "Paola Felix",
    role: "Asesora Inmobiliaria",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Paola%20Felix_7daa2fb9.jpg",
    bilingual: false,
  },
  {
    name: "Pita Chavez",
    role: "Asesora Inmobiliaria",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Pita%20Chavez_45c662d1.jpg",
    bilingual: false,
  },
  {
    name: "Rosy Loredo",
    role: "Asesora Inmobiliaria",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Rosy%20Loredo_ba2b933d.jpeg",
    bilingual: false,
  },
  {
    name: "Sergio",
    role: "Asesor Inmobiliario",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/Sergio_91a55a06.jpg",
    bilingual: true,
  },
];

// ── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "¿Qué trámites y documentación necesito para rentar?",
    a: "Para rentar un inmueble necesitas identificación oficial vigente, comprobante de ingresos (al menos 3 veces el valor de la renta), referencias personales o laborales, y en algunos casos un aval o depósito en garantía. Nuestros asesores te guiarán en cada paso del proceso para que sea lo más sencillo posible.",
  },
  {
    q: "¿En cuánto puedo vender mi propiedad?",
    a: "El valor de tu propiedad depende de factores como ubicación, tamaño, estado de conservación, amenidades y el mercado actual en San Luis Potosí. Realizamos un análisis comparativo de mercado (CMA) sin costo para darte un estimado preciso y ayudarte a fijar el precio óptimo para una venta exitosa.",
  },
  {
    q: "¿En qué zonas de SLP hay mayor plusvalía?",
    a: "Las zonas con mayor plusvalía en San Luis Potosí actualmente son la zona poniente (Lomas, Tangamanga, Campestre), seguida de desarrollos nuevos cerca de la zona industrial BMW. También hay oportunidades interesantes en zonas en desarrollo. Nuestros asesores te orientan según tu presupuesto e inversión.",
  },
  {
    q: "¿Trabajan con expatriados y personal extranjero?",
    a: "Sí, somos la inmobiliaria con mayor porcentaje de personal bilingüe en SLP (80% de nuestro equipo habla inglés). Trabajamos directamente con Mexmove, empresa de relocation para personal de BMW y otras empresas internacionales. Conocemos perfectamente las necesidades y procesos para expatriados.",
  },
  {
    q: "¿Cuánto tiempo tarda el proceso de compra o renta?",
    a: "El tiempo varía según el tipo de operación. Para una renta, el proceso puede completarse en 1-2 semanas una vez encontrada la propiedad ideal. Para una compra, puede tomar entre 4-8 semanas dependiendo del método de pago (contado, crédito hipotecario, etc.). Nuestro tiempo máximo de respuesta a tus consultas es de 1 hora.",
  },
];

// ── Counter Animation Hook ────────────────────────────────────────────────────
function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ── Framer Motion Helpers ────────────────────────────────────────────────────
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

function FadeLeft({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      className={`will-change-transform will-change-opacity ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FadeRight({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      className={`will-change-transform will-change-opacity ${className}`}
    >
      {children}
    </motion.div>
  );
}

function ScaleIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.93 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Stat Card Component ───────────────────────────────────────────────────────
function StatCard({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCounter(value, 1500, started);
  return (
    <div className="text-center lg:text-left">
      <div className="stat-number">
        {count}<span className="text-[#e8197a]">{suffix}</span>
      </div>
      <p className="text-white/60 text-sm mt-2 tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>{label}</p>
    </div>
  );
}

// ── Main Home Component ───────────────────────────────────────────────────────
export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [statsStarted, setStatsStarted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [agentPage, setAgentPage] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
  const [formSent, setFormSent] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    { img: ASSETS.heroHouse, label: "Zona Poniente, SLP" },
    { img: ASSETS.heroInterior, label: "Interiores de Lujo" },
    { img: ASSETS.heroCity, label: "San Luis Potosí" },
  ];

  // Auto-advance hero
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Stats counter trigger
  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const agentsPerPage = 4;
  const totalPages = Math.ceil(agents.length / agentsPerPage);
  const visibleAgents = agents.slice(agentPage * agentsPerPage, (agentPage + 1) * agentsPerPage);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola MX Realtors! Me llamo ${formData.nombre}. Teléfono: ${formData.telefono}. Servicio: ${formData.servicio}. ${formData.mensaje}`;
    window.open(`https://wa.me/524444905999?text=${encodeURIComponent(msg)}`, "_blank");
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Navbar />

      {/* ── HERO SECTION ──────────────────────────────────────────────── */}
      <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden bg-[#0a0a0a]">
        {/* Background slides */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === heroSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.img}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 container h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
            >
              <span className="accent-line" />
              <span className="section-label text-[#e8197a]">San Luis Potosí, México</span>
            </motion.div>
            <motion.h1
              className="hero-title text-white mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOut, delay: 0.5 }}
            >
              Encuentra el Hogar<br />
              <span className="italic text-[#e8197a]">que Siempre</span><br />
              Has Soñado
            </motion.h1>
            <motion.p
              className="text-white/80 text-base max-w-xl mb-10 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.75 }}
            >
              Expertos en renta y venta de inmuebles en San Luis Potosí. Asesores bilingües, miembros del AMPI, trabajando para encontrar tu solución perfecta.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.95 }}
            >
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-mx-primary inline-flex items-center gap-2"
              >
                Agendar Cita
                <ArrowRight size={14} />
              </a>
              <a
                href="#servicios"
                onClick={(e) => { e.preventDefault(); document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-mx-outline inline-flex items-center gap-2"
              >
                Nuestros Servicios
              </a>
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              className={`transition-all duration-300 rounded-full ${i === heroSlide ? "w-8 h-2 bg-[#e8197a]" : "w-2 h-2 bg-white/40"
                }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs font-body tracking-widest uppercase rotate-90 origin-center mb-4">Scroll</span>
          <ChevronDown size={18} className="text-white/40 animate-bounce" />
        </div>

        {/* Current location label */}
        <div className="absolute bottom-8 left-8 z-10">
          <span className="text-white/40 text-xs font-body tracking-widest uppercase">
            {heroSlides[heroSlide].label}
          </span>
        </div>
      </section>

      {/* ── STATS SECTION ─────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-t border-white/10" ref={statsRef}>
        <div className="container py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatCard value={2} suffix="+" label="Años de Experiencia" started={statsStarted} />
            <StatCard value={80} suffix="%" label="Personal Bilingüe" started={statsStarted} />
            <StatCard value={100} suffix="+" label="Clientes Satisfechos" started={statsStarted} />
            <StatCard value={12} suffix="" label="Asesores Especializados" started={statsStarted} />
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ─────────────────────────────────────────────── */}
      <section id="nosotros" className="section-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <FadeLeft>
              <div className="relative">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={ASSETS.equipo}
                    alt="Equipo de expertos inmobiliarios de MX Realtors en San Luis Potosí"
                    className="w-full aspect-[4/3] object-cover object-top"
                    loading="lazy"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: easeOut }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-[#e8197a] text-white p-6 hidden lg:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: easeOut }}
                >
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold">AMPI</div>
                    <div className="text-xs tracking-widest uppercase mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Miembros</div>
                  </div>
                </motion.div>
              </div>
            </FadeLeft>

            {/* Content */}
            <FadeRight>
              <span className="section-label block mb-4">Quiénes Somos</span>
              <h2 className="section-title text-[#0a0a0a] mb-6">
                Tu Aliado de Confianza en Bienes Raíces
              </h2>
              <span className="accent-line block mb-6" />
              <p className="text-[#0a0a0a] leading-relaxed font-body mb-6 text-center lg:text-left">
                Somos un grupo de expertos que, con empatía y años de experiencia en Relocalización y Bienes Raíces, podemos ayudarte a encontrar ese lugar que siempre has soñado: tu hogar, tu negocio o tu empresa.
              </p>
              <p className="text-[#0a0a0a] leading-relaxed font-body mb-8 text-center lg:text-left">
                Con sede en San Luis Potosí, nos especializamos en la zona poniente y trabajamos de la mano con <strong className="text-[#0a0a0a]">Mexmove</strong>, empresa líder en relocation para personal de BMW y otras empresas internacionales. El <strong className="text-[#0a0a0a]">80% de nuestro equipo es bilingüe</strong>, lo que nos permite atender tanto al público local como al extranjero.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Certificación ECO110.02",
                  "Miembros del AMPI",
                  "Contratos con abogado",
                  "Asesores bilingües",
                  "Catálogo amplio",
                  "Atención personalizada",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle size={16} className="text-[#e8197a] flex-shrink-0" />
                    <span className="text-[#0a0a0a] text-sm font-body">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="btn-mx-dark inline-flex items-center gap-2"
                >
                  Agendar Cita
                  <ArrowRight size={14} />
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 text-[#e8197a] font-body text-sm font-semibold hover:underline transition-all"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Contáctanos
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ──────────────────────────────────────────── */}
      <section id="servicios" className="section-dark py-20 lg:py-28">
        <div className="container">
          <FadeUp className="text-center mb-16">
            <span className="section-label block mb-4">Lo Que Hacemos</span>
            <h2 className="section-title text-white mb-4">
              Nuestros Servicios
            </h2>
            <span className="accent-line mx-auto block" />
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Renta */}
            <FadeLeft className="tarjeta-servicio group relative p-10">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#e8197a]" />
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#e8197a]/10 flex items-center justify-center mb-4">
                  <Key size={24} className="text-[#e8197a]" />
                </div>
                <h3 className="font-display text-2xl text-white mb-4">Renta de Inmuebles</h3>
                <p className="text-white/60 font-body leading-relaxed mb-6">
                  Buscamos una negociación neutra para arrendador y arrendatario. Nos aseguramos de que el cliente que ingresa al inmueble sea una persona de confianza, y que los tratos se respeten con comunicación clara y transparente en todo momento.
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Verificación de inquilinos",
                  "Contratos personalizados por abogado",
                  "Negociación justa para ambas partes",
                  "Seguimiento post-renta",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8197a] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-mx-primary inline-flex items-center gap-2 text-sm"
              >
                Quiero Rentar
                <ArrowRight size={13} />
              </a>
            </FadeLeft>

            {/* Venta */}
            <FadeRight className="tarjeta-servicio group relative p-10">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#e8197a]" />
              <div className="mb-6">
                <div className="w-12 h-12 bg-[#e8197a]/10 flex items-center justify-center mb-4">
                  <HomeIcon size={24} className="text-[#e8197a]" />
                </div>
                <h3 className="font-display text-2xl text-white mb-4">Venta de Inmuebles</h3>
                <p className="text-white/60 font-body leading-relaxed mb-6">
                  Facilitamos negociaciones neutras entre vendedor y comprador, atendiendo temas de precio, cambios o mejoras. Nos aseguramos de que el inmueble esté libre de problemas legales y que el método de compra sea completamente lícito.
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Valuación de mercado sin costo",
                  "Revisión legal del inmueble",
                  "Asesoría en métodos de pago",
                  "Negociación profesional",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8197a] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-mx-primary inline-flex items-center gap-2 text-sm"
              >
                Quiero Vender
                <ArrowRight size={13} />
              </a>
            </FadeRight>
          </div>

          {/* CTA Servicios */}
          <FadeUp className="text-center mb-12">
            <p className="text-white/60 font-body mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              ¿Listo para encontrar tu propiedad ideal? Contáctanos ahora.
            </p>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-mx-primary inline-flex items-center gap-2"
            >
              Solicitar Asesoría Gratis
              <ArrowRight size={14} />
            </a>
          </FadeUp>

          {/* Service highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Globe size={20} />, title: "Bilingüe", desc: "Atención en español e inglés" },
              { icon: <Shield size={20} />, title: "Certificados", desc: "ECO110.02 AMPI" },
              { icon: <Clock size={20} />, title: "Respuesta Rápida", desc: "Máx. 1 hora de atención" },
              { icon: <Users size={20} />, title: "Equipo Experto", desc: "12 asesores especializados" },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="tarjeta-servicio p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut, delay: idx * 0.1 }}
              >
                <div className="icono-contenedor text-[#e8197a] mb-3 flex justify-center">{item.icon}</div>
                <h4 className="font-display text-white text-base mb-1">{item.title}</h4>
                <p className="text-white/40 text-xs font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US SECTION ────────────────────────────────────────────── */}
      <section className="section-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeLeft>
              <span className="section-label block mb-4">¿Por Qué Elegirnos?</span>
              <h2 className="section-title text-[#0a0a0a] mb-6">
                Lo Que Nos Hace<br />
                <span className="italic text-[#e8197a]">Diferentes</span>
              </h2>
              <span className="accent-line block mb-8" />
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Ahorro de Tiempo",
                    desc: "Ofrecemos opciones de nuestro propio catálogo y el de otras inmobiliarias. Buscamos según tus necesidades específicas para que tú solo elijas.",
                  },
                  {
                    num: "02",
                    title: "Seguridad Legal",
                    desc: "Nuestros contratos son elaborados de manera personalizada por nuestro abogado. Tu inversión y acuerdos siempre protegidos.",
                  },
                  {
                    num: "03",
                    title: "Asesores Bilingües",
                    desc: "Somos los únicos con 80% de personal bilingüe en SLP. Atendemos tanto al público local como al extranjero con la misma calidad.",
                  },
                  {
                    num: "04",
                    title: "Alianza con Mexmove",
                    desc: "Trabajamos de la mano con Mexmove, empresa de relocation para personal de BMW y otras empresas internacionales en SLP.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.num}
                    className="tarjeta-servicio flex gap-6 p-5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: easeOut, delay: idx * 0.1 }}
                  >
                    <span className="icono-contenedor font-display text-4xl font-bold text-[#e8197a]/40 leading-none flex-shrink-0 w-12 transition-all duration-400">
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-display text-lg text-white mb-2">{item.title}</h4>
                      <p className="text-white/60 text-sm font-body leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="#contacto"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="btn-mx-primary inline-flex items-center gap-2"
                >
                  Quiero Asesoría Ahora
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeLeft>

            {/* Image collage */}
            <FadeRight className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden">
                  <img
                    src={ASSETS.heroInterior}
                    alt="Interior de propiedad de lujo en San Luis Potosí"
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden mt-8">
                  <img
                    src={ASSETS.heroCity}
                    alt="Vista panorámica de San Luis Potosí, México"
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a] p-4 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {agents.slice(0, 4).map((a) => (
                    <img
                      key={a.name}
                      src={a.img}
                      alt={a.name}
                      className="w-8 h-8 rounded-full object-cover object-top border-2 border-[#0a0a0a]"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-white text-sm font-body font-medium">12 Asesores Expertos</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="#e8197a" className="text-[#e8197a]" />
                    ))}
                  </div>
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ──────────────────────────────────────────────── */}
      <section id="equipo" className="section-dark py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
            <FadeUp>
              <span className="section-label block mb-4">Nuestro Equipo</span>
              <h2 className="section-title text-white">
                Conoce a Tus<br />
                <span className="italic text-[#e8197a]">Asesores</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1} className="flex items-center gap-3">
              <button
                onClick={() => setAgentPage((p) => Math.max(0, p - 1))}
                disabled={agentPage === 0}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#e8197a] hover:text-[#e8197a] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-white/40 text-sm font-body">
                {agentPage + 1} / {totalPages}
              </span>
              <button
                onClick={() => setAgentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={agentPage === totalPages - 1}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#e8197a] hover:text-[#e8197a] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {visibleAgents.map((agent, i) => (
              <motion.div
                key={agent.name}
                className="agent-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
                style={{ willChange: "transform" }}
              >
                <img
                  src={agent.img}
                  alt={`Asesor inmobiliario ${agent.name} - MX Realtors`}
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
                </div>
              </motion.div>
            ))}
          </div>

          <FadeUp className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-sm mx-auto sm:max-w-none">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-mx-primary inline-flex items-center gap-2"
              >
                Habla con un Asesor
                <ArrowRight size={14} />
              </a>
              <Link
                href="/equipo"
                className="btn-mx-outline inline-flex items-center gap-2"
              >
                Conoce a nuestros asesores
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{
          backgroundImage: `url(${ASSETS.heroHouse})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="relative z-10 container text-center">
          <FadeUp><span className="section-label block mb-4">¿Listo para Empezar?</span></FadeUp>
          <FadeUp delay={0.1}><h2 className="section-title text-white mb-6">
            Encuentra Tu Propiedad Ideal<br />
            <span className="italic text-[#e8197a]">en San Luis Potosí</span>
          </h2></FadeUp>
          <FadeUp delay={0.2}><p className="text-white/80 max-w-xl mx-auto mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Filtra propiedades, elige las que más te gusten y agenda una cita para conocerlas. Nuestros asesores te acompañarán en cada paso.
          </p></FadeUp>
          <FadeUp delay={0.3}><div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-sm mx-auto sm:max-w-none">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-mx-primary inline-flex items-center gap-2"
            >
              Agendar Cita Ahora
              <ArrowRight size={14} />
            </a>
            <a
              href="https://wa.me/524444905999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mx-outline inline-flex items-center gap-2"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div></FadeUp>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
      <section id="faq" className="section-cream py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeUp className="text-center mb-14">
              <span className="section-label block mb-4">Preguntas Frecuentes</span>
              <h2 className="section-title text-[#0a0a0a]">
                Todo lo que Necesitas<br />
                <span className="italic text-[#e8197a]">Saber</span>
              </h2>
              <span className="accent-line mx-auto block mt-4" />
            </FadeUp>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e4e4e4] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f8f5f0] transition-colors"
                  >
                    <span className="font-display text-[#0a0a0a] font-semibold text-base pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#e8197a] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-[#0a0a0a] font-body text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA FAQ */}
            <FadeUp className="text-center mt-12">
              <p className="text-[#0a0a0a]/70 font-body mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                ¿Tienes más preguntas? Nuestros asesores te responden en menos de 1 hora.
              </p>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-mx-dark inline-flex items-center gap-2"
              >
                Habla con un Asesor
                <ArrowRight size={14} />
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────────────────── */}
      <section id="contacto" className="section-dark py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <FadeLeft>
              <span className="section-label block mb-4">Contáctanos</span>
              <h2 className="section-title text-white mb-6">
                Agenda Tu Cita<br />
                <span className="italic text-[#e8197a]">Hoy Mismo</span>
              </h2>
              <span className="accent-line block mb-8" />
              <p className="text-white/80 leading-relaxed mb-10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Cuéntanos qué estás buscando y uno de nuestros asesores te contactará en menos de 1 hora para ayudarte a encontrar la propiedad perfecta.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e8197a]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#e8197a]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-body tracking-widest uppercase mb-1">Teléfono / WhatsApp</p>
                    <a href="tel:4444905999" className="text-white font-body hover:text-[#e8197a] transition-colors">
                      444 490 5999
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e8197a]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#e8197a]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-body tracking-widest uppercase mb-1">Email</p>
                    <a href="mailto:home@mexmove.com" className="text-white font-body hover:text-[#e8197a] transition-colors">
                      home@mexmove.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e8197a]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#e8197a]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-body tracking-widest uppercase mb-1">Oficina</p>
                    <p className="text-white font-body">
                      Av Lomas Altas 122, Loma Alta<br />
                      78210 San Luis Potosí, S.L.P.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/mEeXktJJbxFg43Kf8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e8197a] text-xs font-body mt-1 inline-flex items-center gap-1 hover:underline"
                    >
                      Ver en Google Maps
                      <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/40 text-xs font-body tracking-widest uppercase mb-4">Síguenos</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/mx.realtors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-[#e8197a] transition-colors text-sm font-body"
                  >
                    <Instagram size={16} />
                    @mx.realtors
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61572531465873"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-[#e8197a] transition-colors text-sm font-body"
                  >
                    <Facebook size={16} />
                    MX Realtors
                  </a>
                </div>
              </div>
            </FadeLeft>

            {/* Form — LeadConnector embed */}
            <FadeRight>
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden" style={{ minHeight: "696px" }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/kkXx3F8sKfpEnpKEp8IU"
                  style={{ width: "100%", height: "696px", border: "none", borderRadius: "1px" }}
                  id="inline-kkXx3F8sKfpEnpKEp8IU"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contactanos"
                  data-height="696"
                  data-layout-iframe-id="inline-kkXx3F8sKfpEnpKEp8IU"
                  data-form-id="kkXx3F8sKfpEnpKEp8IU"
                  title="Contactanos"
                />
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── WHATSAPP FLOAT ────────────────────────────────────────────── */}
      <a
        href="https://wa.me/524444905999?text=Hola%20MX%20Realtors!%20Me%20gustaría%20obtener%20información%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
