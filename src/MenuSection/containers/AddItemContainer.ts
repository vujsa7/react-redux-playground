import { connect } from "react-redux";
import { addItem } from "../../actions";
import AddItem from "../components/AddItem";

// mapDispatchToProps can also be an object and it can be passed to connect function
// It will automatically wrap every prop with dispatch
const mapDispatchToProps = {
  onSubmit: (name: string, price: number) => addItem(name, price),
};

export const AddItemContainer = connect(null, mapDispatchToProps)(AddItem);
