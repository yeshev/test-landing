export type Product = {
  id: number;
  title: string;
  description: string;
  type: string[];
};

export type Products = {
  products: Product[];
};
