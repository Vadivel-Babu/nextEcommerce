export type Product = {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
};
