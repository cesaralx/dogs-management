"use client";

import React, { useState } from "react";
import {
  Dog,
  Clock,
  MapPin,
  Phone,
  Mail,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer
      className="bg-[#1b342b] text-[#9eaca2] border-t border-[#2b4f42]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Pie de página e información de contacto
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1: Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#13261f] border border-[#2b4f42] flex items-center justify-center">
                <Dog className="w-6 h-6 text-[#c27b38]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#f4f3ee] block leading-none tracking-wide">
                  K9{" "}
                  <span className="text-[#c27b38] font-serif italic font-normal">
                    Armonía
                  </span>
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#7ba28a] font-semibold block mt-1">
                  Centro Integral Canino
                </span>
              </div>
            </div>
            <p className="text-sm text-[#9eaca2] leading-relaxed">
              Especialistas en cursos de obediencia básica y avanzada,
              modificación de conducta, educación para cachorros y estancia
              campestre con Zona Peques (&lt; 8 kg).
            </p>
            <div className="pt-2 space-y-2 text-sm text-[#f4f3ee]">
              <p className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 text-[#7ba28a] shrink-0"
                  aria-hidden="true"
                />
                <span>Tel / WhatsApp: (+52) 33 1142 8657</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4 text-[#7ba28a] shrink-0"
                  aria-hidden="true"
                />
                <span>contacto@k9armonia.mx</span>
              </p>
            </div>
          </div>

          {/* Columna 2: Horarios de Atención */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#f4f3ee] flex items-center gap-2">
              <Clock
                className="w-4 h-4 text-[#7ba28a]"
                aria-hidden="true"
              />
              Horarios de Atención
            </h3>
            <ul className="space-y-2.5 text-sm text-[#9eaca2]">
              <li className="flex justify-between border-b border-[#2b4f42] pb-2">
                <span>Lunes a Viernes:</span>
                <span className="text-[#f4f3ee] font-medium">
                  8:30 AM – 7:00 PM
                </span>
              </li>
              <li className="flex justify-between border-b border-[#2b4f42] pb-2">
                <span>Sábados:</span>
                <span className="text-[#f4f3ee] font-medium">
                  9:00 AM – 4:00 PM
                </span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Domingos (Hotel y Peques):</span>
                <span className="text-[#7ba28a] font-semibold">
                  Recepción con cita previa
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Zona de Cobertura / Ubicación */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#f4f3ee] flex items-center gap-2">
              <MapPin
                className="w-4 h-4 text-[#7ba28a]"
                aria-hidden="true"
              />
              Ubicación y Zona de Cobertura
            </h3>
            <p className="text-sm text-[#9eaca2] leading-relaxed">
              <strong className="text-[#f4f3ee] block mb-1">
                Campus e Instalaciones Campestres:
              </strong>
              Carretera Santa Cruz de las Flores – Tala Km 20, amplias áreas
              verdes y Casa Exclusiva &ldquo;Zona Peques&rdquo;.
            </p>
            <p className="text-sm text-[#9eaca2] leading-relaxed">
              <strong className="text-[#f4f3ee] block mb-1">
                Valoraciones y Servicio a Domicilio:
              </strong>
              Zona Metropolitana de Guadalajara (Zapopan, Providencia, Puerta de
              Hierro, Sur) y Ciudad de México.
            </p>
          </div>

          {/* Columna 4: Redes Sociales y Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#f4f3ee]">
              Síguenos en Redes Sociales
            </h3>
            <p className="text-sm text-[#9eaca2]">
              Videos diarios de nuestros alumnos en curso de obediencia, paseos
              en jardín y huéspedes de Zona Peques.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de K9 Armonía"
                title="Instagram"
                className="w-11 h-11 rounded-xl bg-[#13261f] hover:bg-[#c27b38] hover:border-[#c27b38] border border-[#2b4f42] flex items-center justify-center text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38]"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Facebook de K9 Armonía"
                title="Facebook"
                className="w-11 h-11 rounded-xl bg-[#13261f] hover:bg-[#c27b38] hover:border-[#c27b38] border border-[#2b4f42] flex items-center justify-center text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38]"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar TikTok de K9 Armonía"
                title="TikTok"
                className="w-11 h-11 rounded-xl bg-[#13261f] hover:bg-[#c27b38] hover:border-[#c27b38] border border-[#2b4f42] flex items-center justify-center text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38]"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar YouTube de K9 Armonía"
                title="YouTube"
                className="w-11 h-11 rounded-xl bg-[#13261f] hover:bg-[#c27b38] hover:border-[#c27b38] border border-[#2b4f42] flex items-center justify-center text-[#f4f3ee] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38]"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Aviso de Privacidad Desplegable */}
        <div className="mt-12 pt-8 border-t border-[#2b4f42]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9eaca2]">
            <p>
              © {new Date().getFullYear()} K9 Armonía — Centro Integral de
              Educación y Adiestramiento Canino. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(!showPrivacyModal)}
                aria-expanded={showPrivacyModal}
                className="inline-flex items-center gap-1.5 text-[#f4f3ee] hover:text-[#c27b38] font-medium underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] rounded px-1"
              >
                <Shield
                  className="w-3.5 h-3.5 text-[#7ba28a]"
                  aria-hidden="true"
                />
                <span>Aviso de Privacidad</span>
                {showPrivacyModal ? (
                  <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                )}
              </button>
              <a
                href="#valoracion"
                className="text-[#f4f3ee] hover:text-[#c27b38] font-semibold transition-colors"
              >
                Agendar Valoración
              </a>
            </div>
          </div>

          {showPrivacyModal && (
            <div className="mt-6 bg-[#13261f] border border-[#2b4f42] rounded-xl p-6 text-xs text-[#9eaca2] space-y-2 leading-relaxed">
              <h4 className="font-bold text-[#f4f3ee] text-sm">
                Aviso de Privacidad Simplificado (LFPDPPP - México)
              </h4>
              <p>
                En cumplimiento con la Ley Federal de Protección de Datos
                Personales en Posesión de los Particulares,{" "}
                <strong className="text-[#f4f3ee]">
                  K9 Armonía Centro Integral Canino
                </strong>{" "}
                informa que los datos personales recabados en el formulario de
                diagnóstico (nombre, correo electrónico, teléfono/WhatsApp y
                datos de su mascota) serán utilizados exclusivamente para: (1)
                agendar y elaborar su valoración conductual inicial, (2) diseñar
                la propuesta de adiestramiento o estancia personalizada y (3) dar
                seguimiento a su solicitud. No compartimos ni vendemos su
                información a terceros. Puede ejercer sus derechos ARCO enviando
                un correo a{" "}
                <span className="text-[#7ba28a]">
                  privacidad@k9armonia.mx
                </span>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
