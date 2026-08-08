import { supabase } from "@/lib/supabase";
import type { Product } from "@/features/products/types/product";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*");
  if (error !== null) throw error;
  return data;
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    if (error.code === "PGRST116") return null;
    else {
      throw error;
    }
  }

  return data;
}
