import { supabase } from "@/lib/supabase";
import type { Product } from "@/features/products/types/product";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");
  if (error !== null) throw error;
  return data;
}
