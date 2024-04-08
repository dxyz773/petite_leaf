import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useUserAddresses } from "./useUserAddresses";
import UserAddress from "./UserAddress";
import { useUserOrders } from "./useUserOrders";

function Account() {
  const { user } = useUser();
  const { email } = user;
  const { addresses } = useUserAddresses();
  const { orders } = useUserOrders();
  const { firstName, lastName, phoneNumber, birthday, avatar } =
    user.user_metadata;
  const formattedPhoneNumber = `(${phoneNumber?.slice(
    0,
    3,
  )}) ${phoneNumber?.slice(3, 6)}-${phoneNumber?.slice(6)}`;

  const split = birthday.split("-");
  const formatedBirthday = `${split[1]}/${split[2]}/${split[0]}`;
  const firstAddress = addresses?.[0];

  const firstOrder = orders?.[0];
  const firstOrderDate = orders?.[0]?.["created_at"];

  const formattedDate = new Date(firstOrderDate)
    .toDateString()
    .slice(4)
    .split(" ")
    .map((curr, i) => (i === 1 ? `${curr},` : curr))
    .join(" ");

  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col gap-12 font-serif tracking-wide lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-32">
      <div>
        <div
          className="flex justify-between align-middle"
          style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
        >
          <h1 className="text-xl">Profile Info</h1>
          <Link className="text-xs underline" to="/account/profile">
            Manage
          </Link>
        </div>
        <ul className="order-2 mt-7 flex flex-col gap-2 text-sm">
          <li>
            <div className="avatar">
              <div className="w-8 rounded-full">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={`${firstName} ${lastName} user avatar`}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#5a5858"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z"
                      opacity="0.2"
                    ></path>
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
                  </svg>
                )}
              </div>
            </div>
          </li>
          <li>
            <span className="font-semibold">First Name: </span>
            <span className="text-neutral-700">{firstName}</span>
          </li>
          <li>
            <span className="font-semibold">Last Name: </span>
            <span className="text-neutral-700">{lastName}</span>
          </li>
          <li>
            <span className="font-semibold">Email: </span>
            <span className="text-neutral-700">{email}</span>
          </li>
          <li className="flex gap-2 align-middle">
            <span className="font-semibold">Password:</span>
            <span className=" pt-1 text-neutral-700"> *******</span>
          </li>
          <li>
            <span className="font-semibold">Phone Number: </span>
            <span className="text-neutral-700">
              {formattedPhoneNumber.length > 4 ? formattedPhoneNumber : ""}
            </span>
          </li>
          <li>
            <span className="font-semibold">Birthday: </span>
            <span className="text-neutral-700">
              {formatedBirthday.includes(undefined) ? "" : formatedBirthday}
            </span>
          </li>
        </ul>
      </div>

      <div>
        <div
          className="flex justify-between align-middle"
          style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
        >
          <h1 className="text-xl">Addresses</h1>
          <Link className="text-xs underline" to="/account/addresses">
            Manage
          </Link>
        </div>
        {addresses?.length ? (
          <ul className="mt-7 flex max-w-[220px] flex-col border border-neutral-300 py-4 pl-4 text-sm">
            <p className="mb-2  text-neutral-400">
              Nickname: {firstAddress.nickname}
            </p>
            <UserAddress
              firstName={firstAddress?.firstName}
              lastName={firstAddress?.lastName}
              address={firstAddress?.address}
              apt={firstAddress?.apt}
              city={firstAddress?.city}
              state={firstAddress?.state}
              company={firstAddress?.company}
              zipCode={firstAddress?.zipCode}
              country={firstAddress?.country}
              phoneNumber={firstAddress?.phoneNumber}
            />
          </ul>
        ) : (
          <ul className="mt-7 flex flex-col text-sm">
            <p className="text-neutral-500">
              You haven&apos;t saved any addresses yet.
            </p>
          </ul>
        )}
      </div>

      <div>
        <div
          className="flex justify-between align-middle"
          style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
        >
          <h1 className="text-xl">Payment Methods</h1>
          <Link className="text-xs underline" to="/account/payments">
            Manage
          </Link>
        </div>
        <ul className="mt-7 flex flex-col text-sm">
          <p className="text-neutral-500">
            You haven&apos;t saved any payment methods.
          </p>
        </ul>
      </div>

      <div>
        <div
          className="mb-6 flex justify-between align-middle"
          style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
        >
          <h1 className="text-xl">Order History</h1>
          <Link className="text-xs underline" to="/account/order-history">
            View All Orders
          </Link>
        </div>
        {orders?.length ? (
          <div className="max-w-[477px]">
            <div className="flex gap-2">
              <p className="font-semibold">Date Ordered:</p>
              <span>{formattedDate}</span>
            </div>
            <div className="mr-3 mt-4 flex gap-2 text-xs">
              <p className="font-semibold">Order Number</p>
              <span>{firstOrder?.order_number}</span>
            </div>
            <button
              className="mt-6 w-[12rem] border bg-neutral-950 px-4 py-2 text-sm uppercase tracking-wider text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
              onClick={() => navigate(`/order/${firstOrder?.order_number}`)}
            >
              View order
            </button>
          </div>
        ) : (
          <ul className="mt-7 flex flex-col text-sm">
            <p className="text-neutral-500">
              You do not have any recent orders.
            </p>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Account;
