import { getProducts, getProductDetails } from "../../modules/product/services";
import { Dispatch } from "redux";
import {
  SET_PRODUCT_FETCH_ERROR,
  SET_PRODUCTS,
  START_PRODUCT_FETCHING,
  SET_PRODUCT_DETAILS,
  SET_PRODUCT_REVIEWS,
} from "../action-types";

/**
 * Thunk action to fetch products from the server.
 *
 * This function dispatches actions to manage the loading state and handle the
 * fetched data or any errors that occur during the fetch operation.
 *
 * @returns {Function} A thunk function that performs the asynchronous fetch operation.
 */
export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    // Start fetching products to enable loading state
    dispatch({ type: START_PRODUCT_FETCHING });

    getProducts()
      .then((data) => {
        dispatch({ type: SET_PRODUCTS, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: SET_PRODUCT_FETCH_ERROR, error });
      });
  };
};

/**
 * Fetches product details by product ID.
 *
 * This thunk action dispatches the following actions:
 * - `START_PRODUCT_FETCHING` to indicate the start of the fetching process.
 * - `SET_PRODUCT_DETAILS` with the fetched product data on success.
 * - `SET_PRODUCT_FETCH_ERROR` with the error on failure.
 *
 * @param id - The ID of the product to fetch details for.
 * @returns A thunk action that performs the asynchronous fetch operation.
 */
export const fetchProductDetails = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: START_PRODUCT_FETCHING });

    getProductDetails(id)
      .then((data) => {
        dispatch({ type: SET_PRODUCT_DETAILS, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: SET_PRODUCT_FETCH_ERROR, error });
      });
  };
};

/**
 * Asynchronous thunk action to set product reviews.
 *
 * This function dispatches an action to set the reviews for a specific product.
 *
 * @param {string} productId - The unique identifier of the product.
 * @param {string} review - The review content to be added for the product.
 * @returns {Function} A thunk function that dispatches the action to set the product reviews.
 */
export const setProductReviews = (productId: string, review: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SET_PRODUCT_REVIEWS, payload: { productId, review } });
  };
};
