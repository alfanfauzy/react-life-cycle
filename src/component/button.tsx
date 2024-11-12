import React, { ReactNode } from "react";

type ButtonProps = {
  onClickButton: () => void;
  text: string;
  preffix?: ReactNode;
};
const Button = (props: ButtonProps) => {
  const { onClickButton, text, preffix } = props;

  return (
    <div className="relative">
      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
      <button
        onClick={onClickButton}
        className="relative flex h-full w-full rounded border-2 border-black bg-white p-1 text-xs font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 flex-row gap-2 items-center"
      >
        {preffix}
        {text}
      </button>
    </div>
  );
};

export default Button;
