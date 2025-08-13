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
          <div className="grid grid-cols-4 mt-14 gap-4 [&>*:nth-child(2)]:bg-yellow-200 [&>*:nth-child(2)]:hover:bg-yellow-300 [&>*:nth-child(2)]:active:bg-yellow-100 [&>*:nth-child(3)]:bg-pink-300 [&>*:nth-child(3)]:hover:bg-pink-400 [&>*:nth-child(3)]:active:bg-pink-200  [&>*:nth-child(8)]:bg-violet-400 [&>*:nth-child(8)]:hover:bg-violet-500 [&>*:nth-child(8)]:active:bg-violet-300 [&>*:nth-child(12)]:bg-blue-400 [&>*:nth-child(12)]:hover:bg-blue-500 [&>*:nth-child(12)]:active:bg-blue-300  [&>*:nth-child(16)]:bg-teal-400 [&>*:nth-child(16)]:hover:bg-teal-500 [&>*:nth-child(16)]:active:bg-teal-300 [&>*:nth-child(20)]:bg-rose-400 [&>*:nth-child(20)]:hover:bg-rose-500 [&>*:nth-child(20)]:active:bg-rose-300">
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
                    className="rounded-2xl  py-4 text-2xl font-bolder cursor-pointer hover:bg-purple-400  bg-purple-300 active:bg-gray-300 "
                  >
                    {val}
                  </button>
                );
              } else if (val === "=") {
                return (
                  <button
                    onClick={equal}
                    value={val}
                    className="rounded-2xl  py-4 text-2xl font-bolder cursor-pointer hover:bg-green-500 bg-green-700 active:bg-gray-300 "
                  >
                    {val}
                  </button>
                );
              } else if (val === "C") {
                return (
                  <button
                    onClick={remove}
                    value={val}
                    className="rounded-2xl  py-4 text-2xl font-bolder cursor-pointer hover:bg-red-400 bg-red-300 active:bg-gray-300 "
                  >
                    {val}
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={getValue}
                    value={val}
                    className="rounded-2xl  py-4 text-2xl font-bolder cursor-pointer hover:bg-gray-500  bg-gray-400 active:bg-gray-300 "
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
