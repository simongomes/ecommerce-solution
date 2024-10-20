import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./styles-cart.css";
import {
  removeProductFromCart,
  updateProductQuantity,
} from "@/store/thunks/cart-thunks";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  // onRemove: (id: number) => void;
  // onQuantityChange: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  quantity,
  image,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current!.value = quantity.toString();
  }, [quantity]);

  const handleRemove = () => {
    //@ts-ignore
    dispatch(removeProductFromCart(id));
  };

  const handleQuantityChange = () => {
    const quantity = parseInt(inputRef.current!.value);
    //@ts-ignore
    dispatch(updateProductQuantity(id, quantity));
  };

  return (
    <div className="cart-item" key={id}>
      <img src={image} alt="Product" width="50" height="50" />
      <h4 className="product-title">{title}</h4>
      <p>Price: ${price * quantity}</p>
      <p>
        Quantity:{" "}
        <input
          onChange={handleQuantityChange}
          style={{ width: "40px", textAlign: "center" }}
          type="number"
          ref={inputRef}
          min={1}
        />
      </p>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default CartItem;
