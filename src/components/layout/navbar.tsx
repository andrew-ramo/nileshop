import { Container } from "@/components/layout/container";
import { CartIcon } from "@/features/cart/components/cart-icon";
import { ThemeToggle } from "@/components/common/theme-toggle";
import Link from "next/link";
import { WishlistIcon } from "@/features/wishlist/components/wishlist-icon";
import { CompareIcon } from "@/features/compare/components/compare-icon";

export function Navbar() {
  return (
    <nav className="border py-4">
      <Container>
        <div className="flex justify-between items-center gap-4 ">
          <div className="flex items-center gap-4">
            <Link href={"/"} className="text-lg font-semibold">
              NileShop
            </Link>
            <Link href={"/shop"}>Shop</Link>
          </div>
          <div className="flex items-center gap-4">
            <CartIcon />
            <WishlistIcon />
            <CompareIcon />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
