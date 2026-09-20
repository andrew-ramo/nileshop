"use client";

import { Container } from "@/components/layout/container";
import { DeliveryStep } from "@/features/checkout/components/delivery-step";
import { PaymentStep } from "@/features/checkout/components/payment-step";
import { ReviewStep } from "@/features/checkout/components/review-step";
import { ShippingStep } from "@/features/checkout/components/shipping-step";
import { useCheckoutStore } from "@/features/checkout/stores/use-checkout-store";

export default function Checkout() {
  const currentStep = useCheckoutStore((state) => state.currentStep);

  const stepNumber = { shipping: 1, delivery: 2, payment: 3, review: 4 };
  const currentStepNumber = stepNumber[currentStep];

  return (
    <Container>
      <p>Step {currentStepNumber} of 4</p>
      {currentStep === "shipping" && <ShippingStep />}
      {currentStep === "delivery" && <DeliveryStep />}
      {currentStep === "payment" && <PaymentStep />}
      {currentStep === "review" && <ReviewStep />}
    </Container>
  );
}
