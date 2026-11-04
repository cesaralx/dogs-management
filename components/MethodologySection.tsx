import React from "react";
import {
  HeartHandshake,
  Brain,
  Users,
  Shield,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

const PILLARS = [
  {
    title: "Refuerzo Positivo y Comunicación Clara",
    description:
      "Educamos desde la comprensión y la motivación, nunca desde el temor. Enseñamos a tu perro qué se espera de él dentro y fuera de casa mediante premios, juego y estructura.",
    icon: HeartHandshake,
  },
  {
    title: "Planes Personalizados por Temperamento y Talla",
    description:
      "Cada ejemplar es único. Adaptamos el ritmo de aprendizaje tanto para cachorros y razas pequeñas (< 8 kg) como para perros de trabajo o razas grandes con alta energía.",
    icon: Brain,
  },
  {
    title: "Asesoría y Transferencia para toda la Familia",
    description:
      "Al concluir o avanzar en cada curso, entrenamos contigo para que manejes los comandos de caminar junto, sentado automático, quieto echado y llamado con total seguridad.",
    icon: Users,
  },
];

const STEPS = [
  {
    step: "01",
    title: "Agenda una Valoración Inicial",
    description:
      "Evaluamos el temperamento, edad y hábitos actuales de tu perro para recomendarte el curso o modalidad ideal.",
  },
  {
    step: "02",
    title: "Programa Estructurado a Medida",
    description:
      "Definimos objetivos claros: control de esfínteres en jardín/tapete, obediencia en paseo o corrección de malas conductas.",
  },
  {
    step: "03",
    title: "Entrenamiento Diario y Socialización",
    description:
      "Práctica constante en nuestras áreas verdes o en tu entorno cotidiano para consolidar cada hábito con distracciones reales.",
  },
  {
    step: "04",
    title: "Entrega y Seguimiento Familiar",
    description:
      "Te entregamos las herramientas prácticas para mantener la obediencia y la armonía en casa a largo plazo.",
  },
];

export function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="py-20 lg:py-28 bg-[#13261f] border-b border-[#2b4f42]"
      aria-labelledby="methodology-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7ba28a] bg-[#1b342b] border border-[#2b4f42] px-4 py-1.5 rounded-lg mb-4">
              <Shield
                className="w-3.5 h-3.5 text-[#7ba28a]"
                aria-hidden="true"
              />
              Nuestra Metodología y Trayectoria K9
            </span>
            <h2
              id="methodology-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f3ee] tracking-wide"
            >
              Disciplina ética, respeto y{" "}
              <span className="font-serif italic font-normal text-[#c27b38]">
                resultados comprobables
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#9eaca2] leading-relaxed">
              Como Centro Integral Canino, formamos perros equilibrados,
              obedientes y seguros, fortaleciendo el vínculo de respeto y
              confianza con sus dueños.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#1b342b] rounded-2xl p-8 border border-[#2b4f42]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-wide text-[#f4f3ee] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#9eaca2] text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ethical Commitment Banner */}
        <div className="bg-[#1b342b] text-[#f4f3ee] rounded-2xl p-8 sm:p-12 mb-16 border border-[#2b4f42]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-[#7ba28a] text-xs font-bold uppercase tracking-[0.18em]">
                <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                Filosofía de Bienestar Integral K9
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-wide">
                Adiestramiento ético en positivo, sin maltrato ni miedo
              </h3>
              <p className="text-[#9eaca2] text-sm sm:text-base leading-relaxed">
                Guiamos a tu mascota mediante motivación, constancia y rutinas
                claras para que disfrute aprender a caminar junto, acudir al
                llamado y portarse de forma ejemplar dentro de casa.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
              <div className="bg-[#13261f] border border-[#2b4f42] p-4 rounded-xl flex items-start gap-2.5">
                <CheckCircle2
                  className="w-5 h-5 text-[#7ba28a] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>Sentado automático al detener la marcha</span>
              </div>
              <div className="bg-[#13261f] border border-[#2b4f42] p-4 rounded-xl flex items-start gap-2.5">
                <CheckCircle2
                  className="w-5 h-5 text-[#7ba28a] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>Hacer sus necesidades en jardín o tapete</span>
              </div>
              <div className="bg-[#13261f] border border-[#2b4f42] p-4 rounded-xl flex items-start gap-2.5">
                <CheckCircle2
                  className="w-5 h-5 text-[#7ba28a] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>Caminar junto con correa sin jalar</span>
              </div>
              <div className="bg-[#13261f] border border-[#2b4f42] p-4 rounded-xl flex items-start gap-2.5">
                <CheckCircle2
                  className="w-5 h-5 text-[#7ba28a] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>Echado, quieto y acudir al llamado</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div>
          <h3 className="text-center text-xl sm:text-2xl font-bold tracking-wide text-[#f4f3ee] mb-10">
            ¿Cómo iniciamos la transformación de tu perrito?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="relative bg-[#1b342b] rounded-2xl p-7 border border-[#2b4f42]"
              >
                <span className="text-3xl font-serif italic font-bold text-[#c27b38] block mb-2">
                  {item.step}
                </span>
                <h4 className="text-base font-bold tracking-wide text-[#f4f3ee] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#9eaca2] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
