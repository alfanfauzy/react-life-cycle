import React, { useEffect, useState } from "react";
import Dot from "./component/dot";
import Button from "./component/button";

type ChildrenCompProps = {
  count: number;
};
const ChildrenComponent = ({ count }: ChildrenCompProps) => {
  const [countChildren, setCountchildren] = useState(count);

  const handleClickButton = () => {
    setCountchildren(countChildren + 1);
  };

  useEffect(() => {
    if (count !== 0) {
      setCountchildren(countChildren + 1);
    }
  }, [count]);

  return (
    <div className="rounded-md border border-black w-full h-full p-2 flex flex-col justify-between gap-5">
      <div className="flex justify-between">
        <p className="font-bold text-xs">Children</p>
        <Dot key={countChildren} count={countChildren} text="Render Child" />
      </div>
      <div className="flex gap-1 justify-between text-xs items-center">
        <Button onClickButton={handleClickButton} text="Add Count" />
        <p>({countChildren})</p>
      </div>
    </div>
  );
};

export default ChildrenComponent;
