import React from "react";

export type MenuItemProperties = {
  name: string;
  price: number;
  quantity: number;
};

const MenuItem = ({ item }: { item: MenuItemProperties }) => {
  return (
    <div className="border-1 border-white w-full flex flex-col p-20px bg-cyan-700 bg-opacity-20">
      <h3 className="mb-5px">{item.name}</h3>
      <div className="flex gap-10px items-end">
        <label className="w-3/4">
          Price
          <input
            className="w-full bg-transparent rounded border-1 p-10px"
            type="text"
            onChange={(event) => {
              item.price = parseFloat(event.target.value);
            }}
            value={item.price}
          />
        </label>
        <label className="w-3/4">
          Quantity
          <input
            className="w-full bg-transparent rounded border-1 p-10px"
            type="text"
            value={item.quantity}
          />
        </label>
        <div className="flex flex-col w-full items-end">
          <h4>Total</h4>
          <p>${item.quantity * item.price}</p>
          <button className="rounded border-pink-800 border-1 rounded text-red-600 px-16px mt-10px py-10px">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
