import { ICart } from "@/modules/cart/types";
import {
  ADD_TO_CART,
  SET_CART_TOTAL,
  SET_CART_COUNT,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
} from "../action-types";

type ActionType = {
  type: string;
  payload: any;
};

const initialState: ICart = {
  id: 1, // cart will need an id as eventually there will be multiple carts for different user
  userId: 1, // for now using 1 as teh user id but in real app this will be dynamic
  items: [],
  total: 0, // total price of teh cart items for easy access in teh UI
  totalItems: 0, // total number of items in the cart
};

export const CartStateType = typeof initialState;

/**
 * Calculates the total price of items in the cart.
 *
 * @param items - An array of cart items, where each item contains a product with a price and a quantity.
 * @returns The total price of all items in the cart.
 */
const calculateTotal = (items: ICart["items"]) => {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
};

/**
 * Calculates the total number of items in the cart.
 *
 * @param items - An array of cart items, where each item has a quantity property.
 * @returns The total quantity of all items in the cart.
 */
const calculateTotalItems = (items: ICart["items"]) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

/**
 * Reducer function to manage the state of the shopping cart.
 *
 * @param {ICart} state - The current state of the cart.
 * @param {ActionType} action - The action to be processed.
 * @returns {ICart} The updated state of the cart.
 *
 * The reducer handles the following action types:
 * - `ADD_TO_CART`: Adds a product to the cart or updates the quantity if the product already exists.
 * - `REMOVE_FROM_CART`: Removes a product from the cart by its ID.
 * - `UPDATE_CART_QUANTITY`: Updates the quantity of a specific product in the cart.
 * - `SET_CART_TOTAL`: Sets the total price of the cart by calculating the sum of all items.
 * - `SET_CART_COUNT`: Sets the total number of items in the cart.
 * - `CLEAR_CART`: Clears all items from the cart, resetting the total and item count to zero.
 */
const cartReducer = (state = initialState, action: ActionType): ICart => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, quantity, product } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: id,
              quantity,
              product: product,
            },
          ],
        };
      }
    }
    case REMOVE_FROM_CART: {
      const id = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== id),
      };
    }
    case UPDATE_CART_QUANTITY: {
      const { id, quantity } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === id ? { ...item, quantity } : item
        ),
      };
    }
    case SET_CART_TOTAL: {
      return {
        ...state,
        total: calculateTotal(state.items),
      };
    }
    case SET_CART_COUNT: {
      return {
        ...state,
        totalItems: calculateTotalItems(state.items),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        items: [],
        total: 0,
        totalItems: 0,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
