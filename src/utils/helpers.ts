import { IProduct } from "@/modules/product/types";

/**
 * Retrieves a list of related products based on the specified category.
 *
 * @param products - An array of products to filter from.
 * @param category - The category to filter products by.
 * @param limit - The maximum number of related products to return. Defaults to 3.
 * @returns An array of related products limited by the specified number.
 */
export const getRelatedProducts = (
  products: IProduct[],
  category: string,
  limit = 3
) => {
  return products
    .filter((product: IProduct) => product.category === category)
    .slice(0, limit);
};
