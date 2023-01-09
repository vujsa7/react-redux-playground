import Layout from "../Layout/Layout";
import { AddItemContainer } from "./containers/AddItemContainer";
import { MenuListContainer } from "./containers/MenuListContainer";
import { ReceiptContainer } from "./containers/ReceiptContainer";

const MenuSection = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full items-center">
        <h1>Menu & Order Example</h1>
        <p className="text-cyan-300 mb-30px">
          Redux using Connect API to wrap components
        </p>
        <div className="flex flex-col gap-30px w-full items-center">
          <AddItemContainer />
          <MenuListContainer />
          <ReceiptContainer />
        </div>
      </div>
    </Layout>
  );
};

export default MenuSection;
