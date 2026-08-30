import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2).max(50),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((refineData) => refineData.password === refineData.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterValues = z.infer<typeof registerSchema>;
