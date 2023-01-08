import { useSelector } from "react-redux";
import { State } from "../../types";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const menu = useSelector((state: State) => state.menu);

  return (
    <div className="border-1 border-white w-2/5 flex flex-col items-center gap-20px p-20px">
      <h3>Menu</h3>
      {menu && menu.map((item) => <MenuItem item={item}></MenuItem>)}
    </div>
  );
};

export default MenuList;
