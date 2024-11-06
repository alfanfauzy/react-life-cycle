import React, { useEffect, useState } from "react";

type ChildrenCompProps = {
  count: number;
  isRender: boolean;
};
const ChildrenComponent = ({ count, isRender }: ChildrenCompProps) => {
  const [countChildren, setCountchildren] = useState(count);
  const [isRenderChildren, setIsRenderChildren] = useState(isRender);

  useEffect(() => {
    if (count !== 0) {
      setCountchildren(countChildren + 1);
    }
  }, [count]);

  useEffect(() => {
    if (!isRender) {
      setIsRenderChildren(true);
    } else {
      setIsRenderChildren(isRender);
    }
  }, [isRender, countChildren]);

  useEffect(() => {
    setInterval(() => {
      setIsRenderChildren(false);
    }, 3000);
  }, [isRender, countChildren]);

  return (
    <div className="rounded-md border border-blue-600 w-full h-full p-5 flex justify-between">
      <div className="flex gap-2 items-baseline">
        <p className="font-bold">Children</p>
        <button
          onClick={() => setCountchildren(countChildren + 1)}
          className="border rounded-full p-1 border-orange-300 bg-orange-100"
        >
          Add Count
        </button>
      </div>
      <div className="flex gap-1">
        <p>({countChildren})</p>
        {isRenderChildren && (
          <p
            className={`text-red-500 font-bold italic ${
              isRenderChildren && "animate-pulse duration-300"
            }`}
          >
            Render Children
          </p>
        )}
      </div>
    </div>
  );
};

export default ChildrenComponent;
