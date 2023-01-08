import { DECREMENT, INCREMENT, ITEM_ADDED, SET } from "./actions";

export const initialState = {
  count: 0,
  menu: [
    { name: "Awesome Tofu Roast", price: 14.99, quantity: 1 },
    { name: "Braised Seitan", price: 22.99, quantity: 1 },
  ],
};

export const counterReducer = (count = initialState.count, action: any) => {
  if (action.type === INCREMENT) {
    return count + 1;
  }

  if (action.type === DECREMENT) {
    return count - 1;
  }

  if (action.type === SET) {
    return parseInt(action.payload, 10);
  }

  return count;
};

export const menuReducer = (menu = initialState.menu, action: any) => {
  if (action.type === ITEM_ADDED) {
    const item = { quantity: 1, ...action.payload };
    return [...menu, item];
  }

  return menu;
};
