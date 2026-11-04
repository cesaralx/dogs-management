"use client";

import React from "react";
import {
  Baby,
  HeartPulse,
  Compass,
  Home,
  Check,
  ArrowRight,
  Clock,
  Shield,
  Trees,
} from "lucide-react";
import type { PRIMARY_GOALS } from "@/lib/schemas/lead";

type PrimaryGoalType = (typeof PRIMARY_GOALS)[number];

interface ServiceProgram {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  duration: string;
  modality: string;
  description: string;
  highlights: string[];
  defaultGoal: PrimaryGoalType;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}

const PROGRAMS: ServiceProgram[] = [
  {
    id: "educacion-cachorros",
    title: "Educación para Cachorros y Hábitos en Casa",
    subtitle: "Ideal desde los 2 hasta los 6 meses de edad",
    badge: "Etapa Temprana",
    duration: "Programa de 3 a 4 semanas",
    modality: "En Campus o a Domicilio",
    description:
      "Enseñamos a tu cachorro a convivir armoniosamente dentro del hogar desde el primer día, previniendo conductas destructivas y estableciendo rutinas limpias y ordenadas.",
    highlights: [
      "Control de esfínteres: hacer sus necesidades fuera de casa, en jardín o en tapete sintético",
      "Inhibición de mordida (control de mordiscos en manos, ropa y muebles)",
      "Comportamiento adecuado dentro del hogar y respeto de espacios familiares",
      "Socialización segura con personas, niños, sonidos urbanos y otros perros",
    ],
    defaultGoal: "Cachorro",
    icon: Baby,
  },
  {
    id: "obediencia-basica-avanzada",
    title: "Obediencia Básica y Control de Paseo",
    subtitle: "Curso integral de obediencia funcional y convivencia",
    badge: "Curso Insignia · 3 Semanas",
    duration: "Duración habitual: 3 semanas",
    modality: "Modalidad Internado o Semanal",
    description:
      "Nuestro curso estrella diseñado para que disfrutes paseos seguros y sin tirones, logrando una comunicación clara y confiable con tu perro en todo momento.",
    highlights: [
      "Caminar junto con la correa sin jalar y sentarse automáticamente al detenerse",
      "Echarse a la orden y permanecer quieto echado aun con distracciones",
      "Acudir al llamado a la primera con entusiasmo y seguridad",
      "Corrección de malas conductas cotidianas (saltar sobre visitas o cruzar puertas sin permiso)",
    ],
    defaultGoal: "Jala de la correa",
    icon: Compass,
    featured: true,
  },
  {
    id: "modificacion-conducta",
    title: "Modificación de Conducta y Rehabilitación",
    subtitle: "Diagnóstico etológico y manejo emocional",
    badge: "Especializado K9",
    duration: "Plan personalizado tras valoración",
    modality: "Atención 1 a 1 con Especialista",
    description:
      "Atendemos problemas de comportamiento complejos mediante protocolos estructurados de desensibilización, equilibrio emocional y liderazgo tranquilo para toda la familia.",
    highlights: [
      "Reactividad con correa frente a otros perros, corredores o vehículos",
      "Ansiedad por separación (llanto excesivo, ladridos o destrozos al quedarse solo)",
      "Superación de miedos, inseguridad y sensibilidad a ruidos fuertes",
      "Manejo profesional de agresividad, territorialidad o protección de recursos",
    ],
    defaultGoal: "Reactividad/Miedos",
    icon: HeartPulse,
  },
  {
    id: "guarderia-con-entrenamiento",
    title: "Guardería con Entrenamiento y Hotel «Peques»",
    subtitle: "Board & Train en Áreas Verdes + Exclusivo Tallas < 8 kg",
    badge: "Estancia K9",
    duration: "Por día, semana o curso completo",
    modality: "Instalaciones Campestres y Casa Peques",
    description:
      "Hospedaje educativo con amplios jardines para razas medianas y grandes, además de nuestro servicio exclusivo «Peques» para razas pequeñas menores de 8 kg hospedados dentro de casa.",
    highlights: [
      "Exclusivo «Zona Peques» (< 8 kg): hospedados directamente dentro de casa en ambiente familiar",
      "Paseos diarios guiados, recreación en amplias áreas verdes y socialización supervisada",
      "Refuerzo diario de comandos de obediencia, hábitos de higiene y activación mental",
      "Supervisión 24/7 y entrega con sesión práctica de transferencia para los dueños",
    ],
    defaultGoal: "Obediencia general",
    icon: Home,
  },
];

interface ServicesSectionProps {
  onSelectProgram: (goal: PrimaryGoalType, programTitle: string) => void;
}

export function ServicesSection({ onSelectProgram }: ServicesSectionProps) {
  return (
    <section
      id="servicios"
      className="py-20 lg:py-28 bg-[#13261f] border-b border-[#2b4f42]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7ba28a] bg-[#1b342b] border border-[#2b4f42] px-4 py-1.5 rounded-lg mb-4">
            <Shield className="w-3.5 h-3.5 text-[#7ba28a]" aria-hidden="true" />
            Programas de Educación, Obediencia y Estancia
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f3ee] tracking-wide"
          >
            Cursos diseñados para una{" "}
            <span className="font-serif italic font-normal text-[#c27b38]">
              convivencia ejemplar
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9eaca2] leading-relaxed">
            Desde el control de esfínteres en jardín o tapete sintético hasta
            cursos intensivos de obediencia de 3 semanas y hospedaje exclusivo
            por talla.
          </p>
        </div>

        {/* Relocated Overview Strip: ¿Qué aprenderá tu compañero? */}
        <div className="mb-14 rounded-2xl bg-[#1b342b] border border-[#2b4f42] p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#2b4f42]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#7ba28a] font-bold block">
                Objetivos Clave de Aprendizaje
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#f4f3ee] mt-1 tracking-wide">
                ¿Qué aprenderá tu compañero en nuestra academia?
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7ba28a] bg-[#13261f] border border-[#2b4f42] px-3.5 py-1.5 rounded-lg self-start sm:self-auto">
              <Trees className="w-3.5 h-3.5 text-[#7ba28a]" aria-hidden="true" />
              Resultados prácticos para la vida diaria
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#13261f] rounded-xl p-5 border border-[#2b4f42]">
              <p className="text-sm font-bold tracking-wide text-[#f4f3ee] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#7ba28a] shrink-0" />
                Hábitos Higiénicos y Convivencia en Casa
              </p>
              <p className="text-xs sm:text-sm text-[#9eaca2] mt-2 leading-relaxed">
                Aprende a hacer sus necesidades fuera de casa (en jardín o
                tapete sintético), inhibición de mordiscos y respeto por los
                espacios del hogar.
              </p>
            </div>

            <div className="bg-[#13261f] rounded-xl p-5 border border-[#2b4f42]">
              <p className="text-sm font-bold tracking-wide text-[#f4f3ee] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#c27b38] shrink-0" />
                Obediencia Funcional en Paseo (3 Semanas)
              </p>
              <p className="text-xs sm:text-sm text-[#9eaca2] mt-2 leading-relaxed">
                Caminar junto con correa sin jalar, sentarse automáticamente al
                detenerse, echarse a la orden, permanecer quieto echado y acudir
                al llamado.
              </p>
            </div>

            <div className="bg-[#13261f] rounded-xl p-5 border border-[#2b4f42]">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold tracking-wide text-[#f4f3ee] flex items-center gap-2">
                  <Home
                    className="w-4 h-4 text-[#7ba28a] shrink-0"
                    aria-hidden="true"
                  />
                  Zona &ldquo;Peques&rdquo; (&lt; 8 kg)
                </p>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#1b342b] text-[#7ba28a] border border-[#2b4f42] px-2 py-0.5 rounded">
                  En Casa
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#9eaca2] mt-2 leading-relaxed">
                Hospedaje y educación personalizada{" "}
                <strong className="text-[#f4f3ee]">dentro de casa</strong> en
                ambiente familiar, con paseos diarios y jardines exclusivos para
                tallas pequeñas.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((program) => {
            const IconComponent = program.icon;
            return (
              <article
                key={program.id}
                className={`flex flex-col justify-between rounded-2xl p-7 sm:p-9 transition-colors border ${
                  program.featured
                    ? "bg-[#1b342b] border-[#c27b38]/60 shadow-2xl"
                    : "bg-[#1b342b] border-[#2b4f42] hover:border-[#7ba28a]"
                }`}
              >
                <div>
                  {/* Card Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center">
                      <IconComponent className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.14em] px-3.5 py-1 rounded-md border ${
                          program.featured
                            ? "bg-[#13261f] text-[#c27b38] border-[#c27b38]/50"
                            : "bg-[#13261f] text-[#7ba28a] border-[#2b4f42]"
                        }`}
                      >
                        {program.badge}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9eaca2]">
                        <Clock
                          className="w-3.5 h-3.5 text-[#7ba28a]"
                          aria-hidden="true"
                        />
                        {program.duration} · {program.modality}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold tracking-wide leading-snug text-[#f4f3ee]">
                    {program.title}
                  </h3>
                  <p className="text-sm font-semibold mt-1.5 text-[#7ba28a] tracking-wide">
                    {program.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#9eaca2]">
                    {program.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="mt-6 space-y-3 border-t border-[#2b4f42] pt-6">
                    {program.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className="w-5 h-5 rounded-md bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                        <span className="text-[#f4f3ee]/90 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Standardized Saddle Leather CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectProgram(program.defaultGoal, program.title)
                    }
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#c27b38] hover:bg-[#a86529] text-[#f4f3ee] font-bold text-sm sm:text-base tracking-wide px-6 py-4 rounded-xl transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38]"
                  >
                    <span>Solicitar Información</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
