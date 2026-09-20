"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import Link from "next/link";

export function CartSummary() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div>
      <div className="flex flex-col gap-4">
        <AlertDialog>
          <AlertDialogTrigger render={<Button />}>
            Clear Cart
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Clear Cart?</AlertDialogTitle>

              <AlertDialogDescription>
                This will remove all items from your cart. This action cannot be
                undone.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>

              <AlertDialogAction
                variant="destructive"
                onClick={() => clearCart()}
              >
                Clear Cart
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <p>Subtotal</p>
        <p className="font-semibold">{subtotal} EGP</p>
        <Link href="/checkout" className={buttonVariants()}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
