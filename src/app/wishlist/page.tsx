"use client";

import { EmptyState } from "@/components/common/empty-state";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/features/products/components/product-card";
import { useWishlistStore } from "@/stores/wishlist-store";

export default function Wishlist() {
  const items = useWishlistStore((state) => state.items);

  return (
    <Container>
      {items.length !== 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Your wishlist is empty"
          description="Save your favorite products here so you can find them later."
          action={{ href: "/shop", label: "Continue Shopping" }}
        />
      )}
    </Container>
  );
}
