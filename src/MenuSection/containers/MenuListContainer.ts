import { connect } from "react-redux";
import { State } from "../../types";
import MenuList from "../components/MenuList";

const mapStateToProps = (state: State) => {
  return {
    menu: state.menu,
  };
};

export const MenuListContainer = connect(mapStateToProps)(MenuList);
