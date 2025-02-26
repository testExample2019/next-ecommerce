import { z } from "zod";
import { formatNumberWithDecimal } from "@/lib/utils";
const currency = z
  .string()
  .refine(
    (val) => /^\d+$/.test(formatNumberWithDecimal(+val)),
    "Price must have two decimals",
  );
export const insertProductsSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "Brand must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string().min(1, "Product must be at least one image")),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
