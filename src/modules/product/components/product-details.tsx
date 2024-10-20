import React, { useRef, useEffect } from "react";
import { Button } from "antd";
import { IProduct } from "../types";
import "./styles.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { addProductToCart } from "@/store/thunks/cart-thunks";
import { useDispatch } from "react-redux";
import RelatedProducts from "./related-products";
import Reviews from "@/modules/reviews";

const ProductDetails: React.FC<IProduct> = ({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const products: IProduct[] = useSelector(
    (state: RootState) => state.products.products
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "1";
    }
  }, []);

  const addToCart = (id: number) => {
    const product = products.find((product) => product.id === id);
    dispatch(
      addProductToCart({ id, quantity: +inputRef.current.value, product })
    );
  };

  return (
    <>
      <div className="product-details" key={id}>
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-info">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Price:</strong> {price}
          </p>
          <p>
            <strong>Rating:</strong> {rating.rate}
          </p>
          <div className="actions">
            <input type="number" ref={inputRef} min={1} />
            <Button type="primary" onClick={() => addToCart(id)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <RelatedProducts category={category} />
      <Reviews productId={id.toString()} />
    </>
  );
};

export default ProductDetails;
