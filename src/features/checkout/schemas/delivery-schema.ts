import z from "zod";

export const deliverySchema = z.object({
  method: z.enum(["standard", "express"]),
});

export type DeliveryValues = z.infer<typeof deliverySchema>;
