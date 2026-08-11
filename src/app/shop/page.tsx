import { Container } from "@/components/layout/container";
import { EmptyState } from "@/features/products/components/empty-state";
import { ProductCard } from "@/features/products/components/product-card";
import { getProducts } from "@/features/products/services/get-products";
import Link from "next/link";
export default async function ShopPage() {
  const products = await getProducts();

  return (
    <Container>
      {products.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
}
