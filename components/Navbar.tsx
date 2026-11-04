"use client";

import React, { useState } from "react";
import { Dog, Menu, X, CalendarCheck, Shield, Phone } from "lucide-react";

interface NavbarProps {
  onSelectGoal?: (goal?: string, program?: string) => void;
}

export function Navbar({ onSelectGoal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onSelectGoal) {
      onSelectGoal();
    }
    const element = document.getElementById("valoracion");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#13261f] border-b border-[#2b4f42] text-[#f4f3ee]">
      {/* Top tactical sanctuary bar */}
      <div className="bg-[#1b342b] border-b border-[#2b4f42] text-[#9eaca2] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="flex items-center gap-2 font-medium tracking-wide">
            <Shield
              className="w-3.5 h-3.5 text-[#7ba28a] shrink-0"
              aria-hidden="true"
            />
            <span>
              CAMPUS K9 Y SANTUARIO CANINO · Cursos de Obediencia (3 semanas), Modificación de Conducta y Estancia &ldquo;Peques&rdquo; (&lt;8 kg)
            </span>
          </p>
          <a
            href="#requisitos"
            className="hidden sm:inline-flex items-center gap-1 text-[#f4f3ee] hover:text-[#c27b38] font-semibold transition-colors"
          >
            Protocolo e instalaciones →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Crest & Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] rounded-lg p-1"
            aria-label="K9 Armonía Centro Integral Canino - Ir al inicio"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1b342b] border border-[#2b4f42] flex items-center justify-center group-hover:border-[#c27b38] transition-colors">
              <Dog className="w-6 h-6 text-[#c27b38]" aria-hidden="true" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wide text-[#f4f3ee] block leading-none">
                K9{" "}
                <span className="font-serif italic font-normal text-[#c27b38]">
                  Armonía
                </span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#7ba28a] font-semibold block mt-1">
                Centro Integral Canino
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Navegación principal"
          >
            <a
              href="#servicios"
              className="text-sm font-semibold tracking-wide text-[#9eaca2] hover:text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] rounded px-2 py-1"
            >
              Cursos y Programas
            </a>
            <a
              href="#instalaciones"
              className="text-sm font-semibold tracking-wide text-[#9eaca2] hover:text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] rounded px-2 py-1"
            >
              Campus y Peques
            </a>
            <a
              href="#metodologia"
              className="text-sm font-semibold tracking-wide text-[#9eaca2] hover:text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] rounded px-2 py-1"
            >
              Metodología
            </a>
            <a
              href="#requisitos"
              className="text-sm font-semibold tracking-wide text-[#9eaca2] hover:text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] rounded px-2 py-1"
            >
              Requisitos
            </a>
            <a
              href="#testimonios"
              className="text-sm font-semibold tracking-wide text-[#9eaca2] hover:text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] rounded px-2 py-1"
            >
              Casos de Éxito
            </a>
            <a
              href="#ubicacion"
              className="text-sm font-semibold tracking-wide text-[#9eaca2] hover:text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] rounded px-2 py-1"
            >
              Ubicación
            </a>
          </nav>

          {/* Primary CTA Button (Saddle Leather / Cognac) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+523311428657"
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#f4f3ee] hover:border-[#7ba28a] px-3.5 py-2.5 rounded-lg border border-[#2b4f42] bg-[#1b342b] transition-colors"
            >
              <Phone
                className="w-3.5 h-3.5 text-[#7ba28a]"
                aria-hidden="true"
              />
              <span>(33) 1142 8657</span>
            </a>
            <a
              href="#valoracion"
              onClick={handleScrollToForm}
              className="inline-flex items-center gap-2 bg-[#c27b38] hover:bg-[#a86529] text-[#f4f3ee] font-bold text-sm tracking-wide px-5 py-2.5 rounded-lg shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#13261f]"
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              Agendar Valoración
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#f4f3ee] bg-[#1b342b] border border-[#2b4f42] hover:border-[#7ba28a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38]"
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen
                  ? "Cerrar menú de navegación"
                  : "Abrir menú de navegación"
              }
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          className="lg:hidden bg-[#1b342b] border-b border-[#2b4f42] px-4 pt-3 pb-6 space-y-2"
          aria-label="Menú móvil"
        >
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-base font-semibold text-[#f4f3ee] hover:bg-[#13261f]"
          >
            Cursos y Programas
          </a>
          <a
            href="#instalaciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-base font-semibold text-[#f4f3ee] hover:bg-[#13261f]"
          >
            Instalaciones y Zona Peques (&lt;8 kg)
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-base font-semibold text-[#f4f3ee] hover:bg-[#13261f]"
          >
            Metodología en Positivo
          </a>
          <a
            href="#requisitos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-base font-semibold text-[#f4f3ee] hover:bg-[#13261f]"
          >
            Requisitos de Ingreso
          </a>
          <a
            href="#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-base font-semibold text-[#f4f3ee] hover:bg-[#13261f]"
          >
            Casos de Éxito
          </a>
          <a
            href="#ubicacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-base font-semibold text-[#f4f3ee] hover:bg-[#13261f]"
          >
            Ubicación y Mapa
          </a>
          <div className="pt-3 border-t border-[#2b4f42]">
            <a
              href="#valoracion"
              onClick={handleScrollToForm}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#c27b38] hover:bg-[#a86529] text-[#f4f3ee] font-bold text-base px-5 py-3.5 rounded-lg transition-colors"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Agendar Valoración
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
