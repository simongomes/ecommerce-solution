import { combineReducers } from "redux";
import productsReducer from "./product-reducer";
import cartReducer from "./cart-reducer";
import reviewsReducer from "./review-reducer";

/**
 * The root reducer for the e-commerce solution application.
 *
 * This combines the following reducers:
 * - `productsReducer`: Manages the state related to products.
 * - `cartReducer`: Manages the state related to the shopping cart.
 * - `reviewsReducer`: Manages the state related to product reviews.
 *
 * @constant
 * @type {Reducer}
 */
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
