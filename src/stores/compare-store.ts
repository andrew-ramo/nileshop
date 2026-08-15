import { create } from "zustand";

import type { Product } from "@/features/products/types/product";

export type CompareStatus = "removed" | "added" | "limit-reached";

type CompareStore = {
  items: Product[];
  toggleItem: (product: Product) => CompareStatus;
};

export const useCompareStore = create<CompareStore>((set, get) => ({
  items: [],
  toggleItem: (product) => {
    const isCompared = get().items.some((item) => item.id === product.id);
    if (isCompared) {
      set((state) => ({
        items: state.items.filter((item) => item.id !== product.id),
      }));
      return "removed";
    } else {
      if (get().items.length < 4) {
        set((state) => ({ items: [...state.items, product] }));
        return "added";
      } else {
        return "limit-reached";
      }
    }
  },
}));
