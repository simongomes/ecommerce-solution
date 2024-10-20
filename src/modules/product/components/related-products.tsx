import { RootState } from "@/store";
import { FC } from "react";
import { useSelector } from "react-redux";
import { getRelatedProducts } from "@/utils/helpers";
import Product from "./product";

type PropTypes = {
  category: string;
};
const RelatedProducts: FC<PropTypes> = ({ category }) => {
  const products = useSelector((state: RootState) => state.products.products);
  const relatedProducts = getRelatedProducts(products, category);

  return (
    <>
      <h2>You may also like:</h2>
      <div className="related-products">
        {relatedProducts.map((product) => (
          <Product key={product.id} {...product} related />
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
