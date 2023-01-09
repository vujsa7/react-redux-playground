import React, { useState } from "react";

export type ItemProperties = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type MenuItemProperties = {
  item: ItemProperties;
  removeItem?: () => void;
  updatePrice?: (price: number) => void;
  updateQuantity?: (quantity: number) => void;
};

const MenuItem = ({
  item,
  removeItem,
  updatePrice,
  updateQuantity,
}: MenuItemProperties) => {
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div className="border-1 border-white w-full flex flex-col p-20px bg-cyan-800 bg-opacity-20">
      <h3 className="mb-5px">{item.name}</h3>
      <div className="flex gap-10px items-end">
        <label className="w-3/4">
          Price
          <input
            className="w-full bg-transparent rounded border-1 p-10px"
            step={0.01}
            type="number"
            value={price ?? 0}
            onChange={(event) => {
              let newPrice = event.target.value
                ? parseFloat(event.target.value)
                : 0;
              setPrice(newPrice);
              updatePrice && updatePrice(newPrice);
            }}
          />
        </label>
        <label className="w-3/4">
          Quantity
          <input
            className="w-full bg-transparent rounded border-1 p-10px"
            type="number"
            value={quantity ?? 0}
            onChange={(event) => {
              let newQuantity = event.target.value
                ? parseInt(event.target.value)
                : 0;
              setQuantity(newQuantity);

              updateQuantity && updateQuantity(newQuantity);
            }}
          />
        </label>
        <div className="flex flex-col w-full items-end">
          <h4>Total</h4>
          <p>${(quantity * price).toFixed(2)}</p>
          <button
            onClick={() => removeItem && removeItem()}
            className="rounded border-pink-800 border-1 rounded text-red-600 px-16px mt-10px py-10px"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
