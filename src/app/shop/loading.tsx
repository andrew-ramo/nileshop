import { Container } from "@/components/layout/container";
import { ProductCardSkeleton } from "@/features/products/components/product-card-skeleton";

export default function Loading() {
  return (
    <Container>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </Container>
  );
}
