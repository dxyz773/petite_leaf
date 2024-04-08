import { Link } from "react-router-dom";
import { Button, Dropdown } from "antd";
import { useLogout } from "../../features/authentication/useLogout";

function UserAccountDropdown({ children }) {
  const { logout, isLoading: isLoggingOut } = useLogout();
  const items = [
    {
      key: "1",
      label: (
        <Link className="font-serif tracking-wider" to="/account">
          Account
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="font-serif tracking-wider" to="/account/profile">
          Profile
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="font-serif tracking-wider" to="/account/addresses">
          Addresses
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link className="font-serif tracking-wider" to="/account/payments">
          Payments
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link className="font-serif tracking-wider" to="/account/order-history">
          Order History
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link className="font-serif tracking-wider" to="/account/favorites">
          Favorites
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <button
          className="font-serif text-xs tracking-wider text-neutral-800 underline"
          onClick={logout}
          disabled={isLoggingOut}
        >
          Logout
        </button>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow
    >
      <Button
        style={{
          border: "none",
          margin: "none",
          padding: "0px",
          height: "24px",
          borderRadius: "100%",
          marginTop: "5px",
        }}
      >
        {children}
      </Button>
    </Dropdown>
  );
}

export default UserAccountDropdown;
