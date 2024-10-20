import { SET_PRODUCT_REVIEWS } from "../action-types";

interface ReviewState {
  reviews: Record<string, any>;
}

const initialState: ReviewState = {
  reviews: {},
};

export const ReviewStateType = typeof initialState;

/**
 * Reducer function to handle actions related to product reviews.
 *
 * @param state - The current state of the reviews.
 * @param action - The action dispatched to the reducer.
 * @returns The new state of the reviews after applying the action.
 *
 * @remarks
 * This reducer handles the following action types:
 * - `SET_PRODUCT_REVIEWS`: Adds a new review to the list of reviews for a specific product.
 *
 * @example
 * // Action to add a review
 * const action = {
 *   type: SET_PRODUCT_REVIEWS,
 *   payload: {
 *     productId: '123',
 *     review: { rating: 5, comment: 'Great product!' }
 *   }
 * };
 *
 * // Initial state
 * const initialState = {
 *   reviews: {}
 * };
 *
 * // New state after the action is dispatched
 * const newState = reviewReducer(initialState, action);
 * // newState.reviews['123'] will contain the new review
 */
const reviewReducer = (state = initialState, action: any): ReviewState => {
  switch (action.type) {
    case SET_PRODUCT_REVIEWS: {
      const { productId, review } = action.payload;
      const existingReviews = state.reviews[productId] || [];

      if (existingReviews.length > 0) {
        return {
          ...state,
          reviews: {
            ...state.reviews,
            [productId]: [...existingReviews, review],
          },
        };
      } else {
        return {
          ...state,
          reviews: {
            ...state.reviews,
            [productId]: [review],
          },
        };
      }
    }
    default:
      return state;
  }
};

export default reviewReducer;
