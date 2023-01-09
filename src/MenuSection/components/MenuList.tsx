import { MenuItemContainer } from "../containers/MenuItemContainer";
import { ItemProperties } from "./MenuItem";

const MenuList = ({ menu }: { menu?: ItemProperties[] }) => {
  return (
    <div className="border-1 border-white w-2/5 flex flex-col items-center gap-20px p-20px">
      <h3>Your Order</h3>
      {menu &&
        menu.map((item: ItemProperties) => (
          <MenuItemContainer key={item.id} item={item}></MenuItemContainer>
        ))}
    </div>
  );
};

export default MenuList;
