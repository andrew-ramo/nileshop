"use client";
import { Button } from "@/components/ui/button";
import type { CartItem } from "@/features/cart/types/cart";
import { useCartStore } from "@/stores/cart-store";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  cartItem: CartItem;
};

export function CartItemRow({ cartItem }: Props) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const totalPrice = cartItem.quantity * cartItem.price;

  return (
    <div className="flex justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-20 h-20 relative">
          <Image
            src={cartItem.image_url}
            alt={cartItem.name}
            fill
            sizes="80px"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <Link href={`/product/${cartItem.id}`}>{cartItem.name}</Link>
          <p>{cartItem.price} EGP / unit</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={() => decreaseQuantity(cartItem.id)}>-</Button>
        <p aria-live="polite">{cartItem.quantity}</p>
        <Button onClick={() => increaseQuantity(cartItem.id)}>+</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button
          onClick={() => removeItem(cartItem.id)}
          aria-label="Remove item"
        >
          <Trash />
        </Button>
        <div className="flex flex-col gap-2">
          <p>Total</p>
          <p>{totalPrice} EGP</p>
        </div>
      </div>
    </div>
  );
}
