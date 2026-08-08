import { getProductById } from "@/features/products/services/get-products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);

  if (product === null) notFound();
  return (
    <div>
      name : {product.name} <br />
      price : {product.price}
    </div>
  );
}
