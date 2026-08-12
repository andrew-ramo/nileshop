import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/common/empty-state";
import { ProductCard } from "@/features/products/components/product-card";
import { getProducts } from "@/features/products/services/get-products";
export default async function ShopPage() {
  const products = await getProducts();

  return (
    <Container>
      {products.length === 0 ? (
        <EmptyState
          title="No products available"
          description="Please try again later"
        />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </Container>
  );
}
