import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "@/modules/product/components/product-details";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "@/store/thunks/product-thunks";
import { RootState } from "@/store";

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(
    (state: RootState) => state.products.productDetails
  );
  const isLoading = useSelector((state: RootState) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [productId, dispatch]);

  if (!product || isLoading) return "Loading...";

  return <ProductDetails {...product} />;
};

export default ProductPage;
