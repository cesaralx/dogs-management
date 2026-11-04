"use client";

import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Shield,
  Car,
  ExternalLink,
  Trees,
} from "lucide-react";

type MapTab = "campus" | "zmg";

const LOCATIONS: Record<
  MapTab,
  {
    title: string;
    subtitle: string;
    address: string;
    reference: string;
    embedUrl: string;
    googleMapsUrl: string;
    wazeUrl: string;
  }
> = {
  campus: {
    title: "Campus Principal & Casa «Zona Peques»",
    subtitle: "Instalaciones Campestres y Centro de Adiestramiento",
    address:
      "Km 20, Carretera Santa Cruz de las Flores – Tala (Rumbo a San Isidro Mazatepec / Ahuisculco), Jalisco, México.",
    reference:
      "A 25 minutos de López Mateos Sur / Plazas Outlet Guadalajara. Amplias áreas verdes privadas, estacionamiento seguro y recepción exclusiva.",
    embedUrl:
      "https://www.google.com/maps?q=Carretera+Santa+Cruz+de+las+Flores+Tala+Km+20+Jalisco+Mexico&t=&z=13&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cikan+Centro+Integral+Canino+Carretera+Santa+Cruz+de+las+Flores+Tala+Km+20+Jalisco",
    wazeUrl:
      "https://waze.com/ul?q=Carretera%20Santa%20Cruz%20de%20las%20Flores%20Tala%20Km%2020%20Jalisco&navigate=yes",
  },
  zmg: {
    title: "Valoraciones y Cobertura en Guadalajara y Zapopan",
    subtitle: "Servicio de Diagnóstico y Seguimiento en Zona Metropolitana",
    address:
      "Cobertura en Zapopan, Providencia, Puerta de Hierro, Valle Real, Chapalita, Ciudad del Sol y Corredor López Mateos Sur.",
    reference:
      "Contamos con servicio de valoración inicial y transporte seguro programado hacia nuestro Campus Campestre.",
    embedUrl:
      "https://www.google.com/maps?q=Zapopan+Guadalajara+Jalisco+Mexico&t=&z=12&ie=UTF8&iwloc=&output=embed",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Guadalajara+Zapopan+Jalisco",
    wazeUrl: "https://waze.com/ul?q=Zapopan%20Jalisco&navigate=yes",
  },
};

export function LocationMapSection() {
  const [activeTab, setActiveTab] = useState<MapTab>("campus");
  const currentLocation = LOCATIONS[activeTab];

  return (
    <section
      id="ubicacion"
      className="py-20 lg:py-28 bg-[#13261f] border-b border-[#2b4f42] scroll-mt-20"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7ba28a] bg-[#1b342b] border border-[#2b4f42] px-4 py-1.5 rounded-lg mb-4">
              <MapPin
                className="w-3.5 h-3.5 text-[#c27b38]"
                aria-hidden="true"
              />
              Ubicación e Instalaciones en Jalisco
            </span>
            <h2
              id="location-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f3ee] tracking-wide"
            >
              Visítanos en nuestro{" "}
              <span className="font-serif italic font-normal text-[#c27b38]">
                Santuario Campestre
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9eaca2] leading-relaxed">
              Ubicados en un entorno natural privilegiado sobre el corredor
              Santa Cruz de las Flores – Tala, lejos del ruido urbano para
              garantizar la tranquilidad y concentración de cada ejemplar.
            </p>
          </div>

          {/* Location Switcher Tabs */}
          <div
            className="inline-flex p-1.5 rounded-xl bg-[#1b342b] border border-[#2b4f42] self-start"
            role="tablist"
            aria-label="Seleccionar mapa de ubicación"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "campus"}
              onClick={() => setActiveTab("campus")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-colors ${
                activeTab === "campus"
                  ? "bg-[#c27b38] text-[#f4f3ee] shadow-sm"
                  : "text-[#9eaca2] hover:text-[#f4f3ee]"
              }`}
            >
              <Trees className="w-4 h-4" aria-hidden="true" />
              <span>Campus Km 20 (Principal)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "zmg"}
              onClick={() => setActiveTab("zmg")}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-colors ${
                activeTab === "zmg"
                  ? "bg-[#c27b38] text-[#f4f3ee] shadow-sm"
                  : "text-[#9eaca2] hover:text-[#f4f3ee]"
              }`}
            >
              <Car className="w-4 h-4" aria-hidden="true" />
              <span>Zona Metropolitana GDL</span>
            </button>
          </div>
        </div>

        {/* Main Map & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Details, Directions & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#1b342b] rounded-2xl border border-[#2b4f42] p-7 sm:p-9 shadow-xl space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7ba28a] block">
                  {currentLocation.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-[#f4f3ee] mt-1 tracking-wide">
                  {currentLocation.title}
                </h3>
              </div>

              {/* Address Block */}
              <div className="bg-[#13261f] rounded-xl p-4 border border-[#2b4f42] space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-[#c27b38] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7ba28a]">
                      Dirección Oficial
                    </p>
                    <p className="text-sm text-[#f4f3ee] font-medium mt-1 leading-relaxed">
                      {currentLocation.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reference & Access Block */}
              <div className="bg-[#13261f] rounded-xl p-4 border border-[#2b4f42] space-y-2">
                <div className="flex items-start gap-3">
                  <Car
                    className="w-5 h-5 text-[#7ba28a] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7ba28a]">
                      Referencia de Acceso
                    </p>
                    <p className="text-xs sm:text-sm text-[#9eaca2] mt-1 leading-relaxed">
                      {currentLocation.reference}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reception Hours & Direct Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-[#13261f] rounded-xl p-4 border border-[#2b4f42]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7ba28a] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    Recepción y Visitas
                  </p>
                  <p className="text-xs text-[#f4f3ee] font-semibold mt-1.5">
                    Lun – Vie: 8:30 AM – 7:00 PM
                  </p>
                  <p className="text-xs text-[#9eaca2] mt-0.5">
                    Sáb: 9:00 AM – 4:00 PM
                  </p>
                </div>

                <div className="bg-[#13261f] rounded-xl p-4 border border-[#2b4f42]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7ba28a] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    Atención Directa
                  </p>
                  <p className="text-xs text-[#f4f3ee] font-semibold mt-1.5">
                    (+52) 33 1142 8657
                  </p>
                  <p className="text-xs text-[#9eaca2] mt-0.5">
                    contacto@k9armonia.mx
                  </p>
                </div>
              </div>
            </div>

            {/* Direct GPS Navigation Buttons (Google Maps & Waze) */}
            <div className="pt-4 border-t border-[#2b4f42] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={currentLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#c27b38] hover:bg-[#a86529] text-[#f4f3ee] font-bold text-xs sm:text-sm tracking-wide px-4 py-3.5 rounded-xl transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
                </a>

                <a
                  href={currentLocation.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#13261f] hover:border-[#7ba28a] text-[#f4f3ee] font-semibold text-xs sm:text-sm tracking-wide px-4 py-3.5 rounded-xl border border-[#2b4f42] transition-colors"
                >
                  <Car className="w-4 h-4 text-[#7ba28a]" aria-hidden="true" />
                  <span>Trazar Ruta en Waze</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
                </a>
              </div>
              <p className="text-[11px] text-[#9eaca2] flex items-center justify-center gap-1.5 text-center">
                <Shield
                  className="w-3.5 h-3.5 text-[#7ba28a] shrink-0"
                  aria-hidden="true"
                />
                Por seguridad de nuestros huéspedes, las visitas al campus se
                realizan con cita previa.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Map Container */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[420px] lg:min-h-[520px] rounded-2xl overflow-hidden border-2 border-[#2b4f42] bg-[#1b342b] shadow-2xl">
              {/* Top Floating Map Badge */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#13261f]/90 backdrop-blur-md border border-[#2b4f42] shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c27b38] animate-pulse" />
                  <span className="text-xs font-bold tracking-wide text-[#f4f3ee]">
                    {activeTab === "campus"
                      ? "Km 20 Carr. Santa Cruz de las Flores – Tala"
                      : "Cobertura Guadalajara y Zapopan"}
                  </span>
                </div>
              </div>

              <iframe
                key={activeTab}
                title={currentLocation.title}
                src={currentLocation.embedUrl}
                className="w-full h-full min-h-[420px] lg:min-h-[520px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
