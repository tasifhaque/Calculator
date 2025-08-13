import { useState } from "react";

function Calculator() {
  const [data, setData] = useState("");
  const getValue = (event) => {
    console.log(event.target.value);
    setData(data.concat(event.target.value));
  };
  const remove = () => {
    setData(data.slice(0, -1));
  };
  const dlt = () => {
    setData("");
  };
  const equal = () => {
    setData(eval(data).toString());
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <div className="border w-100 h-150 rounded-4xl p-2 bg-gray-300">
        <div className="flex flex-col mt-5 p-4 ">
          <input
            type="text"
            placeholder="0"
            className="text-end rounded outline-none px-2 py-5 bg-gray-400 text-4xl font-bolder gap-2"
            value={data}
          />
          <div className="grid grid-cols-4 mt-14 gap-4 [&>*:nth-child(1)]:bg-amber-300">
            {[
              "AC",
              "+-",
              "%",
              "C",
              "7",
              "8",
              "9",
              "/",
              "4",
              "5",
              "6",
              "*",
              "1",
              "2",
              "3",
              "-",
              "0",
              ".",
              "=",
              "+",
            ].map((val) => {
              if (val === "AC") {
                return (
                  <button
                    onClick={dlt}
                    value={val}
                    className="rounded-2xl  py-4 text-2xl font-bolder cursor-pointer hover:bg-gray-500  bg-purple-300 active:bg-gray-300 "
                  >
                    {val}
                  </button>
                );
              } else if (val === "=") {
                return (
                  <button
                    onClick={equal}
                    value={val}
                    className="rounded-2xl  py-4 text-2xl font-bolder cursor-pointer hover:bg-gray-500  bg-purple-300 active:bg-gray-300 "
                  >
                    {val}
                  </button>
                );
              } else if (val === "C") {
                return (
                  <button
                    onClick={remove}
                    value={val}
                    className="rounded-2xl  py-4 text-2xl font-bolder cursor-pointer hover:bg-gray-500  bg-purple-300 active:bg-gray-300 "
                  >
                    {val}
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={getValue}
                    value={val}
                    className="rounded-2xl  py-4 text-2xl font-bolder cursor-pointer hover:bg-gray-500  bg-purple-300 active:bg-gray-300 "
                  >
                    {val}
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
