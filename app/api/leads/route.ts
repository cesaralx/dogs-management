import { NextRequest, NextResponse } from "next/server";
import { leadSchema, type LeadFormData } from "@/lib/schemas/lead";

export const runtime = "edge";

interface LeadRecord extends LeadFormData {
  id: string;
  submittedAt: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json().catch(() => null);

    if (!rawBody || typeof rawBody !== "object") {
      return NextResponse.json(
        {
          success: false,
          message:
            "El formato de la solicitud no es válido. Por favor, verifica tus datos e inténtalo de nuevo.",
        },
        { status: 400 }
      );
    }

    const validationResult = leadSchema.safeParse(rawBody);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message:
            "Por favor, revisa los campos marcados en el formulario antes de enviar tu solicitud.",
          errors: fieldErrors,
        },
        { status: 422 }
      );
    }

    const parsedLead: LeadFormData = validationResult.data;

    const leadRecord: LeadRecord = {
      ...parsedLead,
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      source: "landing-valoracion-canina",
    };

    // Registro limpio en consola para inspección en desarrollo y logs en Cloudflare Workers
    console.info("[K9 Armonía - Nuevo Prospecto Registrado]:", {
      id: leadRecord.id,
      submittedAt: leadRecord.submittedAt,
      dueno: {
        nombre: leadRecord.ownerName,
        correo: leadRecord.email,
        telefono: leadRecord.phone,
      },
      mascota: {
        nombre: leadRecord.dogName,
        raza: leadRecord.breed,
        edad: leadRecord.age,
        sexo: leadRecord.sex,
        esterilizado: leadRecord.neutered,
      },
      diagnostico: {
        objetivoPrincipal: leadRecord.primaryGoal,
        programaInteres: leadRecord.preferredProgram ?? "Valoración General",
        detalles: leadRecord.additionalDetails,
      },
    });

    // ============================================================================
    // 1. HOOK DE INTEGRACIÓN: Envío de Correo Transaccional (Resend API - Edge)
    // ============================================================================
    // if (process.env.RESEND_API_KEY) {
    //   await fetch("https://api.resend.com/emails", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       from: "K9 Armonía Canina <valoraciones@k9armonia.mx>",
    //       to: ["admisiones@k9armonia.mx"],
    //       reply_to: leadRecord.email,
    //       subject: `Nueva Valoración: ${leadRecord.dogName} (${leadRecord.primaryGoal}) - ${leadRecord.ownerName}`,
    //       html: `
    //         <h2>Nueva solicitud de Valoración Inicial</h2>
    //         <p><strong>Dueño:</strong> ${leadRecord.ownerName} (${leadRecord.phone} / ${leadRecord.email})</p>
    //         <p><strong>Perro:</strong> ${leadRecord.dogName} - ${leadRecord.breed} (${leadRecord.age}, ${leadRecord.sex}, Esterilizado: ${leadRecord.neutered})</p>
    //         <p><strong>Objetivo Principal:</strong> ${leadRecord.primaryGoal}</p>
    //         <p><strong>Detalles:</strong> ${leadRecord.additionalDetails}</p>
    //       `,
    //     }),
    //   });
    // }

    // ============================================================================
    // 2. HOOK DE INTEGRACIÓN: Persistencia en Base de Datos (Cloudflare D1 / Supabase)
    // ============================================================================
    // Opción A: Cloudflare D1 (usando getRequestContext de @cloudflare/next-on-pages)
    // import { getRequestContext } from "@cloudflare/next-on-pages";
    // const db = getRequestContext().env.DB;
    // await db
    //   .prepare(
    //     `INSERT INTO leads (
    //       id, owner_name, email, phone, dog_name, breed, age, sex, neutered,
    //       primary_goal, preferred_program, additional_details, submitted_at
    //     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    //   )
    //   .bind(
    //     leadRecord.id,
    //     leadRecord.ownerName,
    //     leadRecord.email,
    //     leadRecord.phone,
    //     leadRecord.dogName,
    //     leadRecord.breed,
    //     leadRecord.age,
    //     leadRecord.sex,
    //     leadRecord.neutered,
    //     leadRecord.primaryGoal,
    //     leadRecord.preferredProgram ?? null,
    //     leadRecord.additionalDetails,
    //     leadRecord.submittedAt
    //   )
    //   .run();
    //
    // Opción B: Supabase REST API (Edge-compatible)
    // if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    //   await fetch(`${process.env.SUPABASE_URL}/rest/v1/leads`, {
    //     method: "POST",
    //     headers: {
    //       apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    //       Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
    //       "Content-Type": "application/json",
    //       Prefer: "return=minimal",
    //     },
    //     body: JSON.stringify(leadRecord),
    //   });
    // }

    // ============================================================================
    // 3. HOOK DE INTEGRACIÓN: Webhook / CRM / WhatsApp Business Automation (Make / Zapier)
    // ============================================================================
    // if (process.env.CRM_WEBHOOK_URL) {
    //   await fetch(process.env.CRM_WEBHOOK_URL, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(leadRecord),
    //   });
    // }

    return NextResponse.json(
      {
        success: true,
        message: "Prospecto registrado exitosamente",
        leadId: leadRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[K9 Armonía - Error al procesar prospecto]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Ocurrió un error inesperado al procesar tu registro. Por favor, inténtalo nuevamente en unos momentos.",
      },
      { status: 500 }
    );
  }
}
