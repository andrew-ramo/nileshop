import { Container } from "@/components/layout/container";
import { getProductById } from "@/features/products/services/get-products";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/features/cart/components/add-to-cart-button";
type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);

  if (product === null) notFound();
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative aspect-square">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl">{product.name}</h1>
          <div className="flex gap-4">
            <p className="text-xl font-bold">{product.price} EGP</p>
            <Badge>{product.category}</Badge>
          </div>
          <p className="text-base">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </Container>
  );
}
