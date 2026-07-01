import { z } from "zod";

export const rfcFormSchema = z.object({
  apellidoPaterno: z.string().trim().min(1, "El apellido paterno es obligatorio."),
  apellidoMaterno: z.string().trim().optional(),
  nombre: z.string().trim().min(1, "El nombre es obligatorio."),
  fechaNacimiento: z
    .string()
    .min(1, "La fecha de nacimiento es obligatoria.")
    .refine((value) => {
      const date = new Date(`${value}T00:00:00`);
      const now = new Date();
      return !Number.isNaN(date.getTime()) && date <= now;
    }, "La fecha de nacimiento debe ser válida y no puede ser futura."),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  email: z.string().trim().email("A valid email is required."),
  category: z.enum(["technical", "legal", "business"]),
  subject: z.string().trim().min(3, "Subject is required."),
  message: z.string().trim().min(20, "Message must be at least 20 characters."),
  website: z.string().optional(),
});
