import Layout from "../Layout/Layout";
import AddItem from "./components/AddItem";
import MenuList from "./components/MenuList";

const MenuSection = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full items-center">
        <h1>Menu Example</h1>
        <p className="text-cyan-300 mb-30px">
          Redux using Connect API to wrap components
        </p>
        <div className="flex flex-col gap-30px w-full items-center">
          <AddItem />
          <MenuList />
        </div>
      </div>
    </Layout>
  );
};

export default MenuSection;
