import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { states } from "../../utils/stateData";
import { useState } from "react";
import CheckoutItem from "./CheckoutItem";
import { useUser } from "../../features/users/useUser";
import { useCheckout } from "./useCheckout";
import { useCart } from "./CartContext";

function CheckoutForm({ cart, subTotal }) {
  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

  const { user } = useUser();
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;
  const { order, ordering } = useCheckout();
  const { clearCart } = useCart();

  const taxes = Number(Math.abs(subTotal * 0.08).toFixed(2));

  const numItems = cart
    ? cart?.reduce((acc, curr) => acc + curr.quantity, 0)
    : [];

  function onSubmit(data) {
    if (!data) return;
    const user_id = user?.id || undefined;
    const order_data = data;

    order(
      { order_data, user_id },
      {
        onSettled: () => {
          clearCart();
          reset();
        },
      },
    );
  }

  const cartJSON = JSON.stringify(cart);

  return (
    <form
      className="mt-6 pl-2 pr-2 font-serif"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg">Contact</h3>
        <Link className="text-xs underline" to="/login">
          Login
        </Link>
      </div>
      <div className="border-b-8 border-b-zinc-200/70 pb-8">
        <label
          className="input flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="email"
        >
          <input
            id="email"
            type="text"
            className="grow bg-neutral-50 px-2 py-1"
            placeholder="Email"
            disabled={ordering}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </label>
        {errors?.email?.message && (
          <p className="pt-2 text-xs tracking-widest text-red-600">
            {errors?.email?.message}
          </p>
        )}
      </div>
      <div className="mb-4 mt-6">
        <h3 className="text-lg">Delivery</h3>
      </div>

      <input
        type="hidden"
        name="checkout_cart"
        id="checkout_cart"
        {...register("checkout_cart", { value: cartJSON })}
      />
      <input
        type="hidden"
        name="status"
        id="status"
        {...register("status", { value: "Confirmed" })}
      />
      <div className="pb-6">
        <label
          type="text"
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="country"
        >
          <input
            id="country"
            type="text"
            disabled
            className="grow bg-neutral-200/40 px-2 py-1 text-sm tracking-wide text-neutral-400"
            {...register("country", { value: "United States" })}
          />
        </label>
        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="firstName"
        >
          <input
            id="firstName"
            type="text"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
            placeholder="First Name"
            // disabled={isLoading}
            {...register("firstName", {
              required: "This field is required",
              minLength: {
                value: 1,
                message: "First name must be more than 1 character",
              },
            })}
          />
        </label>
        {errors?.firstName?.message && (
          <p className="mb-4 text-xs tracking-widest text-red-600">
            {errors?.firstName?.message}
          </p>
        )}
        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="lastName"
        >
          <input
            id="lastName"
            type="text"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
            placeholder="Last Name"
            // disabled={isLoading}
            {...register("lastName", {
              required: "This field is required",
              minLength: {
                value: 1,
                message: "Last name must be more than 1 character",
              },
            })}
          />
        </label>
        {errors?.lastName?.message && (
          <p className="mb-4 text-xs tracking-widest text-red-600">
            {errors?.lastName?.message}
          </p>
        )}
        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="company"
        >
          <input
            id="company"
            type="text"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
            placeholder="Company (optional)"
            // disabled={isLoading}
            {...register("company")}
          />
        </label>
        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="address"
        >
          <input
            id="address"
            type="text"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
            placeholder="Address"
            {...register("address", {
              required: "This field is required",
              minLength: {
                value: 1,
                message: "Address must be more than 1 character",
              },
            })}
          />
        </label>
        {errors?.address?.message && (
          <p className="mb-4 text-xs tracking-widest text-red-600">
            {errors?.address?.message}
          </p>
        )}
        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="apt"
        >
          <input
            id="apt"
            type="text"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
            placeholder="Apartment, suite, etc. (optional)"
            {...register("apt")}
          />
        </label>
        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="city"
        >
          <input
            id="city"
            type="text"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide"
            placeholder="City"
            {...register("city", {
              required: "This field is required",
              minLength: {
                value: 1,
                message: "City must be more than 1 character",
              },
            })}
          />
        </label>
        {errors?.city?.message && (
          <p className="mb-4 text-xs tracking-widest text-red-600">
            {errors?.city?.message}
          </p>
        )}

        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="state"
        >
          <select
            name="state"
            id="state"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm tracking-wide text-zinc-500"
            {...register("state", { required: "This field is required" })}
          >
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.text}
              </option>
            ))}
          </select>
        </label>
        {errors?.state?.message && (
          <p className="mb-4 text-xs tracking-widest text-red-600">
            {errors?.state?.message}
          </p>
        )}
        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="zipCode"
        >
          <input
            id="zipCode"
            type="text"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm"
            placeholder="ZIP Code"
            {...register("zipCode", {
              required: "This field is required",
              minLength: { value: 5, message: "Please enter a valid ZIP Code" },
              maxLength: { value: 5, message: "Please enter a valid ZIP Code" },
            })}
          />
        </label>
        {errors?.zipCode?.message && (
          <p className="mb-4 text-xs tracking-widest text-red-600">
            {errors?.zipCode?.message}
          </p>
        )}
        <label
          className="input mb-3 flex items-center gap-2 rounded-sm border-neutral-400/70"
          htmlFor="phoneNumber"
        >
          <input
            id="phoneNumber"
            type="text"
            disabled={ordering}
            className="grow bg-neutral-50 px-2 py-1 text-sm"
            placeholder="Phone Number (optional)"
            {...register("phoneNumber")}
          />
        </label>
      </div>
      <div className="mb-6 border-t-8 border-t-zinc-200/70">
        <div className="mb-4 mt-6">
          <h3 className="text-lg">Payment</h3>
        </div>
        <div className="border border-lime-800 bg-lime-400/35">
          <label htmlFor="paymentType">
            <div className="flex items-center border-black">
              <input
                id="paymentType"
                type="radio"
                defaultChecked
                className="my-4 ml-4 mr-3"
                {...register("paymentType")}
              />

              <span className="text-sm tracking-wide">Credit card</span>

              <img src="./credit-cards.png" className="ml-auto mr-4 h-7" />
            </div>
          </label>
        </div>
        <div className="border border-t-zinc-200/70 bg-zinc-200/50">
          <label htmlFor="cardNumber">
            <input
              className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm"
              id="cardNumber"
              disabled={ordering}
              placeholder="Card number"
              type="text"
              {...register("cardNumber", {
                value: `${4311} ${7800} ${0o24} ${1409}`,
              })}
            />
          </label>
          <label htmlFor="expirationDate">
            <input
              className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm"
              id="expirationDate"
              disabled={ordering}
              placeholder="Expiration date (MM / YY)"
              type="text"
              {...register("expirationDate", {
                value: `0${3} / ${26}`,
              })}
            />
          </label>
          <label htmlFor="securityCode">
            <input
              className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm"
              id="securityCode"
              disabled={ordering}
              placeholder="Security code"
              type="text"
              {...register("securityCode", { value: 434 })}
            />
          </label>
          <label htmlFor="nameOnCard">
            <input
              className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm"
              id="nameOnCard"
              disabled={ordering}
              placeholder="Name on card"
              type="text"
              {...register("nameOnCard", {
                required: "This field is required",
              })}
            />
          </label>
          {errors?.nameOnCard?.message && (
            <p className="mb-4 pl-6 text-xs tracking-widest text-red-600">
              {errors?.nameOnCard?.message}
            </p>
          )}
          <div className="form-control mb-4 ml-4 items-start">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                checked={checked}
                className="accent-lime-700"
                {...register("billing_same_shipping", { value: checked })}
                onChange={() => setChecked((prev) => !prev)}
              />
              <span className="label-text ml-3">
                Use shipping address as billing address
              </span>
            </label>
          </div>
          {!checked ? (
            <>
              <h3 className="mb-4 ml-4 mt-6">Billing address</h3>
              <label htmlFor="billingCountry">
                <input
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow border border-neutral-300 bg-neutral-200/40 py-2 pl-4 text-sm tracking-wide text-neutral-500"
                  id="billingCountry"
                  disabled
                  placeholder="Country"
                  type="text"
                  {...register("billingCountry", { value: "United States" })}
                />
              </label>
              <label htmlFor="billingFirstName">
                <input
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  id="billingFirstName"
                  disabled={ordering}
                  placeholder="First Name"
                  type="text"
                  {...register("billingFirstName", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                      message: "First name must be more than 1 character",
                    },
                  })}
                />
              </label>
              {errors?.billingFirstName?.message && (
                <p className="mb-4 text-xs tracking-widest text-red-600">
                  {errors?.billingFirstName?.message}
                </p>
              )}

              <label htmlFor="billingLastName">
                <input
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  id="billingLastName"
                  disabled={ordering}
                  placeholder="Last Name"
                  type="text"
                  {...register("billingLastName", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                      message: "Last name must be more than 1 character",
                    },
                  })}
                />
              </label>
              {errors?.billingLastName?.message && (
                <p className="mb-4 text-xs tracking-widest text-red-600">
                  {errors?.billingLastName?.message}
                </p>
              )}
              <label htmlFor="billingCompany">
                <input
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  id="billingCompany"
                  type="text"
                  disabled={ordering}
                  placeholder="Company (optional)"
                  // disabled={isLoading}
                  {...register("billingCompany")}
                />
              </label>
              <label htmlFor="billingAddress">
                <input
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  id="billingAddress"
                  disabled={ordering}
                  placeholder="Address"
                  type="text"
                  {...register("billingAddress", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                      message: "Address must be more than 1 character",
                    },
                  })}
                />
              </label>
              {errors?.billingAddress?.message && (
                <p className="mb-4 text-xs tracking-widest text-red-600">
                  {errors?.billingAddress?.message}
                </p>
              )}
              <label htmlFor="billingApt">
                <input
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  id="billingApt"
                  disabled={ordering}
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  {...register("billingApt")}
                />
              </label>
              <label htmlFor="billingCity">
                <input
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  id="billingCity"
                  disabled={ordering}
                  placeholder="City"
                  type="text"
                  {...register("billingCity", {
                    required: "This field is required",
                    minLength: {
                      value: 1,
                      message: "City must be more than 1 character",
                    },
                  })}
                />
              </label>
              {errors?.billingCity?.message && (
                <p className="mb-4 text-xs tracking-widest text-red-600">
                  {errors?.billingCity?.message}
                </p>
              )}
              <label htmlFor="billingState">
                <select
                  name="billingState"
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  id="billingState"
                  placeholder="State"
                  disabled={ordering}
                  type="text"
                  {...register("billingState", {
                    required: "This field is required",
                  })}
                >
                  {states.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.text}
                    </option>
                  ))}
                </select>
              </label>
              {errors?.billingState?.message && (
                <p className="mb-4 text-xs tracking-widest text-red-600">
                  {errors?.billingState?.message}
                </p>
              )}

              <label htmlFor="billingZipCode">
                <input
                  id="billingZipCode"
                  type="text"
                  disabled={ordering}
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  placeholder="ZIP Code"
                  {...register("billingZipCode", {
                    required: "This field is required",
                    minLength: {
                      value: 5,
                      message: "Please enter a valid ZIP Code",
                    },
                    maxLength: {
                      value: 5,
                      message: "Please enter a valid ZIP Code",
                    },
                  })}
                />
              </label>
              {errors?.billingZipCode?.message && (
                <p className="mb-4 text-xs tracking-widest text-red-600">
                  {errors?.billingZipCode?.message}
                </p>
              )}
              <label htmlFor="billingPhoneNumber">
                <input
                  className="mb-4 ml-6 mr-6 mt-3 w-[92%] grow bg-neutral-50 py-2 pl-4 text-sm tracking-wide"
                  id="billingPhoneNumber"
                  type="text"
                  disabled={ordering}
                  placeholder="Phone Number (optional)"
                  {...register("billingPhoneNumber")}
                />
              </label>
            </>
          ) : null}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3>{`Order Summary (${numItems})`}</h3>
        <div
          className="collapse-title flex w-10 items-center gap-2 text-sm font-normal"
          onClick={() => setOpen((prev) => !prev)}
        >
          {!open ? "Show" : "Hide"}
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
        </div>
      </div>
      {open ? (
        <div>
          {cart?.map((plant) => (
            <CheckoutItem key={plant.id} plant={plant} />
          ))}
        </div>
      ) : null}
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
        <span
          className="text-[14px] font-[515]"
          {...register("subTotal", { value: `$${subTotal}.00` })}
        >{`$${subTotal}.00`}</span>
      </div>
      <div className="ml-1 mt-2 flex items-center justify-between font-serif tracking-wide">
        <p className="text-[13px]">Shipping</p>
        <span
          className="text-[10px] font-[515] tracking-wider text-neutral-500"
          {...register("shipping", {
            value: subTotal >= 75 ? "Free shipping" : "$10.95",
          })}
        >
          {subTotal >= 75 ? "Free shipping" : "$10.95"}
        </span>
      </div>
      <div className="ml-1 mt-2 flex items-center justify-between font-serif tracking-wide">
        <p className="text-[13px]">Taxes</p>
        <span
          className="text-[14px] font-[515]"
          {...register("taxes", { value: `$${taxes}`.padEnd(2, 0) })}
        >
          {`$${taxes}`.padEnd(2, 0)}
        </span>
      </div>

      <div className="ml-1 mt-2 flex items-center justify-between font-serif tracking-wide">
        <p className="text-[17px]">Total</p>
        <div className="flex items-end gap-2">
          <span className="text-[13px] font-[515] tracking-wider text-neutral-500">
            USD
          </span>
          <p
            {...register("total", {
              value:
                subTotal >= 75
                  ? `$${Number(Math.abs(subTotal + taxes).toFixed(2))}`.padEnd(
                      2,
                      0,
                    )
                  : `$${Number(
                      Math.abs(subTotal + taxes + 10.95).toFixed(2),
                    )}`.padEnd(2, 0),
            })}
          >
            {subTotal >= 75
              ? `$${Number(Math.abs(subTotal + taxes).toFixed(2))}`.padEnd(2, 0)
              : `$${Number(
                  Math.abs(subTotal + taxes + 10.95).toFixed(2),
                )}`.padEnd(2, 0)}
          </p>
        </div>
      </div>

      <button
        className="btn btn-md mb-32 mt-8 w-full rounded-sm bg-neutral-950 text-center text-xs font-normal uppercase tracking-widest text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
        disabled={ordering}
      >
        Pay now
      </button>
    </form>
  );
}

export default CheckoutForm;
