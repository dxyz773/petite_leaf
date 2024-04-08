import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
import { useOrderByOrderNumber } from "./useOrderByOrderNumber";
import OrderNotFound from "./OrderNotFound";
import UserAddress from "../users/UserAddress";
import Recommendations from "../products/Recommendations";

function Order() {
  const { order, isLoading } = useOrderByOrderNumber();
  const navigate = useNavigate();
  const { orderNumber } = useParams();
  if (isLoading) return <Loading />;

  if (!isLoading && !order?.length)
    return <OrderNotFound orderNumber={orderNumber} />;

  const [{ order_number, order_data }] = order;

  const {
    firstName,
    lastName,
    address,
    apt,
    city,
    state,
    company,
    zipCode,
    country,
    phoneNumber,
    billing_same_shipping,
    billingCountry,
    billingFirstName,
    billingLastName,
    billingCompany,
    billingAddress,
    billingApt,
    billingCity,
    billingState,
    billingZipCode,
    billingPhoneNumber,
    checkout_cart,
    cardNumber,
    subTotal,
    taxes,
    total,
    shipping,
  } = order_data;

  const orderItems = JSON.parse(checkout_cart);
  const last4 = cardNumber.slice(-4);
  console.log(phoneNumber);
  console.log(billingPhoneNumber);
  return (
    <div className="ml-auto mr-auto flex min-h-dvh flex-col gap-5 pb-32 pl-3 pr-4 pt-14 font-serif tracking-wider md:w-11/12 md:px-5 lg:px-16">
      <header className="border-b-2 pb-14 text-center">
        <h1 className="mb-6 text-3xl uppercase">
          Thank you for your purchase!
        </h1>
        <p className="mb-3 text-sm">
          Your luxury greenery is on its way to transform your space into a
          botanical paradise.
        </p>
        <p className="text-sm">
          Your Order Confirmation Number
          <span className="font-sans font-bold"> {order_number}</span>
        </p>
      </header>
      <div className="ml-1 mt-3 flex flex-wrap gap-4 md:gap-20 lg:gap-36 xl:gap-52">
        <div>
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            </span>
            <h3 className="font-semibold">Order Status</h3>
          </div>
          <div className="ml-7 pt-3 text-sm">Confirmed</div>
        </div>
        <div>
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <h3 className="font-semibold">Shipping To</h3>
          </div>
          <UserAddress
            firstName={firstName}
            lastName={lastName}
            address={address}
            apt={apt}
            city={city}
            state={state}
            company={company}
            zipCode={zipCode}
            country={country}
            phoneNumber={phoneNumber}
          />
        </div>
        <div>
          <div className="flex gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,96H216v16H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H40Zm8-32H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64ZM208,192H48a8,8,0,0,1-8-8V128H88.8a40,40,0,0,0,78.4,0H216v56A8,8,0,0,1,208,192Z"></path>
              </svg>
            </span>
            <h3 className="font-semibold">Billing To</h3>
          </div>
          {billing_same_shipping ? (
            <UserAddress
              firstName={firstName}
              lastName={lastName}
              address={address}
              apt={apt}
              city={city}
              state={state}
              company={company}
              zipCode={zipCode}
              country={country}
              phoneNumber={phoneNumber}
            />
          ) : (
            <UserAddress
              type="billing"
              billingFirstName={billingFirstName}
              billingLastName={billingLastName}
              billingAddress={billingAddress}
              billingApt={billingApt}
              billingCity={billingCity}
              billingState={billingState}
              billingCompany={billingCompany}
              billingZipCode={billingZipCode}
              billingCountry={billingCountry}
              billingPhoneNumber={billingPhoneNumber}
            />
          )}
        </div>
      </div>

      <h3 className="ml-6 mt-20 border-b-2 pb-2 font-semibold">
        Order Receipt
      </h3>
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <div className="w-full space-y-6 lg:w-[50%]">
          {orderItems.map((plant) => (
            <div key={plant.id} className="flex gap-5 border-b pb-5">
              <img
                className="w-[100px] pl-3 hover:cursor-pointer"
                src={plant.main_img}
                alt={plant.main_name}
                onClick={() => {
                  navigate(
                    `/products/${plant.main_name}`
                      .toLowerCase()
                      .replaceAll(" ", "-"),
                  );
                }}
              />
              <div>
                <h4
                  className="mb-2 text-base font-normal hover:cursor-pointer hover:underline hover:underline-offset-4"
                  onClick={() => {
                    navigate(
                      `/products/${plant.main_name}`
                        .toLowerCase()
                        .replaceAll(" ", "-"),
                    );
                  }}
                >
                  {plant.main_name}
                </h4>
                <p className="text-sm text-neutral-600">{`$${plant.base_price}.00`}</p>

                <label className="text-xs text-neutral-600">
                  {`Qty: ${plant?.quantity}`}
                </label>
              </div>
            </div>
          ))}
        </div>
        <div className="h-auto max-h-[340px] border px-5 pb-2 pt-4">
          <h4 className="text-xs">
            <span className="font-semibold">Order Number:</span> {order_number}
          </h4>

          <ul className="mt-10 space-y-2 text-sm">
            <li className="flex justify-between">
              <p>Merchandise</p>
              <span>{subTotal}</span>
            </li>
            <li className="flex justify-between">
              <p>Shipping</p>
              <span>{shipping}</span>
            </li>
            <li className="flex justify-between border-b-2 pb-2">
              <p>Tax</p>
              <span>{taxes}</span>
            </li>
            <li className="flex justify-between font-semibold">
              <p>Total</p>
              <span>{total}</span>
            </li>
            <li className="flex gap-1 pt-6 text-[11px]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
              </span>
              Your credit card won&apos;t be charged until the entire order
              ships.
            </li>
            <li className="flex flex-col text-xs">
              <img src="../visa-copy.png" className="h-8 self-end" />
              <p className="self-end">Ending: {last4}</p>
            </li>
          </ul>
        </div>
      </div>
      <Recommendations />
    </div>
  );
}

export default Order;
