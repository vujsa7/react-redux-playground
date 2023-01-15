import { createSelector } from "reselect";
import { State } from "./types";

// We should avoid getting data from state and syncing it with a variable created with useState inside of a component
// All parts, calculations and filtering of the state that we want to use in our components should be done via selectors
// Selectors solve the issue of unperformant rendering 

// We use functions for selectors because the state tree can change in the future, trying to be flexible
export const selectMenu = (state: State) => state.menu;
export const selectTipPercentage = (state: State) => state.tipPercentage;

// This is a selector, it takes in an array of state objects, and as a second argument it takes a function
// whose arguments are state objects that are passed in the array and returns the result that we want to get from the state
// Then createSelector returns MEMOIZED selector that will be rerendered inside a component only if something in that selector changes
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
