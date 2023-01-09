import { connect } from "react-redux";
import { updateTipPercentage } from "../../actions";
import { State } from "../../types";
import Receipt from "../components/Receipt";

const mapStateToProps = (state: State) => {
  const menu = state.menu;
  let subtotal = 0;
  for (const item of menu) {
    subtotal += item.price * item.quantity;
  }

  const tipAmount = subtotal * (state.tipPercentage / 100);

  const total = subtotal + tipAmount;

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
