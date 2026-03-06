/*
 * MX Realtors Navbar — Luxury Editorial Realty
 * Dark sticky header with logo blanco, nav links uppercase, CTA magenta
 * Mobile: hamburger menu con slide-in animado, overlay completo
 */
import { useState, useEffect } from "react";
import { Phone, Menu, X, Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const LOGO_BLANCO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/mx-realtors-horizontal-blanco_7e7f6490.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setAtTop(window.scrollY < 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Handle cross-page hash navigation
  useEffect(() => {
    if (location === "/" && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#") && location !== "/") {
      setLocation("/" + href);
      return;
    }
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      setLocation(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileOpen
          ? "bg-[#0a0a0a]/98 backdrop-blur-md shadow-2xl"
          : "bg-gradient-to-b from-black/70 to-transparent"
          }`}
      >
        <div className="container">
          <nav className={`flex items-center justify-between transition-all duration-500 ${atTop && !mobileOpen ? "h-18 lg:h-24" : "h-16 lg:h-18"}`}>
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
              className="flex-shrink-0 z-10"
            >
              <img
                src={LOGO_BLANCO}
                alt="MX Realtors"
                className={`w-auto object-contain transition-all duration-500 ${atTop && !mobileOpen ? "h-9 lg:h-14" : "h-8 lg:h-10"}`}
              />
            </a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="nav-link-mx"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA + Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:4444905999"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Phone size={14} />
                <span>444 490 5999</span>
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
                className="btn-mx-primary"
              >
                Agendar Cita
              </a>
            </div>

            {/* Mobile: Phone + Hamburger */}
            <div className="flex lg:hidden items-center gap-3 z-10">
              <a
                href="tel:4444905999"
                className="text-white/80 hover:text-[#e8197a] transition-colors p-1"
                aria-label="Llamar"
              >
                <Phone size={18} />
              </a>
              <button
                className="text-white p-2 -mr-2 focus:outline-none"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/90 flex flex-col pt-20"
          >
            {/* Quick Actions at Top for Mobile */}
            <div className="px-6 grid grid-cols-2 gap-3 mb-8">
              <a
                href="tel:4444905999"
                className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl gap-2 active:bg-white/10 transition-colors"
                aria-label="Llamar"
              >
                <Phone size={20} className="text-[#e8197a]" />
                <span className="text-[10px] text-white/60 uppercase tracking-widest font-body">Llamar</span>
              </a>
              <a
                href="https://wa.me/524444905999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl gap-2 active:bg-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} className="text-[#e8197a]" />
                <span className="text-[11px] text-white/60 uppercase tracking-widest font-body">WhatsApp</span>
              </a>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col overflow-y-auto px-8">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="block text-white text-4xl/tight font-display font-medium py-3 border-b border-white/5 hover:text-[#e8197a] transition-all duration-300 active:pl-2"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-8 space-y-4"
            >
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
                className="btn-mx-primary w-full text-center block py-4 text-base rounded-lg"
              >
                Agendar Cita
              </a>

              <div className="flex justify-center gap-8 pt-6">
                <a
                  href="https://www.instagram.com/mx.realtors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-[#e8197a] active:scale-90 transition-all border border-white/10"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61572531465873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-[#e8197a] active:scale-90 transition-all border border-white/10"
                  aria-label="Facebook"
                >
                  <Facebook size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
