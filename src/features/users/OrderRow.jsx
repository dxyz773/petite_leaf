import { useNavigate } from "react-router-dom";

function OrderRow({ order, date }) {
  const navigate = useNavigate();

  const items = JSON.parse(order["order_data"]["checkout_cart"]);

  return (
    <div className={`border-b border-zinc-200 font-serif tracking-widest`}>
      <div className="ml-3 flex flex-col gap-5 lg:ml-0 lg:flex-row  lg:gap-1">
        <div className="flex flex-col gap-3 lg:pb-8 ">
          <h3 className="text-lg">Confirmed</h3>
          <div className="flex gap-2 text-xs">
            <p className="font-semibold">Date Ordered</p>
            <span>{date}</span>
          </div>
          <div className="mr-3 flex gap-2 text-xs">
            <p className="font-semibold">Order Number</p>
            <span>{order?.order_number}</span>
          </div>
          <button
            className="mt-6 w-[12rem] border bg-neutral-950 px-4 py-2 text-sm uppercase tracking-wider text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
            onClick={() => navigate(`/order/${order?.order_number}`)}
          >
            View order
          </button>
        </div>
        <div className="mt-10 flex gap-5 pb-10 font-normal uppercase min-[500px]:w-[485px] lg:gap-4 lg:pb-0 lg:pl-0 xl:gap-5 xl:pl-5">
          {items?.slice(0, 5).map((item) => (
            <img
              key={item.id}
              src={item.main_img}
              className="h-[6rem] w-[6rem] shadow-sm hover:scale-105"
              onClick={() =>
                navigate(
                  `/products/${item.main_name}`
                    .toLowerCase()
                    .replaceAll(" ", "-"),
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderRow;
