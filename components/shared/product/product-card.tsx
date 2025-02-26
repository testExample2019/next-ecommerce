import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "@/components/shared/product/product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className={"w-full max-w-sm"}>
      <CardHeader className={"p-0 items-center"}>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={200}
            width={200}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className={"p-4 gap-4"}>
        <div className={"text-xs"}>{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className={"text-sm font-medium"}></h2>
        </Link>
        <div className={"flex-between gap-4"}>
          <p>{product.rating} Stars</p>
          <p className={"font-bold"}>
            {product.stock > 0 ? (
              <ProductPrice value={Number(product.price)} />
            ) : (
              <span className={"font-normal text-red-700"}>Out of stock</span>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
