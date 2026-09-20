"use client";

import {
  shippingSchema,
  type ShippingValues,
} from "@/features/checkout/schemas/shipping-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCheckoutStore } from "@/features/checkout/stores/use-checkout-store";
import { Button } from "@/components/ui/button";

export function ShippingStep() {
  const saveShippingData = useCheckoutStore((state) => state.saveShipping);
  const setCurrentStep = useCheckoutStore((state) => state.setCurrentStep);
  const defaultValues = useCheckoutStore((state) => state.shipping);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingValues>({
    mode: "onBlur",
    resolver: zodResolver(shippingSchema),
    defaultValues: defaultValues ? defaultValues : undefined,
  });

  function onSubmit(data: ShippingValues) {
    saveShippingData(data);
    setCurrentStep("delivery");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="fullName">Full Name</Label>
      <Input
        type="text"
        {...register("fullName")}
        id="fullName"
        aria-invalid={!!errors.fullName}
        aria-describedby={errors.fullName ? "fullName-error" : undefined}
      />
      {errors.fullName && <p id="fullName-error">{errors.fullName.message}</p>}

      <Label htmlFor="address">Address</Label>
      <Input
        type="text"
        {...register("address")}
        id="address"
        aria-invalid={!!errors.address}
        aria-describedby={errors.address ? "address-error" : undefined}
      />
      {errors.address && <p id="address-error">{errors.address.message}</p>}

      <Label htmlFor="city">City</Label>
      <Input
        type="text"
        {...register("city")}
        id="city"
        aria-invalid={!!errors.city}
        aria-describedby={errors.city ? "city-error" : undefined}
      />
      {errors.city && <p id="city-error">{errors.city.message}</p>}

      <Label htmlFor="postalCode">Postal Code</Label>
      <Input
        type="text"
        {...register("postalCode")}
        id="postalCode"
        aria-invalid={!!errors.postalCode}
        aria-describedby={errors.postalCode ? "postalCode-error" : undefined}
      />
      {errors.postalCode && (
        <p id="postalCode-error">{errors.postalCode.message}</p>
      )}

      <Label htmlFor="phone">Phone</Label>
      <Input
        type="text"
        {...register("phone")}
        id="phone"
        aria-invalid={!!errors.phone}
        aria-describedby={errors.phone ? "phone-error" : undefined}
      />
      {errors.phone && <p id="phone-error">{errors.phone.message}</p>}

      <Button type="submit">Next</Button>
    </form>
  );
}
