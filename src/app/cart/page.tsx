"use client";
import { Container } from "@/components/layout/container";
import { CartItemRow } from "@/features/cart/components/cart-item-row";
import { useCartStore } from "@/stores/cart-store";
import { CartSummary } from "@/features/cart/components/cart-summary";
import { EmptyState } from "@/components/common/empty-state";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  return (
    <Container>
      {items.length !== 0 ? (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-4">
            {items.map((item) => (
              <CartItemRow key={item.id} cartItem={item} />
            ))}
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <CartSummary />
          </div>
        </div>
      ) : (
        <EmptyState
          title="your cart is empty"
          description="If you want to add some products go to shop page"
          action={{ href: "/shop", label: "go to shop page" }}
        />
      )}
    </Container>
  );
}
