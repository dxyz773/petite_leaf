import { useNavigate } from "react-router-dom";

function OrderNotFound({ orderNumber }) {
  const navigate = useNavigate();
  return (
    <div className="ml-auto mr-auto flex min-h-dvh flex-col gap-5 pb-10 pl-3 pr-4 pt-14 font-serif tracking-wider md:w-11/12 md:px-5 lg:px-16">
      <div className="pt-24 text-center font-serif tracking-wider">
        <span className="tracking-wider">404</span>

        <h1
          className={"mb-5 font-serif text-5xl font-bold text-neutral-950/90"}
        >
          Oops!
        </h1>

        <p className="mb-8 font-serif uppercase tracking-wider text-neutral-900">
          Order Number
          <span className="font-sans font-bold"> {orderNumber}</span> Not found
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button
            className="btn btn-primary w-28 rounded-sm bg-neutral-950 font-serif text-sm  font-normal tracking-wide text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
            onClick={() => navigate(-1)}
          >
            <span>&larr;</span>Go Back
          </button>
          <button
            className="w-34 btn btn-primary rounded-sm font-serif text-sm font-normal tracking-wide hover:bg-lime-400"
            onClick={() => navigate("/order/search")}
          >
            Lookup Order &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderNotFound;
