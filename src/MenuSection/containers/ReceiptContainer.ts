import { connect } from "react-redux";
import { updateTipPercentage } from "../../actions";
import { selectSubtotal, selectTipAmount, selectTotal } from "../../selectors";
import { State } from "../../types";
import Receipt from "../components/Receipt";

// This is not the best way to get computed values from state because it can get very expensive because of too much rendering
// Selectors used with useSelector or mapState will be re-run after every dispatched action, regardless of what section of
// the Redux root state was actually updated. Re-running expensive calculations when the input state sections didn't change is a waste of CPU time,
// and it's very likely that the inputs won't have changed most of the time anyway.
// useSelector and mapState rely on === reference equality checks of the return values to determine if the component needs to re-render.
// If a selector always returns new references, it will force the component to re-render even if the derived data is effectively
// the same as last time. This is especially common with array operations like map() and filter(), which return new array references.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notPerformantMapStateToProps = (state: State) => {
  const menu = state.menu;
  let subtotal = 0;
  for (const item of menu) {
    subtotal += item.price * item.quantity;
  }

  const tipAmount = subtotal * (state.tipPercentage / 100);

  const total = subtotal + tipAmount;

  return { subtotal: subtotal, tipAmount: tipAmount, total: total };
};

const mapStateToProps = (state: State) => {
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return { subtotal: subtotal, tipAmount: tipAmount, total: total };
};

const mapDispatchToProps = {
  updateTipPercentage: (tipPercentage: number) =>
    updateTipPercentage(tipPercentage),
};

export const ReceiptContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Receipt);
