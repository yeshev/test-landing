"use client";

import { FC } from "react";
import { ProductProps } from "@/modules/products/components/product/product.interfaces";
import { Container } from "@/shared/components/container";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/shared/components/button";
import { ROUTES_MAP } from "@/shared/constants/routes-map.constants";

export const ProductContent: FC<ProductProps> = ({ products }) => {
  const params = useParams<{ productId: string }>();
  const router = useRouter();

  const product = products.find(
    (currentProduct) => currentProduct.id === Number(params.productId),
  );

  const onClick = () => {
    router.push(ROUTES_MAP.home);
  };

  if (!product) {
    return <Container>Not Found</Container>;
  }

  return (
    <Container>
      <div className="flex flex-col gap-3">
        <Button onClick={onClick}>Back</Button>
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="line-clamp-4">{product.description}</p>
      </div>
    </Container>
  );
};
