import { Inbox } from "lucide-react";

export function EmptyState() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-2 items-center">
        <Inbox size={20} />
        <p className="text-xl text-foreground">لا توجد منتجات متاحة حاليًا</p>
      </div>
    </div>
  );
}
