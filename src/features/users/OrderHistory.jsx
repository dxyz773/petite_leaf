import { useNavigate } from "react-router-dom";
import { useUserOrders } from "./useUserOrders";
import OrderRow from "./OrderRow";
import Loading from "../../ui/Loading";

function OrderHistory() {
  const navigate = useNavigate();
  const { orders, isLoading } = useUserOrders();

  const orderDates = orders?.map((order) => order["created_at"]);
  const formattedDate = orderDates?.map((day) =>
    new Date(day)
      .toDateString()
      .slice(4)
      .split(" ")
      .map((curr, i) => (i === 1 ? `${curr},` : curr))
      .join(" "),
  );

  if (isLoading) return <Loading />;

  return (
    <div className="mt-5 flex w-full flex-col gap-8 font-serif tracking-wide">
      <div
        className="flex justify-between align-middle"
        style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
      >
        <h1 className="text-xl">Order History</h1>
      </div>
      {orders.length ? (
        orders?.map((order, i) => (
          <OrderRow key={order.id} order={order} date={formattedDate[i]} />
        ))
      ) : (
        <ul className="flex flex-col text-sm">
          <p className="text-neutral-500">You do not have any orders yet.</p>
          <button
            className="btn btn-sm mt-7 w-[200px] rounded-sm bg-neutral-950 text-xs font-normal  text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
            onClick={() => navigate("/products")}
          >
            Shop
          </button>
        </ul>
      )}
    </div>
  );
}

export default OrderHistory;
