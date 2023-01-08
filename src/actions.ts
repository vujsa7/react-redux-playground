// Flux Standard Actions API for writing actions
// Counter Actions
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";

// Action creators
// Counter Actions
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const set = (value: number) => ({ type: SET, payload: value });

// MenuActions
export const ITEM_ADDED = "ITEM_ADDED";
export const addItem = (name: string, price: number) => ({
  type: ITEM_ADDED,
  payload: { name: name, price: price },
});
