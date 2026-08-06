import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { Product } from "@/features/products/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
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
    </Card>
  );
}
