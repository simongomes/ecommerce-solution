export type TRating = {
  rate: number;
  count: number;
};

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: TRating;
  related?: boolean;
  addToCart: (id: number, quantity?: number) => void;
}
