import { z } from "zod";

export const PRIMARY_GOALS = [
  "Cachorro",
  "Jala de la correa",
  "Reactividad/Miedos",
  "Obediencia general",
  "Ansiedad",
] as const;

export const DOG_SEX_OPTIONS = ["Macho", "Hembra"] as const;
export const NEUTERED_OPTIONS = ["Sí", "No"] as const;

export const leadSchema = z.object({
  // Datos del Dueño
  ownerName: z
    .string({ required_error: "Por favor, ingresa tu nombre completo." })
    .trim()
    .min(3, "Tu nombre debe tener al menos 3 caracteres.")
    .max(100, "El nombre es demasiado largo."),
  email: z
    .string({ required_error: "Por favor, ingresa tu correo electrónico." })
    .trim()
    .email("Ingresa un correo electrónico válido (ejemplo: nombre@correo.com)."),
  phone: z
    .string({ required_error: "Por favor, ingresa tu número de teléfono o WhatsApp." })
    .trim()
    .min(10, "Ingresa un número válido de al menos 10 dígitos.")
    .max(20, "El número telefónico no debe exceder 20 caracteres.")
    .regex(
      /^[0-9+\-\s()]{10,20}$/,
      "Ingresa un número de teléfono o WhatsApp válido (ej. 55 1234 5678)."
    ),

  // Datos de la Mascota
  dogName: z
    .string({ required_error: "Por favor, ingresa el nombre de tu perrito." })
    .trim()
    .min(2, "El nombre de tu perrito debe tener al menos 2 caracteres.")
    .max(60, "El nombre es demasiado largo."),
  breed: z
    .string({ required_error: "Indica la raza o si es mestizo/criollo." })
    .trim()
    .min(2, "Indica la raza o escribe 'Mestizo' / 'Criollo'.")
    .max(80, "El texto de la raza es demasiado largo."),
  age: z
    .string({ required_error: "Indica la edad aproximada en meses o años." })
    .trim()
    .min(1, "Indica la edad de tu perrito (ej. 4 meses, 2 años).")
    .max(40, "El formato de edad es demasiado largo."),
  sex: z.enum(DOG_SEX_OPTIONS, {
    errorMap: () => ({ message: "Selecciona el sexo de tu perrito." }),
  }),
  neutered: z.enum(NEUTERED_OPTIONS, {
    errorMap: () => ({
      message: "Indica si tu perrito está esterilizado o castrado.",
    }),
  }),

  // Objetivo principal
  primaryGoal: z.enum(PRIMARY_GOALS, {
    errorMap: () => ({
      message: "Selecciona el objetivo principal para la valoración.",
    }),
  }),

  // Programa de interés opcional (cuando hacen clic en "Solicitar Información")
  preferredProgram: z.string().optional(),

  // Detalles adicionales
  additionalDetails: z
    .string({
      required_error:
        "Cuéntanos brevemente sobre la conducta de tu perrito o lo que deseas lograr.",
    })
    .trim()
    .min(
      10,
      "Por favor, cuéntanos un poco más (mínimo 10 caracteres) para preparar tu diagnóstico."
    )
    .max(1200, "El mensaje no puede superar los 1200 caracteres."),
});

export type LeadFormData = z.infer<typeof leadSchema>;
