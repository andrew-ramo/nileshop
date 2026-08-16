import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "@/features/products/types/product";

type RecentlyViewedStore = {
  items: Product[];
  addItem: (product: Product) => void;
};

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) => {
        set((state) => {
          const filteredItems = state.items.filter(
            (item) => item.id !== product.id,
          );
          const newArr = [product, ...filteredItems];
          return {
            items: newArr.slice(0, 10),
          };
        });
      },
    }),
    {
      name: "recently-viewed",
    },
  ),
);
