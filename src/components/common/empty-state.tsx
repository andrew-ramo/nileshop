import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
};

export function EmptyState({ title, description, action }: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex gap-2 items-center">
        <Inbox size={20} />
        <div className="flex flex-col gap-2">
          <p className="text-xl text-foreground">{title}</p>
          <p className="text-lg text-foreground">{description}</p>
        </div>
      </div>
      {action && (
        <Link href={action.href}>
          <Button>{action.label}</Button>
        </Link>
      )}
    </div>
  );
}
