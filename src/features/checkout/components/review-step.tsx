"use client";
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/features/checkout/stores/use-checkout-store";
import { useCartStore } from "@/stores/cart-store";
import Link from "next/link";
import { calculateDeliveryFee } from "@/features/checkout/utils/calculate-delivery-fee";
import { useRouter } from "next/navigation";
export function ReviewStep() {
  const shipping = useCheckoutStore((state) => state.shipping);
  const delivery = useCheckoutStore((state) => state.delivery);
  const payment = useCheckoutStore((state) => state.payment);
  const setCurrentStep = useCheckoutStore((state) => state.setCurrentStep);
  const resetCheckout = useCheckoutStore((state) => state.resetCheckout);

  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  if (!shipping || !delivery || !payment) return null;
  const deliveryFee = calculateDeliveryFee(delivery.method);
  const total = subtotal + deliveryFee;
  return (
    <div>
      <div className="border rounded-card p-4">
        <div className="flex justify-between">
          <h2>Shipping Details</h2>{" "}
          <Button onClick={() => setCurrentStep("shipping")}>Edit</Button>
        </div>
        <div>
          <p className="font-bold">{shipping.fullName}</p>
          <p>{shipping.address}</p>
          <p>{shipping.city}</p>
          <p>{shipping.phone}</p>
          <p>{shipping.postalCode}</p>
        </div>
      </div>
      <div className="border rounded-card p-4">
        <div className="flex justify-between">
          <h2>Delivery Details</h2>{" "}
          <Button onClick={() => setCurrentStep("delivery")}>Edit</Button>
        </div>
        <div>
          <p className="font-bold">
            {delivery.method === "express"
              ? "Express Delivery"
              : "Standard Delivery"}
          </p>
        </div>
      </div>
      <div className="border rounded-card p-4">
        <div className="flex justify-between">
          <h2>Payment Details</h2>{" "}
          <Button onClick={() => setCurrentStep("payment")}>Edit</Button>
        </div>
        <div>
          <p className="font-bold">
            {payment.method === "card" ? "Card" : "Cash on Delivery"}
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2>Order Summary</h2>
          <Link href={"/cart"}>Edit</Link>
        </div>
        <div>
          <div className="grid grid-cols-[1fr_auto_auto]">
            <span>Product Name</span>
            <span>Quantity</span>
            <span>Line Total</span>
          </div>
          {cartItems.map((item) => (
            <div className="grid grid-cols-[1fr_auto_auto]" key={item.id}>
              <span> {item.name}</span>
              <span>{item.quantity}</span>
              <span>
                {item.price} X {item.quantity} = {item.price * item.quantity}
              </span>
            </div>
          ))}
          <div>
            <span>Subtotal</span>
            <span>{subtotal} EGP</span>
          </div>
          <div>
            <span>Delivery Fee</span>
            <span>{deliveryFee} EGP</span>
          </div>
          <div>
            <span>Total</span>
            <span>{total} EGP</span>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          resetCheckout();
          clearCart();
          router.push("/checkout/success");
        }}
      >
        Place Order
      </Button>
    </div>
  );
}
