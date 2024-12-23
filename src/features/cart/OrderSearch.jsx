import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderSearch() {
  const [orderSearch, setOrderSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex min-h-dvh w-[20rem] flex-col gap-5 pb-10 pl-4 pr-4 pt-14 font-serif tracking-wider sm:ml-auto sm:mr-auto md:w-11/12 md:px-5 lg:px-16">
      <div className="ml-auto mr-auto mt-20 font-serif tracking-wide">
        <h3 className="border-b-2 pb-1 text-xl">Order Search</h3>
        <div className="mt-12">
          <input
            id="orderSearch"
            type="text"
            className="w-[19rem] px-6 py-3 min-[500px]:w-[25rem]"
            placeholder="Order #"
            value={orderSearch}
            onChange={(e) => setOrderSearch(e.target.value)}
          />

          <button
            className="btn btn-md mt-2 rounded-sm bg-neutral-950 text-xs font-normal uppercase tracking-widest text-neutral-200 hover:bg-lime-400 hover:text-neutral-950 "
            type="submit"
            onClick={() => navigate(`/order/${orderSearch}`)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSearch;
