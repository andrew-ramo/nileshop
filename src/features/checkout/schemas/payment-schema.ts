import z from "zod";

export const paymentSchema = z.object({
  method: z.enum(["cash", "card"]),
});

export type PaymentValues = z.infer<typeof paymentSchema>;
