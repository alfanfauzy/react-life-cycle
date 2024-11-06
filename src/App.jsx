import { useEffect, useState } from "react";
import "./App.css";
import ChildrenComp from "./Children";
import ChildrenMemo from "./ChildrenMemo";

function App() {
  const [count, setCount] = useState(0);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      setIsRender(false);
    }, 3000);
  }, [isRender]);

  return (
    <div className="p-5 w-full h-full rounded-md border-red-500 border text-xs">
      <div className="rounded-md border border-blue-600 w-full h-full flex flex-col p-5">
        <div className="flex justify-between mb-2">
          <div className="flex flex-row gap-2 items-baseline">
            <h3 className="font-bold text-base">Parent</h3>
            <button
              onClick={() => setCount(count + 1)}
              className="border rounded-full p-1 border-lime-300 bg-lime-100"
            >
              Add Count
            </button>
          </div>
          <div className="flex gap-1">
            <p>({count})</p>
            {isRender && (
              <p
                className={`text-red-500 font-bold italic ${
                  isRender && "animate-pulse duration-300"
                }`}
              >
                Render Parent
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <ChildrenComp count={count} isRender={isRender} />
          <ChildrenComp count={count} isRender={isRender} />
        </div>

        <div className="mt-5">
          <p className="font-bold text-sm mb-5">Children with memo</p>
          <div className="flex flex-row gap-5">
            <ChildrenMemo />
            <ChildrenMemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
