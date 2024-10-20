import React, { FC } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICart } from "./types";
import CartItem from "./cart-item";
import { CLEAR_CART } from "@/store/action-types";

import "./styles-cart.css";

type PropsType = {
  cart: ICart;
};

const Cart: FC<PropsType> = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, total } = cart;

  const handleCheckout = () => {
    dispatch({ type: CLEAR_CART });
    navigate("/order-success");
  };

  return (
    <div className="cart-container">
      {items.length > 0 &&
        items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.product.title}
            price={item.product.price}
            quantity={item.quantity}
            image={item.product.image}
          />
        ))}
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
      <div className="cart-total">
        <Button type="primary" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
