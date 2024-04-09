import { useState } from "react";
import { useCart } from "./CartContext";
import CheckoutItem from "./CheckoutItem";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();

  const emptyCart = cart.length < 1;
  const subTotal = cart
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.base_price, 0)
    : [];
  const navigate = useNavigate();

  return (
    <div className="ml-auto mr-auto flex min-h-dvh flex-col gap-5 pb-10 pl-3 pr-4 pt-14 md:w-11/12 md:px-5 lg:px-16">
      {emptyCart ? (
        <div className="pt-32 text-center font-serif tracking-wider">
          <p>Your cart is empty</p>
          <button
            className="btn btn-sm mt-7 w-[200px] rounded-sm bg-neutral-950 text-sm font-normal  tracking-wide text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
            onClick={() => {
              navigate("/products");
            }}
          >
            Shop
          </button>
        </div>
      ) : (
        <>
          <div
            className={`collapse max-w-[42rem] ${
              open ? "collapse-open" : "collapse-close"
            } ml-auto  mr-auto rounded-none border border-neutral-400/50`}
          >
            <input type="checkbox" onClick={() => setOpen((prev) => !prev)} />

            <div className="collapse-title ml-3 flex items-center gap-2 text-sm font-normal text-lime-700">
              {open ? "Hide order summary" : "Show order summary"}
              <span>
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-3 w-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-3 w-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </span>
              <span className="ml-auto text-lg text-neutral-800">{`$${subTotal}.00`}</span>
            </div>

            <div className="collapse-content bg-lime-400/25">
              {cart?.map((plant) => (
                <CheckoutItem key={plant.id} plant={plant} />
              ))}
              <div className="mt-2 flex gap-4">
                <input
                  type="text"
                  className="w-[80%] border px-4 py-4 font-serif text-sm tracking-wide md:w-[85%]"
                  placeholder="Discount code or gift card"
                />
                <button className="border bg-lime-400/70 p-4 hover:bg-lime-400">
                  Apply
                </button>
              </div>
              <div className="ml-1 mt-5 flex items-center justify-between font-serif tracking-wide">
                <p className="text-[13px]">Subtotol</p>
                <span className="text-[14px] font-[515]">{`$${subTotal}.00`}</span>
              </div>
              <div className="ml-1 mt-2 flex items-center justify-between font-serif tracking-wide">
                <p className="text-[13px]">Shipping</p>
                <span className="text-[10px] font-[515] tracking-wider text-neutral-500">
                  {subTotal >= 75 ? "Free shipping" : "$10.95"}
                </span>
              </div>
              <div className="ml-1 mt-2 flex items-center justify-between font-serif tracking-wide">
                <p className="text-[17px]">Total</p>
                <div className="flex items-end gap-2">
                  <span className="text-[13px] font-[515] tracking-wider text-neutral-500">
                    USD
                  </span>
                  <p>{`$${
                    subTotal >= 75 ? `${subTotal}.00` : subTotal + 10.95
                  }`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-auto mr-auto w-full max-w-[42rem] rounded-none border-t-2 min-[320px]:min-w-[20rem] min-[500px]:min-w-[29.114rem]">
            <CheckoutForm subTotal={subTotal} cart={cart} />
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
