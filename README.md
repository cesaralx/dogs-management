# K9 Armonía — Educación y Adiestramiento Canino

Landing page de alto rendimiento y optimizada para conversión para **K9 Armonía**, construida con **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **React Hook Form** y **Zod**, lista para desplegarse en **Cloudflare Pages**.

## Características principales

- **100% en Español Latinoamericano / Mexicano:** Copywriting especializado en etología y educación canina en positivo.
- **Secciones incluidas:**
  1. **Hero Section:** Propuesta de valor, llamada a la acción con scroll suave (`Agendar Valoración`) e indicadores de confianza (`+500 perritos educados`, `Métodos 100% en positivo`, `Entrenadores certificados`).
  2. **Programas y Servicios:** Educación para Cachorros, Modificación de Conducta, Obediencia Básica y Control de Paseo, y Guardería con Entrenamiento (*Board & Train*).
  3. **Metodología y Beneficios:** Enfoque en refuerzo positivo, planes personalizados y coaching familiar.
  4. **Testimonios y Casos de Éxito:** Reseñas reales con raza, edad y resumen del resultado logrado.
  5. **Formulario de Registro y Diagnóstico:** Validación cliente y servidor con **Zod** y **React Hook Form**.
  6. **API Route en Edge Runtime (`app/api/leads/route.ts`):** Configurada con `export const runtime = 'edge'` y hooks listos para Resend, Cloudflare D1, Supabase o Webhooks.

## Scripts disponibles

```bash
# Desarrollo local
npm run dev

# Compilación estándar de Next.js
npm run build

# Compilación para Cloudflare Pages (@cloudflare/next-on-pages)
npm run build:cloudflare

# Previsualización local con Wrangler Pages
npm run preview
```
