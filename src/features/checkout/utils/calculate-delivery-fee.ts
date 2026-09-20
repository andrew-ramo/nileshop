import { type DeliveryValues } from "@/features/checkout/schemas/delivery-schema";
type DeliveryMethod = DeliveryValues["method"];
export function calculateDeliveryFee(method: DeliveryMethod) {
  if (method === "standard") {
    return 50;
  }
  return 100;
}
