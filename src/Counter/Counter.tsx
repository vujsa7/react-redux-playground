import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment, set } from "../actions";
import Layout from "../Layout/Layout";
import { State } from "../types";

const Counter = () => {
  const count = useSelector((state: State) => state.count);
  const [inputValue, setInputValue] = useState(count);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  return (
    <Layout>
      <div className="flex flex-col w-full items-center">
        <h1>Counter Example</h1>
        <p className="text-cyan-300 mb-30px">
          Basic Redux example with dispatching actions and React Hooks
        </p>
        <div className="border-1 border-white w-450px flex flex-col items-center p-20px m-auto">
          <h3 className="">Count from Redux store</h3>
          <h2 className="my-auto">{count}</h2>
          <div className="flex w-full gap-10px mb-15px">
            <button
              className="w-full rounded bg-pink-600 px-16px py-10px"
              onClick={() => {
                actions.increment();
              }}
            >
              Increment
            </button>
            <button
              className="w-full rounded bg-pink-600 px-16px py-10px"
              onClick={() => {
                actions.decrement();
              }}
            >
              Decrement
            </button>
            <button
              className="w-full rounded bg-pink-600 px-16px py-10px"
              onClick={() => {
                actions.set(0);
              }}
            >
              Reset
            </button>
          </div>
          <div className="flex flex-col w-full items-center gap-20px">
            <span>or set counter</span>
            <div className="flex gap-10px w-full">
              <input
                className="w-full bg-transparent rounded border-1 p-10px"
                type="number"
                step="1"
                onChange={(event) => {
                  setInputValue(parseInt(event.target.value));
                }}
              />
              <button
                className="w-full rounded bg-pink-600 px-16px py-10px"
                onClick={() => {
                  actions.set(inputValue);
                }}
              >
                Set
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Counter;
