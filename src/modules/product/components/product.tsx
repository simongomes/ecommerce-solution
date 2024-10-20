import React from "react";
import { Card } from "antd";

import { IProduct } from "../types";
import { Link } from "react-router-dom";

const Product: React.FC<IProduct> = (props) => {
  const { id, title, price, image, category, rating, related, addToCart } =
    props;

  const addDefaultSrc = (e, src: string): void => {
    e.target.src = src;
  };

  return (
    <Card
      className="product-card"
      loading={false}
      style={{ width: 300 }}
      cover={
        <Link to={`/product/${id}`}>
          <img
            onError={(e) => addDefaultSrc(e, category)}
            alt="example"
            src={image}
          />
        </Link>
      }
      actions={
        related
          ? []
          : [
              <span>${price}</span>,
              <span>Rating {rating.rate}</span>,
              <>
                <span
                  onClick={() => {
                    addToCart(id);
                  }}
                >
                  Add To Cart
                </span>
              </>,
            ]
      }
    >
      <Link to={`/product/${id}`}>
        <Card.Meta title={title} />
      </Link>
    </Card>
  );
};

export default Product;
