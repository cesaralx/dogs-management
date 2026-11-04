"use client";

import React from "react";
import {
  Award,
  Shield,
  HeartHandshake,
  ArrowRight,
  Trees,
  CheckCircle2,
  MapPin,
} from "lucide-react";

interface HeroSectionProps {
  onAgendarClick: () => void;
}

export function HeroSection({ onAgendarClick }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#13261f] text-[#f4f3ee] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#2b4f42]"
      aria-labelledby="hero-heading"
    >
      {/* Subtle organic outdoor radial glow & vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 78% 42%, rgba(123, 162, 138, 0.16) 0%, rgba(27, 52, 43, 0.35) 38%, rgba(19, 38, 31, 0.98) 78%), radial-gradient(circle at 18% 20%, rgba(194, 123, 56, 0.08) 0%, transparent 45%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Uncluttered Headline, Value Proposition & Actions */}
          <div className="lg:col-span-6 space-y-7">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1b342b]/90 border border-[#2b4f42] text-[#f4f3ee] text-xs font-semibold tracking-wider uppercase shadow-sm">
              <Shield
                className="w-4 h-4 text-[#c27b38] shrink-0"
                aria-hidden="true"
              />
              <span>Campus &amp; Santuario Canino en Jalisco</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[0.01em] leading-[1.08] text-[#f4f3ee]"
            >
              Disciplina noble y educación canina para la armonía{" "}
              <span className="font-serif italic font-normal text-[#c27b38]">
                de tu hogar
              </span>
            </h1>

            {/* Refined Subtext: Security, Freedom (Sin Jaulas), Peace of Mind & Discipline */}
            <p className="text-lg sm:text-xl text-[#9eaca2] leading-relaxed max-w-xl">
              Más que una escuela, somos un santuario campestre{" "}
              <strong className="text-[#f4f3ee] font-semibold">
                100% libre de jaulas
              </strong>
              . Formamos perros obedientes, seguros y equilibrados mediante
              disciplina positiva, brindándote total tranquilidad dentro de casa
              y en cada paseo.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#valoracion"
                onClick={(e) => {
                  e.preventDefault();
                  onAgendarClick();
                }}
                className="inline-flex items-center justify-center gap-3 bg-[#c27b38] hover:bg-[#a86529] text-[#f4f3ee] font-bold text-base sm:text-lg tracking-wide px-8 py-4 rounded-xl shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] focus-visible:ring-offset-2 focus-visible:ring-offset-[#13261f]"
              >
                <span>Agendar Valoración</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#instalaciones"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1b342b]/85 hover:bg-[#1b342b] hover:border-[#7ba28a] text-[#f4f3ee] font-semibold text-base tracking-wide px-7 py-4 rounded-xl border border-[#2b4f42] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7ba28a]"
              >
                <Trees
                  className="w-4 h-4 text-[#7ba28a]"
                  aria-hidden="true"
                />
                <span>Ver Instalaciones y Campus</span>
              </a>
            </div>

            {/* Subtle Location / Modality Caption */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm text-[#9eaca2]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin
                  className="w-4 h-4 text-[#7ba28a]"
                  aria-hidden="true"
                />
                Carretera Santa Cruz de las Flores – Tala Km 20
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2
                  className="w-4 h-4 text-[#c27b38]"
                  aria-hidden="true"
                />
                Zona exclusiva «Peques» (&lt; 8 kg) dentro de casa
              </span>
            </div>
          </div>

          {/* Right Column: Prominent Visual Showcase Container */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft outer ambient halo behind image */}
              <div
                className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-tr from-[#c27b38]/20 via-[#7ba28a]/15 to-transparent blur-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Masked / Rounded Image Frame */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#2b4f42] bg-[#1b342b] shadow-2xl aspect-[4/4.3] sm:aspect-[4/3.8] lg:aspect-[4/4.2]">
                {/* High-Resolution Canine in Outdoor Green Field Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=1400&q=85"
                  alt="Ejemplar Pastor Alemán entrenado en las áreas verdes del campus K9 Armonía"
                  className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle organic bottom vignette for badge legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#13261f]/90 via-[#13261f]/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Top-Right Floating Frosted Trust Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#13261f]/80 backdrop-blur-md border border-[#7ba28a]/40 shadow-lg">
                    <Trees
                      className="w-4 h-4 text-[#7ba28a] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-bold tracking-wide text-[#f4f3ee]">
                      Instalaciones Campestres y Libres de Jaulas
                    </span>
                  </div>
                </div>

                {/* Bottom Floating Frosted Crest Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#13261f]/85 backdrop-blur-md border border-[#7ba28a]/35 shadow-xl">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#c27b38] text-[#f4f3ee] flex items-center justify-center shrink-0 shadow-md">
                        <Shield className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-[#7ba28a] font-bold">
                          Santuario &amp; Academia K9
                        </p>
                        <p className="text-sm sm:text-base font-bold text-[#f4f3ee] leading-snug">
                          Certificación K9 &amp; Trato 100% Positivo
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex flex-col items-end text-right shrink-0 border-l border-[#2b4f42] pl-4">
                      <span className="text-lg font-extrabold text-[#f4f3ee] leading-none">
                        +500
                      </span>
                      <span className="text-[11px] text-[#9eaca2] mt-1">
                        Ejemplares graduados
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* HORIZONTAL PROOF / STAT BAR (BOTTOM OF HERO) */}
        {/* ================================================================ */}
        <div className="mt-14 lg:mt-20 pt-10 border-t border-[#2b4f42]/90">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[#2b4f42]">
            {/* Proof 1: Instalación Segura */}
            <div className="flex items-start gap-4 md:pr-8">
              <div className="w-11 h-11 rounded-xl bg-[#1b342b] border border-[#2b4f42] flex items-center justify-center shrink-0 mt-0.5">
                <Shield
                  className="w-5 h-5 text-[#c27b38]"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2 className="text-base font-bold tracking-wide text-[#f4f3ee]">
                  Instalación Segura
                </h2>
                <p className="text-sm text-[#9eaca2] mt-1 leading-relaxed">
                  Áreas verdes privadas y monitoreadas las 24 horas del día.
                </p>
              </div>
            </div>

            {/* Proof 2: Metodología Positiva */}
            <div className="flex items-start gap-4 md:px-8">
              <div className="w-11 h-11 rounded-xl bg-[#1b342b] border border-[#2b4f42] flex items-center justify-center shrink-0 mt-0.5">
                <HeartHandshake
                  className="w-5 h-5 text-[#7ba28a]"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2 className="text-base font-bold tracking-wide text-[#f4f3ee]">
                  Metodología Positiva
                </h2>
                <p className="text-sm text-[#9eaca2] mt-1 leading-relaxed">
                  Sin maltrato, sin collares de castigo y con respeto emocional.
                </p>
              </div>
            </div>

            {/* Proof 3: Entrenadores Certificados */}
            <div className="flex items-start gap-4 md:pl-8">
              <div className="w-11 h-11 rounded-xl bg-[#1b342b] border border-[#2b4f42] flex items-center justify-center shrink-0 mt-0.5">
                <Award
                  className="w-5 h-5 text-[#c27b38]"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2 className="text-base font-bold tracking-wide text-[#f4f3ee]">
                  Entrenadores Certificados
                </h2>
                <p className="text-sm text-[#9eaca2] mt-1 leading-relaxed">
                  +20 años formando guardianes y compañeros equilibrados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
