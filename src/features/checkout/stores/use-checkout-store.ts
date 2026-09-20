import { create } from "zustand";

import type { ShippingValues } from "@/features/checkout/schemas/shipping-schema";
import type { DeliveryValues } from "@/features/checkout/schemas/delivery-schema";
import type { PaymentValues } from "@/features/checkout/schemas/payment-schema";

type CurrentStep = "shipping" | "delivery" | "payment" | "review";

type CheckoutState = {
  shipping: ShippingValues | null;
  delivery: DeliveryValues | null;
  payment: PaymentValues | null;
  currentStep: CurrentStep;

  saveShipping: (data: ShippingValues) => void;
  saveDelivery: (data: DeliveryValues) => void;
  savePayment: (data: PaymentValues) => void;
  setCurrentStep: (step: CurrentStep) => void;
  resetCheckout: () => void;
};

export const useCheckoutStore = create<CheckoutState>((set) => ({
  shipping: null,
  delivery: null,
  payment: null,
  currentStep: "shipping",
  saveShipping: (data) => {
    set({ shipping: data });
  },
  saveDelivery: (data) => {
    set({ delivery: data });
  },
  savePayment: (data) => {
    set({ payment: data });
  },
  setCurrentStep: (step) => {
    set({ currentStep: step });
  },
  resetCheckout: () => {
    set({
      shipping: null,
      delivery: null,
      payment: null,
      currentStep: "shipping",
    });
  },
}));
