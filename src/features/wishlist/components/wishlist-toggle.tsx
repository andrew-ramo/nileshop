"use client";
import { Button } from "@/components/ui/button";
import type { Product } from "@/features/products/types/product";
import { useWishlistStore } from "@/stores/wishlist-store";
import { Heart } from "lucide-react";
type Props = {
  product: Product;
};

export function WishlistToggle({ product }: Props) {
  const items = useWishlistStore((state) => state.items);
  const toggleItem = useWishlistStore((state) => state.toggleItem);

  const isWishlisted = items.some((item) => item.id === product.id);

  return (
    <Button
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      onClick={() => toggleItem(product)}
    >
      {isWishlisted ? (
        <Heart className="text-favorite" fill="currentColor" />
      ) : (
        <Heart />
      )}
    </Button>
  );
}
