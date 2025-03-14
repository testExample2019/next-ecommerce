import React from "react";
import ProductCard from "@/components/shared/product/product-card";
import { Product } from "@/types";

const ProductList = ({
  data,
  title = "Product List",
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  return (
    <div className={"my-10"}>
      <h2>{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {data
            ?.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))
            .slice(0, limit)}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductList;
