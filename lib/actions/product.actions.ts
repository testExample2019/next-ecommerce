"use server";

import { convertToPlainObject } from "@/lib/utils";
import { prisma } from "@/db/prisma";

export const getLatestProducts = async () => {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
};
