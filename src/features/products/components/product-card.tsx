import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { Product } from "@/features/products/types/product";
import Link from "next/link";
import { WishlistToggle } from "@/features/wishlist/components/wishlist-toggle";
import { CompareToggle } from "@/features/compare/components/compare-toggle";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="relative">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={product.image_url}
            alt={product.name}
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
            fill
          />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <h3>{product.name}</h3>
          <p>{product.price} EGP</p>
          <Badge>{product.category}</Badge>
          {product.stock_quantity === 0 && <Badge>Out of Stock</Badge>}
        </div>
      </Link>
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <WishlistToggle product={product} />
        <CompareToggle product={product} />
      </div>
    </Card>
  );
}
