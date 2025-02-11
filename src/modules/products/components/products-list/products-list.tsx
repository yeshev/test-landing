"use client";

import { FC, useMemo, useState } from "react";
import { ProductsListProps } from "@/modules/products/components/products-list/products-list.interfaces";
import Link from "next/link";
import { Button } from "@/shared/components/button";
import { Product } from "@/modules/products/types/product.types";
import { Input } from "@/shared/components/input";

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleFilterClick = (type: string) => () => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes((prev) => prev.filter((item) => item !== type));
    } else {
      setSelectedTypes((prev) => [...prev, type]);
    }
  };

  const allTypes = useMemo(() => {
    return products.reduce<string[]>((acc, product) => {
      product.type.forEach((type) => {
        if (!acc.includes(type)) {
          acc.push(type);
        }
      });

      return acc;
    }, []);
  }, [products]);

  const filteredProducts = useMemo(() => {
    const productsByType: Product[] = products.reduce<Product[]>(
      (acc, product) => {
        const matchByType = product.type.some((type) =>
          selectedTypes.includes(type),
        );

        if (matchByType) {
          acc.push(product);
        }

        return acc;
      },
      [],
    );

    const currentProducts =
      selectedTypes.length === 0 ? products : productsByType;

    return currentProducts.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [products, selectedTypes, searchValue]);

  return (
    <div className="flex flex-col">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        {allTypes.map((type) => (
          <Button
            key={type}
            className="capitalize"
            variant={selectedTypes.includes(type) ? "primary" : "secondary"}
            onClick={handleFilterClick(type)}
          >
            {type}
          </Button>
        ))}
      </div>
      <div className="mb-3">
        <Input
          placeholder="Search your product"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          classes={{ root: "w-full max-w-xl" }}
        />
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/${product.id}`}
            className="flex w-full flex-col gap-2 rounded-lg bg-white p-4 text-black no-underline shadow-xl"
          >
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="line-clamp-4">{product.description}</p>
            <Button>More</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
