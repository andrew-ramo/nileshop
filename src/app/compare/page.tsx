"use client";

import { EmptyState } from "@/components/common/empty-state";
import { Container } from "@/components/layout/container";
import { CompareTable } from "@/features/compare/components/compare-table";
import { useCompareStore } from "@/stores/compare-store";

export default function Compare() {
  const items = useCompareStore((state) => state.items);

  return (
    <Container>
      {items.length !== 0 ? (
        <CompareTable items={items} />
      ) : (
        <EmptyState
          title="No products to compare"
          description="Select up to 4 products to compare their features side by side."
          action={{ href: "/shop", label: "Continue Shopping" }}
        />
      )}
    </Container>
  );
}
