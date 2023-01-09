// Counter Actions
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const set = (value: number) => ({ type: SET, payload: value });

// Menu Actions
export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVED = "ITEM_REMOVED";
export const ITEM_PRICE_UPDATE = "ITEM_PRICE_UPDATE";
export const ITEM_QUANTITY_UPDATE = "ITEM_QUANTITY_UPDATE";

export const addItem = (name: string, price: number) => ({
  type: ITEM_ADDED,
  payload: { name: name, price: price },
});

export const removeItem = (id: number) => ({
  type: ITEM_REMOVED,
  payload: { id: id },
});

export const updatePrice = (id: number, price: number) => ({
  type: ITEM_PRICE_UPDATE,
  payload: { id: id, price: price },
});

export const updateQuantity = (id: number, quantity: number) => ({
  type: ITEM_QUANTITY_UPDATE,
  payload: { id: id, quantity: quantity },
});


// Tip Percentage actions
export const TIP_PERCENTAGE_CHANGED = "TIP_PERCENTAGE_CHANGED";

export const updateTipPercentage = (tipPercentage: number) => ({
  type: TIP_PERCENTAGE_CHANGED,
  payload: { tipPercentage: tipPercentage },
});
