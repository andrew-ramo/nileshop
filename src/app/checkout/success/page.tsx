import { Container } from "@/components/layout/container";
import Link from "next/link";

export default function Success() {
  return (
    <Container>
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your order.</p>
      <Link href={"/shop"}>Continue Shopping</Link>
    </Container>
  );
}
