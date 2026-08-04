import { getProducts } from "@/features/products/services/get-products";
export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          name : {product.name} <br />
          price : {product.price}
        </div>
      ))}
    </div>
  );
}
