"use client";

import { useRecentlyViewedStore } from "@/stores/recently-viewed-store";
import { useEffect } from "react";
import type { Product } from "@/features/products/types/product";

type Props = {
  product: Product;
};
export function RecentlyViewedTracker({ product }: Props) {
  const addItem = useRecentlyViewedStore((state) => state.addItem);

  useEffect(() => {
    addItem(product);
  }, [product.id]);
  return null;
}
