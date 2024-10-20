import { Dispatch } from "redux";
import {
  ADD_TO_CART,
  SET_CART_TOTAL,
  SET_CART_COUNT,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from "../action-types";
import { ICartItem } from "@/modules/cart/types";

/**
 * Adds a product to the cart.
 *
 * This thunk action dispatches the following actions:
 * - `ADD_TO_CART`: Adds the provided item to the cart.
 * - `SET_CART_TOTAL`: Updates the total price of the cart.
 * - `SET_CART_COUNT`: Updates the total count of items in the cart.
 *
 * @param {ICartItem} item - The item to be added to the cart.
 * @returns {Function} A thunk function that dispatches the necessary actions.
 */
export const addProductToCart = (item: ICartItem) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: item });
    dispatch({ type: SET_CART_TOTAL });
    dispatch({ type: SET_CART_COUNT });
  };
};

/**
 * Asynchronous thunk action to remove a product from the cart.
 *
 * @param {number} id - The unique identifier of the product to be removed.
 * @returns {Function} A thunk function that dispatches actions to update the cart state.
 */
export const removeProductFromCart = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
    dispatch({ type: SET_CART_TOTAL });
    dispatch({ type: SET_CART_COUNT });
  };
};

/**
 * Thunk action to update the quantity of a product in the cart.
 *
 * This function dispatches actions to update the quantity of a specific product
 * in the cart, recalculate the total price of the cart, and update the total
 * count of items in the cart.
 *
 * @param id - The unique identifier of the product.
 * @param quantity - The new quantity of the product.
 * @returns A thunk action that dispatches the necessary actions to update the cart.
 */
export const updateProductQuantity = (id: number, quantity: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: UPDATE_CART_QUANTITY, payload: { id, quantity } });
    dispatch({ type: SET_CART_TOTAL });
    dispatch({ type: SET_CART_COUNT });
  };
};
