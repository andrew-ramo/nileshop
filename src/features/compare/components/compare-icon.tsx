"use client";

import { Badge } from "@/components/ui/badge";
import { useCompareStore } from "@/stores/compare-store";
import { GitCompareArrows } from "lucide-react";
import Link from "next/link";

export function CompareIcon() {
  const itemsLength = useCompareStore((state) => state.items.length);
  return (
    <Link href={"/compare"} aria-label="Compare products">
      <div className="relative">
        <GitCompareArrows />
        {itemsLength > 0 && (
          <Badge className="absolute -top-2 -right-2 px-2">{itemsLength}</Badge>
        )}
      </div>
    </Link>
  );
}
