import { Container } from "@/shared/components/container";
import Image from "next/image";

import banner from "public/workspace.jpg";
import { getProducts } from "@/modules/products/api/get-products";
import { ProductsList } from "@/modules/products/components/products-list";

export default async function Home() {
  // TODO: make api call here for getting products from backend

  const { products } = await getProducts();

  return (
    <Container>
      <div className="mb-4 mb-5 flex flex-col items-center gap-2 lg:flex-row">
        <div className="lg:order-0 order-1 flex flex-1 flex-col">
          <h1 className="text-2xl font-bold">Some title of product</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            dicta, doloribus eos est maxime natus necessitatibus nemo suscipit
            velit vitae.
          </p>
        </div>
        <div className="order-0 relative flex-1 overflow-hidden rounded-lg lg:order-1">
          <Image src={banner} alt="banner" objectFit="contain" />
        </div>
      </div>
      <ProductsList products={products} />
    </Container>
  );
}
