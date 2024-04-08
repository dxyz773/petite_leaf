import { useState } from "react";

function Pagination({ arr, action, style = "" }) {
  const [active, setActive] = useState(1);
  return (
    <div className="flex justify-center">
      <div className="flex gap-2">
        {arr?.map((curr, i) => (
          <div
            onClick={() => {
              setActive(i + 1);
              action(curr);
            }}
            key={curr}
            className={` ${
              style ? style : ""
            } checkbox checkbox-xs h-[10px] w-[10px] hover:bg-lime-500 ${
              active === i + 1 ? "bg-lime-500" : ""
            }`}
          >
            &nbsp;
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
