import { Products } from "@/modules/products/types/product.types";
import data from "@/data/mock-products.json";

export const getProducts = async () => {
  return data as Products;
};
