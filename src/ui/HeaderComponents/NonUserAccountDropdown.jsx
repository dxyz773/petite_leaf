import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";

function NonUserAccountDropdown({ children }) {
  const items = [
    {
      key: "1",
      label: (
        <Link className="font-serif tracking-wider" to="/login">
          Login
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="font-serif tracking-wider" to="/register">
          Signup
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="font-serif tracking-wider" to="/order/search">
          Search Order
        </Link>
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

export default NonUserAccountDropdown;
