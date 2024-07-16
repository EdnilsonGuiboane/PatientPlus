import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter no mínimo 2 caracteres.")
    .max(50, "O nome deve ter no maximo 50 caracteres."),

  email: z.string().email("Endereço de e-mail inválido."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de telefone inválido."
    ),
});
