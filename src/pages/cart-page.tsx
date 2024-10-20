import React, { FC } from "react";
import Cart from "@/modules/cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CartPage: FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return <Cart cart={cart} />;
};

export default CartPage;
