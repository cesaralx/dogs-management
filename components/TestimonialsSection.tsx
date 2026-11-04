import React from "react";
import { Star, Quote, CheckCircle, Shield } from "lucide-react";

interface Testimonial {
  id: string;
  ownerName: string;
  location: string;
  dogName: string;
  dogBreed: string;
  program: string;
  outcomeSummary: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonio-1",
    ownerName: "Mariana Garza y Familia",
    location: "Guadalajara / Zapopan",
    dogName: "Balam",
    dogBreed: "Pastor Belga Malinois (1 año 4 meses)",
    program: "Curso de Obediencia (3 Semanas)",
    outcomeSummary:
      "Aprendió a caminar junto sin jalar la correa, sentarse automáticamente al detenernos y quedarse quieto echado.",
    quote:
      "Sacar a pasear a Balam era complicadísimo por su fuerza. Después de su curso de obediencia de 3 semanas en el Centro Integral Canino, el cambio fue total: camina junto a nosotros, acude al llamado a la primera y convive con otros perros en completa calma.",
  },
  {
    id: "testimonio-2",
    ownerName: "Carlos Eduardo Ramírez",
    location: "Ciudad de México",
    dogName: "Moka",
    dogBreed: "Golden Retriever (4 meses)",
    program: "Educación para Cachorros",
    outcomeSummary:
      "Aprendió a hacer del baño en su jardín y tapete sintético, dejando por completo de morder muebles y manos.",
    quote:
      "Moka es nuestra primera cachorrita y hacía del baño por toda la casa además de morder todo. Con el curso de hábitos en el hogar aprendió a ir siempre a su área de jardín, dejó los mordiscos y ahora sabemos exactamente cómo guiarla en familia.",
  },
  {
    id: "testimonio-3",
    ownerName: "Sofía Hernández",
    location: "Providencia, GDL",
    dogName: "Chloé",
    dogBreed: "Pomerania (4.2 kg · 2 años)",
    program: "Hotel y Educación «Zona Peques»",
    outcomeSummary:
      "Se hospedó dentro de casa sin estrés, socializó con otros perritos pequeños y corrigió el ladrido excesivo.",
    quote:
      "Me daba mucho pendiente dejar a Chloé en una pensión tradicional por ser tan pequeñita. La Zona Peques para menores de 8 kg nos encantó porque duerme dentro de casa en un ambiente súper familiar, pasea en jardines hermosos y regresó feliz y educada.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="py-20 lg:py-28 bg-[#13261f] border-b border-[#2b4f42]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7ba28a] bg-[#1b342b] border border-[#2b4f42] px-4 py-1.5 rounded-lg mb-4">
            <Shield className="w-3.5 h-3.5 text-[#7ba28a]" aria-hidden="true" />
            Testimonios y Casos de Éxito
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f3ee] tracking-wide"
          >
            Familias que confían en nuestro{" "}
            <span className="font-serif italic font-normal text-[#c27b38]">
              Centro Integral Canino
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9eaca2] leading-relaxed">
            Conoce la experiencia de dueños que transformaron la educación y
            convivencia con sus compañeros de todas las razas y tallas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-[#1b342b] rounded-2xl p-8 border border-[#2b4f42] flex flex-col justify-between"
            >
              <div>
                {/* Rating & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="flex items-center gap-1 text-[#c27b38]"
                    aria-label="Calificación de 5 de 5 estrellas"
                  >
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-[#c27b38] text-[#c27b38]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote
                    className="w-8 h-8 text-[#2b4f42]"
                    aria-hidden="true"
                  />
                </div>

                {/* Outcome Summary Highlight */}
                <div className="bg-[#13261f] border border-[#2b4f42] rounded-xl p-4 mb-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7ba28a] flex items-center gap-1.5 mb-1">
                    <CheckCircle
                      className="w-3.5 h-3.5 text-[#7ba28a] shrink-0"
                      aria-hidden="true"
                    />
                    Resultado Logrado
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#f4f3ee] leading-snug">
                    {item.outcomeSummary}
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="text-[#9eaca2] text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Dog Info */}
              <div className="mt-6 pt-5 border-t border-[#2b4f42]">
                <p className="font-bold text-[#f4f3ee] text-base tracking-wide">
                  {item.ownerName}
                </p>
                <p className="text-xs text-[#9eaca2] mt-0.5">{item.location}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold bg-[#13261f] border border-[#2b4f42] text-[#f4f3ee] px-2.5 py-1 rounded-md">
                    {item.dogName} · {item.dogBreed}
                  </span>
                  <span className="text-xs font-medium bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] px-2.5 py-1 rounded-md">
                    {item.program}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
