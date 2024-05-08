import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const countAllProducts = async () => {
  const count = await prisma.product.count();
  return count;
};

export const getProductsOnStock = async (uuid: string) => {
  const products = await prisma.product.findMany({
    include: {
      stocks: {
        where: { uuid: uuid },
      },
    },
  });
  return products;
};

export const countProduct = async (sku: string) => {
  const count = await prisma.productStock.aggregate({
    _sum: { quantity: true },
    where: { product: { sku: sku } },
  });
  return count._sum.quantity || 0;
};

export const countProductOnStock = async (uuid: string, sku: string) => {
  const count = await prisma.productStock.aggregate({
    _sum: { quantity: true },
    where: {
      product: { sku: sku },
      stock: { uuid: uuid },
    },
  });
  return count._sum.quantity || 0;
};

export const countProductByCategory = async (slug: string) => {
  const count = await prisma.product.count({
    include: {
      categories: {
        where: { slug: slug },
      },
    },
  });
  return count;
};

export const countProductOnStockByCategory = async (
  uuid: string,
  slug: string
) => {
  const count = await prisma.productStock.aggregate({
    _sum: { quantity: true },
    where: {
      product: {
        include: {
          categories: {
            where: { slug: slug },
          },
        },
      },
      stock: { uuid: uuid },
    },
  });
  return count._sum.quantity || 0;
};
