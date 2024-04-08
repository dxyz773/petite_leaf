import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../authentication/useLogout";

function AccountNav() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const { logout, isLoading: isLoggingOut } = useLogout();

  return (
    <div className="pt-5 md:h-[25rem] md:pl-5">
      <ul className="hidden gap-3 font-serif tracking-wide md:flex md:w-[180px] md:flex-col">
        <li
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/account" ? "underline underline-offset-4" : ""
          }`}
        >
          <Link to="/account">Account</Link>
        </li>
        <li
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/account/profile"
              ? "underline underline-offset-4"
              : ""
          }`}
        >
          <Link to="/account/profile">Profile</Link>
        </li>
        <li
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/account/addresses"
              ? "underline underline-offset-4"
              : ""
          }`}
        >
          <Link to="/account/addresses">Addresses</Link>
        </li>

        <li
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/account/payments"
              ? "underline underline-offset-4"
              : ""
          }`}
        >
          <Link to="/account/payments">Payments</Link>
        </li>

        <li
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/account/order-history"
              ? "underline underline-offset-4"
              : ""
          }`}
        >
          <Link to="/account/order-history">Order History</Link>
        </li>
        <li
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/account/favorites"
              ? "underline underline-offset-4"
              : ""
          }`}
        >
          <Link to="/account/favorites">Favorites</Link>
        </li>
        <li>
          <button
            className="text-xs tracking-wider text-neutral-800 underline"
            onClick={logout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </li>
      </ul>

      <select
        className="ml-auto mr-auto flex h-8 w-full pr-5 text-center align-middle font-serif tracking-wide md:hidden"
        onChange={(e) => {
          navigate(e.target.value);
        }}
        value={pathname}
      >
        <option disabled defaultValue="/account">
          Navigate Account
        </option>
        <option value="/account">Account</option>
        <option value="/account/profile">Profile</option>
        <option value="/account/addresses">Addresses</option>
        <option value="/account/payments">Payments</option>
        <option value="/account/order-history">Order History</option>
        <option value="/account/favorites">Favorites</option>
      </select>
    </div>
  );
}

export default AccountNav;
