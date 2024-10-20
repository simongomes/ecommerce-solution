/**
 * This file defines action types for the application
 * Action types are used to define the type of action that is dispatched to the store
 */

// Product
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const START_PRODUCT_FETCHING = "START_PRODUCT_FETCHING";
export const END_PRODUCT_FETCHING = "END_PRODUCT_FETCHING";
export const SET_PRODUCT_FETCH_ERROR = "SET_PRODUCT_FETCH_ERROR";
export const SET_PRODUCT_DETAILS = "SET_PRODUCT_DETAILS";

// Cart
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const SET_CART = "SET_CART";
export const SET_CART_TOTAL = "SET_CART_TOTAL";
export const SET_CART_COUNT = "SET_CART_COUNT";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";

// Review
export const GET_PRODUCT_REVIEWS = "GET_PRODUCT_REVIEWS";
export const SET_PRODUCT_REVIEWS = "SET_PRODUCT_REVIEWS";
