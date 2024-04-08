import { Button, Dropdown } from "antd";

function Payments() {
  const items = [
    {
      key: "1",
      label: <span>Purely stylistic element</span>,
    },
  ];
  return (
    <div className="flex w-full flex-col gap-8 font-serif tracking-wide ">
      <div
        className="flex justify-between align-middle"
        style={{ paddingBottom: "10px", borderBottom: "solid 1px #d4d4d4" }}
      >
        <h1 className="text-xl">Edit Payment Information</h1>
        <Dropdown
          menu={{
            items,
            style: {
              borderRadius: "0px",
              fontFamily: "serif",
              letterSpacing: "1.5px",
            },
          }}
          placement="topRight"
          arrow
        >
          <Button
            style={{
              border: "none",
              color: "#000",
              fontFamily: "serif",
              borderRadius: "0px",
            }}
          >
            Edit
          </Button>
        </Dropdown>
      </div>
      <ul className="flex flex-col text-sm">
        <p className="text-neutral-500">
          You haven&apos;t saved any payment methods.
        </p>
      </ul>
    </div>
  );
}

export default Payments;
