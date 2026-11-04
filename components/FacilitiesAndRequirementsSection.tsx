"use client";

import React from "react";
import {
  Trees,
  Home,
  Stethoscope,
  Utensils,
  BedDouble,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Dog,
} from "lucide-react";

interface FacilitiesAndRequirementsProps {
  onRequestInfo: () => void;
}

const REQUIREMENTS = [
  {
    category: "Salud y Vacunación",
    icon: Stethoscope,
    items: [
      "Carnet de vacunación al corriente (Séxtuple/Múltiple, Rabia y Bordetella vigente).",
      "Desparasitación interna vigente comprobable.",
      "Estar 100% libre de parásitos externos (pulgas y garrapatas) y contar con pipeta o tableta protectora activa.",
    ],
  },
  {
    category: "Alimentación Habitual",
    icon: Utensils,
    items: [
      "Traer el alimento habitual de tu mascota en cantidad suficiente para los días de estancia o curso.",
      "Mantener su dieta habitual evita desajustes gastrointestinales y asegura su óptimo nivel de energía.",
      "Indicaciones claras de porciones y horarios si requiere algún cuidado nutricional específico.",
    ],
  },
  {
    category: "Higiene y Pertenencias",
    icon: BedDouble,
    items: [
      "Ingresar limpios (recién bañados y cepillados al momento de su recepción).",
      "Traer su cama o el lugar habitual donde duerme para brindarle seguridad olfativa y confort.",
      "Collar firme y correa de paseo en buen estado (no retráctil).",
    ],
  },
];

export function FacilitiesAndRequirementsSection({
  onRequestInfo,
}: FacilitiesAndRequirementsProps) {
  return (
    <section
      id="instalaciones"
      className="py-20 lg:py-28 bg-[#13261f] border-b border-[#2b4f42]"
      aria-labelledby="facilities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================================================================ */}
        {/* PART 1: INSTALACIONES & ZONA PEQUES (< 8 KG) */}
        {/* ================================================================ */}
        <div>
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7ba28a] bg-[#1b342b] border border-[#2b4f42] px-4 py-1.5 rounded-lg mb-4">
              <Trees className="w-3.5 h-3.5 text-[#7ba28a]" aria-hidden="true" />
              Nuestras Instalaciones y Estancia Personalizada
            </span>
            <h2
              id="facilities-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f3ee] tracking-wide"
            >
              Un santuario campestre seguro y{" "}
              <span className="font-serif italic font-normal text-[#c27b38]">
                hogar para cada talla
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9eaca2] leading-relaxed">
              Contamos con amplias áreas verdes diseñadas para el bienestar
              físico y mental de los ejemplares, separando cuidadosamente los
              espacios de acuerdo con el tamaño, edad y temperamento de cada
              perrito.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Card 1: Campus Campestre (Razas Medianas y Grandes) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#1b342b] border border-[#2b4f42] p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center">
                    <Trees className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] bg-[#13261f] text-[#7ba28a] border border-[#2b4f42] px-3.5 py-1 rounded-md">
                    Campus y Jardines Abiertos
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#f4f3ee] tracking-wide mb-3">
                  Amplias Áreas Verdes de Recreación y Entrenamiento
                </h3>
                <p className="text-[#9eaca2] text-sm sm:text-base leading-relaxed mb-6">
                  Pistas de adiestramiento empastadas, zonas de sombra natural y
                  áreas de socialización controlada donde los perros disfrutan de
                  paseos diarios, ejercicio estructurado y descanso tranquilo.
                </p>
                <ul className="space-y-3 text-sm text-[#f4f3ee]/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#7ba28a] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Espacios abiertos ideales para practicar el llamado,
                      caminata junto y control a distancia.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#7ba28a] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Entorno limpio, seguro y monitoreado permanentemente por
                      entrenadores profesionales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#7ba28a] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Enseñanza de hábitos higiénicos en áreas designadas de
                      jardín o tapete sintético.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Zona Peques (< 8 kg) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#1b342b] border border-[#2b4f42] p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center">
                    <Home className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] bg-[#13261f] text-[#7ba28a] border border-[#2b4f42] px-3.5 py-1 rounded-md">
                    Exclusivo Menores de 8 kg
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#f4f3ee] tracking-wide mb-3">
                  Servicio Especializado &ldquo;Zona Peques&rdquo; (&lt; 8 kg)
                </h3>
                <p className="text-[#9eaca2] text-sm sm:text-base leading-relaxed mb-6">
                  Las razas pequeñas requieren un cuidado delicado y cercano. En
                  nuestra modalidad{" "}
                  <strong className="text-[#f4f3ee]">Peques</strong>, los
                  perritos menores de 8 kg son{" "}
                  <strong className="text-[#f4f3ee]">
                    hospedados directamente dentro de casa
                  </strong>{" "}
                  en un ambiente 100% familiar, cálido y libre de jaulas
                  exteriores.
                </p>
                <ul className="space-y-3 text-sm text-[#f4f3ee]/90">
                  <li className="flex items-start gap-2.5">
                    <Dog
                      className="w-4 h-4 text-[#7ba28a] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Convivencia exclusiva con otros perritos de talla pequeña
                      (&lt; 8 kg) bajo supervisión continua.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Dog
                      className="w-4 h-4 text-[#7ba28a] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Paseos diarios recreativos y acceso a un amplio jardín
                      seguro para tomar el sol y jugar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Dog
                      className="w-4 h-4 text-[#7ba28a] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Refuerzo de modales dentro del hogar y control de
                      esfínteres en tapete sintético o jardín.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#2b4f42] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-[#7ba28a] font-semibold tracking-wide">
                  Cupo limitado para garantizar atención personalizada
                </span>
                <button
                  type="button"
                  onClick={onRequestInfo}
                  className="inline-flex items-center justify-center gap-2 bg-[#c27b38] hover:bg-[#a86529] text-[#f4f3ee] font-bold text-xs uppercase tracking-[0.14em] px-5 py-3.5 rounded-xl transition-colors shadow-md"
                >
                  <span>Reservar Lugar</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* PART 2: REQUISITOS DE INGRESO (SALUD, ALIMENTO E HIGIENE) */}
        {/* ================================================================ */}
        <div id="requisitos" className="scroll-mt-28">
          <div className="bg-[#1b342b] rounded-2xl border border-[#2b4f42] p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7ba28a] bg-[#13261f] border border-[#2b4f42] px-3.5 py-1.5 rounded-lg mb-3">
                  <ShieldCheck
                    className="w-3.5 h-3.5 text-[#7ba28a]"
                    aria-hidden="true"
                  />
                  Protocolo de Bioseguridad y Bienestar K9
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f4f3ee] tracking-wide">
                  Requisitos de Ingreso para Cursos y Hotel
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#9eaca2] max-w-md">
                Por la salud, higiene y seguridad de todos nuestros huéspedes y
                alumnos, solicitamos cumplir con los siguientes puntos al
                momento de su ingreso:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REQUIREMENTS.map((req) => {
                const IconComponent = req.icon;
                return (
                  <div
                    key={req.category}
                    className="bg-[#13261f] rounded-xl p-7 border border-[#2b4f42]"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#1b342b] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center mb-5">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h4 className="text-lg font-bold tracking-wide text-[#f4f3ee] mb-4">
                      {req.category}
                    </h4>
                    <ul className="space-y-3 text-sm text-[#9eaca2]">
                      {req.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c27b38] shrink-0 mt-2" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
