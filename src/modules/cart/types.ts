import { IProduct } from "../product/types";

export interface ICartItem {
  id: number;
  quantity: number;
  product: IProduct;
}

export interface ICart {
  id: number;
  userId: number;
  items: ICartItem[];
  total: number;
  totalItems: number;
}
