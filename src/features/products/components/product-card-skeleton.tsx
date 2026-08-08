import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <Card>
      <div className="aspect-square">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <Skeleton className="w-1/2 h-5" />
        <Skeleton className="w-1/4 h-4" />
        <Skeleton className="w-1/5 h-3" />
      </div>
    </Card>
  );
}
