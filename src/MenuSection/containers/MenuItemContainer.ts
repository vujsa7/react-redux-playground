import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { removeItem, updatePrice, updateQuantity } from "../../actions";
import MenuItem, { MenuItemProperties } from "../components/MenuItem";

// This is a function is passed as the second argument to connect APIs function.
// mapDispatchToProps takes dispatch as the first argument and returns an object that will be passed into the component
const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  ownProps: MenuItemProperties
) => {
  return bindActionCreators(
    {
      removeItem: () => removeItem(ownProps.item.id),
      updatePrice: (price) => updatePrice(ownProps.item.id, price),
      updateQuantity: (quantity) => updateQuantity(ownProps.item.id, quantity),
    },
    dispatch
  );
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
