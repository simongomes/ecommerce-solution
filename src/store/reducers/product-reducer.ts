import { IProduct } from "../../modules/product/types";
import {
  START_PRODUCT_FETCHING,
  SET_PRODUCTS,
  END_PRODUCT_FETCHING,
  SET_PRODUCT_FETCH_ERROR,
} from "../action-types";

type ActionType = {
  type: string;
  payload: any;
};

interface ProductsState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
  productDetails: IProduct | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  productDetails: null,
};

export const ProductStateType = typeof initialState;

/**
 * Reducer function to manage the state of products in the store.
 *
 * @param state - The current state of the products.
 * @param action - The action dispatched to modify the state.
 * @returns The new state of the products.
 *
 * @remarks
 * This reducer handles the following action types:
 * - `START_PRODUCT_FETCHING`: Sets the loading state to true and clears any existing error.
 * - `END_PRODUCT_FETCHING`: Sets the loading state to false.
 * - `SET_PRODUCT_FETCH_ERROR`: Sets the loading state to false and updates the error state with the payload.
 * - `SET_PRODUCTS`: Updates the products state with the payload, sets loading to false, and clears any existing error.
 * - `SET_PRODUCT_DETAILS`: Updates the product details state with the payload and sets loading to false.
 *
 * @example
 * // Example action to start fetching products
 * const action = { type: 'START_PRODUCT_FETCHING' };
 * const newState = productsReducer(currentState, action);
 */
const productsReducer = (
  state = initialState,
  action: ActionType
): ProductsState => {
  switch (action.type) {
    case START_PRODUCT_FETCHING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case END_PRODUCT_FETCHING: {
      return {
        ...state,
        loading: false,
      };
    }
    case SET_PRODUCT_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    }
    case "SET_PRODUCT_DETAILS": {
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
