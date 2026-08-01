import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-12", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
