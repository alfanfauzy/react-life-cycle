import React, { memo, useEffect, useState } from "react";

const ChildrenMemoComponent = () => {
  const [countChildren, setCountchildren] = useState(0);
  const [isRenderChildren, setIsRenderChildren] = useState(false);

  useEffect(() => {
    setIsRenderChildren(true);
  }, [countChildren]);

  useEffect(() => {
    setInterval(() => {
      setIsRenderChildren(false);
    }, 3000);
  }, [countChildren]);

  console.log("render memo children is");

  return (
    <div className="rounded-md border border-blue-600 w-full h-full p-5 flex justify-between">
      <div className="flex gap-2 items-baseline">
        <p className="font-bold">Children Memo</p>
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
            Render Memo Children
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(ChildrenMemoComponent);
