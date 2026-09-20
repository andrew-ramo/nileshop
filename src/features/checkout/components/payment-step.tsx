"use client";
import { Controller, useForm } from "react-hook-form";
import {
  paymentSchema,
  type PaymentValues,
} from "@/features/checkout/schemas/payment-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCheckoutStore } from "@/features/checkout/stores/use-checkout-store";
import { Button } from "@/components/ui/button";

export function PaymentStep() {
  const savePayment = useCheckoutStore((state) => state.savePayment);
  const setCurrentStep = useCheckoutStore((state) => state.setCurrentStep);
  const defaultValues = useCheckoutStore((state) => state.payment);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PaymentValues>({
    mode: "onBlur",
    resolver: zodResolver(paymentSchema),
    defaultValues: defaultValues ? defaultValues : undefined,
  });
  function onSubmit(data: PaymentValues) {
    savePayment(data);
    setCurrentStep("review");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="method"
        control={control}
        render={({ field }) => (
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            <div>
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash">Cash on Delivery</Label>
            </div>
            <div>
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Card</Label>
            </div>
          </RadioGroup>
        )}
      />
      {errors.method && <p>{errors.method.message}</p>}
      <Button type="submit">Review Order</Button>
    </form>
  );
}
