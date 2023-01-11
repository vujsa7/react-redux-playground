import { createSelector } from "reselect";
import { State } from "./types";

// We use functions for selectors because the state tree can change in the future, trying to be DRY
export const selectMenu = (state: State) => state.menu;
export const selectTipPercentage = (state: State) => state.tipPercentage;

export const selectSubtotal = createSelector([selectMenu], (menu) =>
  menu.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);

export const selectTotal = createSelector(
  [selectTipAmount, selectSubtotal],
  (tipAmount, subtotal) => tipAmount + subtotal
);
