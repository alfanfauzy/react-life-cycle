import React, { memo, useEffect, useState } from "react";
import Dot from "./component/dot";
import Button from "./component/button";

const ChildrenMemoComponent = () => {
  const [countChildren, setCountchildren] = useState(0);

  const handleClickButton = () => {
    setCountchildren(countChildren + 1);
  };

  return (
    <div className="rounded-md border border-black w-full h-full p-2 flex flex-col justify-between gap-5">
      <div className="flex justify-between">
        <p className="font-bold text-xs">Child Memo</p>
        <Dot
          key={countChildren}
          count={countChildren}
          text="Render Child Memo"
        />
      </div>
      <div className="flex justify-between text-xs items-center">
        <Button onClickButton={handleClickButton} text="Add Count" />
        <p>({countChildren})</p>
      </div>
    </div>
  );
};

export default memo(ChildrenMemoComponent);
