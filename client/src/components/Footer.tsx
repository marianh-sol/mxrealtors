/*
 * MX Realtors Footer — Fondo rosa magenta #e8197a
 * Logo negro horizontal, textos blancos/oscuros, íconos sociales blancos
 * Design: Luxury Editorial Realty — bold magenta statement footer
 */
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";

const LOGO_BLANCO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238894937/B3AiJ4uY5sTvi2a6hudqJk/mx-realtors-horizontal-blanco_7e7f6490.png";

export default function Footer() {
  const [location, setLocation] = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#") && location !== "/") {
      setLocation("/" + href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#e8197a" }}>
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo blanco sobre fondo magenta */}
            <img
              src={LOGO_BLANCO}
              alt="MX Realtors"
              className="h-10 w-auto object-contain mb-6"
            />
            <p className="text-white/85 text-sm leading-relaxed max-w-sm font-body mb-6">
              Somos un grupo de expertos que, con empatía y años de experiencia en Relocalización y Bienes Raíces, podemos ayudarte a encontrar ese lugar que siempre has soñado.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-body font-semibold px-3 py-1.5 tracking-widest uppercase backdrop-blur-sm">
                Miembros del AMPI
              </span>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-body px-3 py-1.5 tracking-widest uppercase backdrop-blur-sm">
                Certificación ECO110.02
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mx.realtors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#e8197a] transition-all duration-300"
                aria-label="Instagram de MX Realtors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572531465873"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#e8197a] transition-all duration-300"
                aria-label="Facebook de MX Realtors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/524444905999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#e8197a] transition-all duration-300"
                aria-label="WhatsApp de MX Realtors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-bold text-xs tracking-widest uppercase text-white mb-6 border-b border-white/30 pb-3">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Servicios", href: "#servicios" },
                { label: "Nuestro Equipo", href: "#equipo" },
                { label: "Preguntas Frecuentes", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/80 hover:text-white text-sm font-body transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-bold text-xs tracking-widest uppercase text-white mb-6 border-b border-white/30 pb-3">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm font-body leading-relaxed">
                  Av Lomas Altas 122, Loma Alta<br />
                  78210 San Luis Potosí, S.L.P.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-white flex-shrink-0" />
                <a href="tel:4444905999" className="text-white/80 hover:text-white text-sm font-body transition-colors">
                  444 490 5999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-white flex-shrink-0" />
                <a href="mailto:home@mexmove.com" className="text-white/80 hover:text-white text-sm font-body transition-colors">
                  home@mexmove.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/20">
              <h5 className="font-body font-bold text-xs tracking-widest uppercase text-white mb-3">Horarios</h5>
              <p className="text-white/70 text-xs font-body leading-relaxed">
                Lun–Vie: 9:00–17:00 (oficina)<br />
                Lun–Vie: 9:00–20:00 (teléfono)<br />
                Sáb–Dom: 10:00–14:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs font-body">
            © {new Date().getFullYear()} MX Realtors. Todos los derechos reservados.
          </p>
          <p className="text-white/60 text-xs font-body">
            San Luis Potosí, México
          </p>
        </div>
      </div>
    </footer>
  );
}
