import { useState } from "react";

export type ReceiptProperties = {
  subtotal?: number;
  tipAmount?: number;
  total?: number;
  updateTipPercentage?: (tipPercentage: number) => void;
};

const tipOptions = [
  {
    label: "0%",
    value: 0,
  },
  {
    label: "5%",
    value: 5,
  },
  {
    label: "10%",
    value: 10,
  },
  {
    label: "20%",
    value: 20,
  },
];

const Receipt = ({
  subtotal = 0,
  tipAmount = 0,
  total = 0,
  updateTipPercentage,
}: ReceiptProperties) => {
  const [tip, setTip] = useState(5);

  return (
    <div className="border-1 border-white w-2/5 flex flex-col items-center gap-20px p-20px">
      <h3>Summary</h3>
      <label className="w-full">
        How much would you like to tip?
        <select
          className="w-full bg-transparent rounded border-1 p-10px"
          onChange={(event) => {
            let newTip = event.target.value ? parseInt(event.target.value) : 0;
            setTip(newTip);
            updateTipPercentage && updateTipPercentage(newTip);
          }}
          defaultValue={tip}
        >
          {tipOptions.map((option, index) => (
            <option
              key={index}
              className="bg-dark-500"
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <div className="flex flex-col w-full">
        <div className="flex mb-10px">
          <b>Subtotal:</b>
          <p className="ml-10px">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex mb-10px">
          <b>Tip Amount:</b>
          <p className="ml-10px">${tipAmount.toFixed(2)}</p>
        </div>
        <div className="flex mb-10px">
          <b>Total:</b>
          <p className="ml-10px">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
