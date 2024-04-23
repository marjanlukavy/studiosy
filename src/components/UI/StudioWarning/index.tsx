import React from "react";

const StudioWarning = () => {
  return (
    <div className="text-center max-w-[578px] mx-auto mt-10">
      <span className="font-robot text-[20px] font-light leading-[23.44px] text-dark">
        Ви можете{" "}
        <span className="text-red font-bold">деактивувати студію</span>
      </span>
      <p className="font-thin">
        В такому випадку студія не буде відображатись в нашій системі та
        користувачі не зможуть її знайти
      </p>
    </div>
  );
};

export default StudioWarning;
