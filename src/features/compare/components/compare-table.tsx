import type { Product } from "@/features/products/types/product";
import Image from "next/image";
import { CompareToggle } from "@/features/compare/components/compare-toggle";

type Props = {
  items: Product[];
};

export function CompareTable({ items }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 border border-border text-left" scope="row">
              Name
            </th>
            {items.map((item) => (
              <th
                className="p-4 border border-border text-center relative"
                scope="col"
                key={item.id}
              >
                <div className="relative size-24 mx-auto">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="line-clamp-2">{item.name}</p>
                <div className="absolute top-2 right-2">
                  <CompareToggle product={item} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              className="p-4 border border-border font-medium text-left"
              scope="row"
            >
              Price
            </th>
            {items.map((item) => (
              <td
                className="p-4 border border-border text-center"
                key={item.id}
              >
                {item.price} EGP
              </td>
            ))}
          </tr>
          <tr>
            <th
              className="p-4 border border-border font-medium text-left"
              scope="row"
            >
              Category
            </th>
            {items.map((item) => (
              <td
                className="p-4 border border-border text-center"
                key={item.id}
              >
                {item.category}
              </td>
            ))}
          </tr>
          <tr>
            <th
              className="p-4 border border-border font-medium text-left"
              scope="row"
            >
              Stock
            </th>
            {items.map((item) => (
              <td
                className="p-4 border border-border text-center"
                key={item.id}
              >
                {item.stock_quantity}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
