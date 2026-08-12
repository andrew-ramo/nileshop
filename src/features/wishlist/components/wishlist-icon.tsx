"use client";

import { useWishlistStore } from "@/stores/wishlist-store";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function WishlistIcon() {
  const itemsLength = useWishlistStore((state) => state.items.length);
  return (
    <Link aria-label="Wishlist" href={"/wishlist"}>
      <div className={"relative"}>
        <Heart />
        {itemsLength > 0 && (
          <Badge className="absolute -top-2 -right-2 px-2 rounded-full">
            {itemsLength}
          </Badge>
        )}
      </div>
    </Link>
  );
}
