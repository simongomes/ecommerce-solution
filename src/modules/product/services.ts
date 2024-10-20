import axios from "axios";

/**
 * Fetches a list of products from the Fake Store API.
 *
 * @returns {Promise<AxiosResponse<any>>} A promise that resolves to the response from the API containing the list of products.
 */
export const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response;
};

/**
 * Fetches the details of a product by its ID.
 *
 * @param {number} id - The unique identifier of the product.
 * @returns {Promise<AxiosResponse>} A promise that resolves to the response containing product details.
 */
export const getProductDetails = async (id: number) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response;
};
