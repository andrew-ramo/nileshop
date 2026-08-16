"use client";

import { useRecentlyViewedStore } from "@/stores/recently-viewed-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  excludeId?: number;
};

export function RecentlyViewedSection({ excludeId }: Props) {
  const [hydrated, setHydrated] = useState(false);

  const items = useRecentlyViewedStore((state) => state.items);

  useEffect(() => {
    const unsubscribe = useRecentlyViewedStore.persist.onFinishHydration(() =>
      setHydrated(true),
    );
    if (useRecentlyViewedStore.persist.hasHydrated()) {
      setHydrated(true);
    }
    return () => {
      unsubscribe();
    };
  }, []);
  if (!hydrated) return null;
  let filteredItems = items;
  if (excludeId !== undefined) {
    filteredItems = items.filter((item) => item.id !== excludeId);
  }

  if (filteredItems.length === 0) return null;

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-semibold text-lg">Recently Viewed</h2>
      <ul className="flex flex-col gap-4">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <Link
              href={`/product/${item.id}`}
              className="flex p-4 justify-between items-center hover:bg-muted focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring transition-colors duration-200"
            >
              <div className="flex gap-4 items-center">
                <div className="relative size-24">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <p className="font-medium">{item.name}</p>
              </div>

              <p className="font-semibold">{item.price} EGP</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
