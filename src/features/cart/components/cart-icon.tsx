"use client";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function CartIcon() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link href={"/cart"}>
      <div className="relative">
        <ShoppingCart />
        {totalItems > 0 && (
          <Badge className="absolute -top-2 -right-2 rounded-full p-2">
            {totalItems}
          </Badge>
        )}
      </div>
    </Link>
  );
}
