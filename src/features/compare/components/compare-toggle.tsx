"use client";
import { Button } from "@/components/ui/button";
import type { Product } from "@/features/products/types/product";
import { useCompareStore } from "@/stores/compare-store";
import { GitCompareArrows } from "lucide-react";
import { toast } from "sonner";

type Props = {
  product: Product;
};

export function CompareToggle({ product }: Props) {
  const items = useCompareStore((state) => state.items);
  const toggleItem = useCompareStore((state) => state.toggleItem);
  const isCompared = items.some((item) => item.id === product.id);
  return (
    <Button
      aria-label={isCompared ? "Remove from comparison" : "Add to comparison"}
      onClick={() => {
        const currentStatus = toggleItem(product);
        if (currentStatus === "limit-reached") {
          toast.error("You can compare up to 4 products");
        }
      }}
    >
      {isCompared ? (
        <GitCompareArrows className="text-compare" />
      ) : (
        <GitCompareArrows />
      )}
    </Button>
  );
}
