import produce from "immer";
import {
  DECREMENT,
  INCREMENT,
  ITEM_ADDED,
  ITEM_PRICE_UPDATE,
  ITEM_QUANTITY_UPDATE,
  ITEM_REMOVED,
  SET,
  TIP_PERCENTAGE_CHANGED,
} from "./actions";

let id = 0;

export const initialState = {
  count: 0,
  menu: [
    { id: id++, name: "Awesome Tofu Roast", price: 14.99, quantity: 1 },
    { id: id++, name: "Braised Seitan", price: 22.99, quantity: 1 },
  ],
  tipPercentage: 5,
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

export const menuReducer = produce((menu = initialState.menu, action: any) => {
  if (action.type === ITEM_ADDED) {
    const item = { id: id++, quantity: 1, ...action.payload };
    menu.push(item);
  }

  if (action.type === ITEM_REMOVED) {
    return menu.filter((item) => item.id !== action.payload.id);
  }

  if (action.type === ITEM_PRICE_UPDATE) {
    const item = menu.find((item) => item.id === action.payload.id);
    if (item) item.price = parseInt(action.payload.price, 10);
  }

  if (action.type === ITEM_QUANTITY_UPDATE) {
    const item = menu.find((item) => item.id === action.payload.id);
    if (item) item.quantity = parseInt(action.payload.quantity, 10);
  }
}, initialState.menu);

export const tipPercentageReducer = (
  tipPercentage = initialState.tipPercentage,
  action: any
) => {
  if (action.type === TIP_PERCENTAGE_CHANGED) {
    return action.payload.tipPercentage;
  }

  return tipPercentage;
};
