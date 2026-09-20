import z from "zod";
export const shippingSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  address: z.string().trim().min(5).max(200),
  city: z.string().trim().min(2).max(100),
  postalCode: z
    .string()
    .trim()
    .regex(/^\d{5}$/),
  phone: z
    .string()
    .trim()
    .regex(/^(010|011|012|015)\d{8}$/),
});
export type ShippingValues = z.infer<typeof shippingSchema>;
