import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addItem } from "../../actions";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addItem }, dispatch);

  return (
    <div className="border-1 border-white w-2/5 flex flex-col items-center p-20px">
      <h3>Add To Menu</h3>
      <div className="w-full flex flex-col gap-10px items-end">
        <label className="w-full mb-10px">
          Item Name
          <input
            className="w-full bg-transparent rounded border-1 p-10px"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label className="w-full mb-20px">
          Price
          <input
            className="w-full bg-transparent rounded border-1 p-10px"
            type="number"
            value={price}
            onChange={(event) => {
              setPrice(parseFloat(event.target.value));
            }}
            step="1"
          />
        </label>
        <button
          className="w-full rounded bg-pink-600 px-16px py-10px"
          onClick={() => {
            actions.addItem(name, price);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddItem;
