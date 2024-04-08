import { useState } from "react";

function AccordianRow({ title, text, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse rounded-none border bg-base-200">
      <input type="checkbox" onClick={() => setIsOpen((prev) => !prev)} />
      <div className="collapse-title flex justify-between text-xl font-[590] ">
        <span className="text-[18px] font-[545]">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      <div className="collapse-content">
        <p className="text-[15px]">{text ? text : children}</p>
      </div>
    </div>
  );
}

export default AccordianRow;
