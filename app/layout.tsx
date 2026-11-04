import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "K9 Armonía | Centro Integral de Educación, Adiestramiento y Hotel Canino",
  description:
    "Centro Integral Canino especializado en educación para cachorros, cursos de obediencia básica y avanzada, modificación de conducta y hotel campestre con Zona Peques (<8 kg). Agenda tu valoración inicial.",
  keywords: [
    "Centro Integral Canino",
    "Educación y Adiestramiento Canino",
    "Modificación de Conducta Canina",
    "Cursos de Obediencia Canina",
    "Hotel y Guardería Canina Peques",
    "Entrenamiento para Cachorros",
    "Obediencia Básica y Avanzada",
  ],
  openGraph: {
    title:
      "K9 Armonía | Centro Integral de Educación, Adiestramiento y Hotel Canino",
    description:
      "Transforma la convivencia con tu perro en nuestro Centro Integral Canino. Amplias áreas verdes, entrenadores certificados y atención exclusiva para todas las tallas.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans min-h-screen flex flex-col bg-[#13261f] text-[#f4f3ee] antialiased">
        {children}
      </body>
    </html>
  );
}
