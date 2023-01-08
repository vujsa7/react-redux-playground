import Counter from "./Counter/Counter";
import MenuSection from "./MenuSection/MenuSection";

const App = (): JSX.Element => {
  return (
    <div className="px-40px w-full bg-dark-400 min-h-100vh">
      <Counter />
      <MenuSection />
    </div>
  );
};

export default App;
