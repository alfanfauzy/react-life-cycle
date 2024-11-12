import { useState } from "react";
import "./App.css";
import ChildrenComp from "./Children";
import ChildrenMemo from "./ChildrenMemo";
import Dot from "./component/dot";
import Button from "./component/button";
import ReloadIcon from "./assets/reload-icon";

function App() {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount(count + 1);
  };

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="max-w-lg lg:max-w-2xl mx-auto my-0">
      <div className="mx-auto my-0 mt-3 flex justify-end">
        <Button
          onClickButton={handleReloadPage}
          text="Reload"
          preffix={<ReloadIcon />}
        />
      </div>
      <div className="relative">
        <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-black"></span>
        <div className="relative bg-white mt-10 rounded border-2 border-black max-w-lg lg:max-w-2xl h-full flex flex-col p-5">
          <div className="flex justify-between mb-2 flex-col gap-5">
            <div className="flex flex-row gap-2 items-baseline justify-between">
              <h3 className="font-bold text-base">Parent Component</h3>
              <Dot key={count} count={count} text="Render Parent" />
            </div>
            <div className="flex gap-1 items-baseline justify-between text-xs">
              <Button onClickButton={handleClickButton} text="Add Count" />
              <p>({count})</p>
            </div>
          </div>

          <hr className="my-2" />

          <div className="rounded-md p-5 w-full">
            <p className="font-bold text-sm mb-2">Children</p>
            <div className="flex flex-col lg:flex-row gap-5">
              <ChildrenComp count={count} />
              <ChildrenComp count={count} />
            </div>

            <hr className="my-5" />

            <p className="font-bold text-sm mb-2">Children Memo</p>
            <div className="flex flex-col lg:flex-row gap-5">
              <ChildrenMemo />
              <ChildrenMemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
