import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeDropDown } from "./HeaderComponents/dropDownSlice";

function LinkCustom({ type, to, children, text, hover = false, onClick }) {
  const linkTypes = {
    nav: "text-md hover:underline hover:underline-offset-8 uppercase font-serif tracking-wider",
    footer: "link-hover hover:underline-offset-4 link",
    sideNav: "hover:bg-green-700 py-2 pl-2 hover:text-green-50",
  };

  const dispatch = useDispatch();
  if (type === "nav" && hover) {
    return (
      <Link
        to={to}
        className={linkTypes[type]}
        onMouseEnter={hover}
        onClick={() => dispatch(closeDropDown())}
      >
        {text || children}
      </Link>
    );
  }
  if (type === "footer") {
    return (
      <Link to={to} className={linkTypes[type]}>
        {text || children}
      </Link>
    );
  }

  if (type === "sideNav") {
    return (
      <Link to={to} className={linkTypes[type]} onClick={onClick}>
        {text || children}
      </Link>
    );
  }
  return (
    <Link
      to={to}
      className={linkTypes[type]}
      onClick={() => dispatch(closeDropDown())}
    >
      {text || children}
    </Link>
  );
}

export default LinkCustom;
