import { getProducts } from "@/modules/products/api/get-products";
import { ProductContent } from "@/modules/products/components/product";

const ProductPage = async () => {
  const { products } = await getProducts();

  // TODO: make api call here for getting product by id from backend and pass single product

  return <ProductContent products={products} />;
};

export default ProductPage;
