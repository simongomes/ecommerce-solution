import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Select } from "antd";
import Product from "./product";
import ProductPlaceholder from "@/components/product-placeholder";
import { fetchProducts } from "@/store/thunks/product-thunks";
import { addProductToCart } from "@/store/thunks/cart-thunks";
import { IProduct } from "../types";
import { RootState } from "@/store";

import "./styles.css";

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products: IProduct[] = useSelector(
    (state: RootState) => state.products.products
  );

  const [pages, setPages] = useState({
    current: 10,
  });

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products.length < 1) {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products.slice(0, pages.current));
  }, [products, pages.current]);

  /**
   * Adds a product to the cart.
   *
   * @param {number} id - The unique identifier of the product to be added to the cart.
   * @returns {void}
   */
  const addToCart = (id: number) => {
    const product = products.find((product) => product.id === id);
    dispatch(addProductToCart({ id, quantity: 1, product }));
  };

  /**
   * Handles the pagination logic by incrementing the current page by 5.
   * Updates the state with the new current page value.
   *
   * @returns {void}
   */
  const handlePagination = () => {
    setPages((prevState) => ({
      ...prevState,
      current: prevState.current + 5,
    }));
  };

  const handleFilter = (filter: string) => {
    switch (filter) {
      case "low": {
        setFilteredProducts(
          products
            .slice(0, pages.current)
            .sort((a, b) => Number(a.price) - Number(b.price))
        );

        break;
      }
      case "high": {
        setFilteredProducts(
          products
            .slice(0, pages.current)
            .sort((a, b) => Number(b.price) - Number(a.price))
        );

        break;
      }
      default:
        setFilteredProducts(products.slice(0, pages.current));
    }
  };

  return (
    <>
      <div className="product-filter">
        <Select
          defaultValue="default"
          style={{ width: 120 }}
          onChange={handleFilter}
          options={[
            { value: "default", label: "Select Filter" },
            { value: "low", label: "Low -> High" },
            { value: "high", label: "High -> Low" },
          ]}
        />
      </div>
      <div className="product-list">
        {products.length < 1 && <ProductPlaceholder />}
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            category={product.category}
            rating={product.rating}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="load-more-button">
        <Button
          onClick={handlePagination}
          type="primary"
          disabled={pages.current >= products.length}
        >
          Load More {pages.current}/{products.length}
        </Button>
      </div>
    </>
  );
};

export default ProductList;
