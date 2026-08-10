"use client";
import type { Product } from "@/features/products/types/product";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";

type Props = {
  product: Product;
};

export function AddToCartButton({ product }: Props) {
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addItem);
  const removeFromCart = useCartStore((state) => state.removeItem);

  const cartItem = items.find((item) => item.id === product.id);
  return cartItem ? (
    <div>
      <Button onClick={() => removeFromCart(product.id)}>-</Button>
      <p aria-live="polite" aria-label={`Quantity: ${cartItem.quantity}`}>
        {cartItem.quantity}
      </p>
      <Button onClick={() => addToCart(product)}>+</Button>
    </div>
  ) : (
    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
  );
}
