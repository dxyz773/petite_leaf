import { useNavigate } from "react-router-dom";

function Btn({ children, type, to, onClick }) {
  const navigate = useNavigate();
  const styleTypes = {
    product:
      "btn w-[100%] justify-center rounded-sm bg-lime-400 font-normal uppercase hover:bg-lime-400 text-neutral-200 hover:text-neutral-950  bg-neutral-950 tracking-wider font-serif",
    product_soldout:
      "btn w-[100%] justify-center rounded-sm font-normal uppercase text-neutral-200  hover:text-neutral-200 bg-neutral-500 hover:bg-neutral-500 tracking-wider font-serif cursor-not-allowed",
    list_item:
      "btn w-[18.75rem] min-[500px]:w-[28rem] sm:w-[39rem] rounded-sm bg-neutral-950 font-normal uppercase hover:bg-lime-400 md:w-[45rem] lg:w-[12rem] min-[1150px]:w-[14rem] xl:w-[16rem] min-[1380px]:w-[17rem] min-[1420px]:w-[18rem] 2xl:w-[21rem] text-neutral-200 hover:text-neutral-950 tracking-wider font-serif",
    list_item_soldout:
      "btn w-[18.75rem] min-[500px]:w-[28rem] sm:w-[39rem] rounded-sm bg-neutral-950 font-normal uppercase text-neutral-200  hover:text-neutral-200 bg-neutral-500 hover:bg-neutral-500 md:w-[45rem] lg:w-[12rem] min-[1150px]:w-[14rem] xl:w-[16rem] min-[1380px]:w-[17rem] min-[1420px]:w-[18rem] 2xl:w-[21rem] tracking-wider font-serif cursor-not-allowed",
    nav: "align-middle",
    close: "transition-all duration-300 hover:scale-110 pl-1",
    collection_cover:
      "btn rounded-sm bg-neutral-950 font-normal uppercase hover:bg-lime-400 text-neutral-200 hover:text-neutral-950 tracking-wider border border-black font-serif w-full lg:w-[120px]",
    blog: "btn rounded-sm bg-neutral-950 font-normal uppercase hover:bg-lime-400 text-neutral-200 hover:text-neutral-950 tracking-wider border border-black font-serif w-full ",
    cart_side_bar:
      "btn w-[100%] justify-center rounded-sm bg-lime-400 font-normal uppercase hover:bg-lime-400 text-neutral-200 hover:text-neutral-950  bg-neutral-950  tracking-widest font-serif tracking-wide",
  };

  if (type === "cart" || type === "cart_list") {
    return <button className={styleTypes[type]}>{children}</button>;
  }
  return (
    <button
      className={styleTypes[type]}
      onClick={onClick ? onClick : () => navigate(to)}
    >
      {children}
    </button>
  );
}

export default Btn;
