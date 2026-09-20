"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  deliverySchema,
  type DeliveryValues,
} from "@/features/checkout/schemas/delivery-schema";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCheckoutStore } from "@/features/checkout/stores/use-checkout-store";

export function DeliveryStep() {
  const saveDelivery = useCheckoutStore((state) => state.saveDelivery);
  const defaultValues = useCheckoutStore((state) => state.delivery);
  const setCurrentStep = useCheckoutStore((state) => state.setCurrentStep);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DeliveryValues>({
    mode: "onBlur",
    resolver: zodResolver(deliverySchema),
    defaultValues: defaultValues ? defaultValues : undefined,
  });
  function onSubmit(data: DeliveryValues) {
    saveDelivery(data);
    setCurrentStep("payment");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="method"
        control={control}
        render={({ field }) => (
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            <div>
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard">Standard Delivery</Label>
            </div>
            <div>
              <RadioGroupItem value="express" id="express" />
              <Label htmlFor="express">Express Delivery</Label>
            </div>
          </RadioGroup>
        )}
      />
      {errors.method && <p>{errors.method.message}</p>}
      <Button type="submit">Next</Button>
    </form>
  );
}
