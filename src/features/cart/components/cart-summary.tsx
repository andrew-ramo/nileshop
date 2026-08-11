"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";

export function CartSummary() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Button onClick={() => clearCart()}>Clear Cart</Button>
        <p>Subtotal</p>
        <p className="font-semibold">{subtotal} EGP</p>
      </div>
    </div>
  );
}
