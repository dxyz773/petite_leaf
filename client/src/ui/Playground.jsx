import { useCart } from "../features/cart/CartContext";
import { ConfigProvider, FloatButton } from "antd";
import PlantVideo from "../routes/PlantVideo";

function Playground() {
  const { showDrawer, cart, clearCart } = useCart();

  return (
    <div
      className="ml-auto mr-auto flex min-h-dvh w-11/12 flex-col gap-5 px-5 pb-10 pt-32 lg:px-16"
      style={{ height: "300vh", padding: 10 }}
    >
      <div className="flex gap-5">
        <button
          type="primary"
          className="bg-blue-400 px-4 py-2"
          onClick={showDrawer}
        >
          Show Cart
        </button>
        <button onClick={clearCart} className="bg-red-400 px-4 py-2">
          Clear
        </button>
      </div>
      <div className="mb-[600px]">
        <PlantVideo />
      </div>
      <ConfigProvider
        theme={{
          token: { colorPrimary: "#16a34a", colorPrimaryHover: "#22c55e" },
        }}
      >
        <FloatButton.BackTop type="primary" />
      </ConfigProvider>
    </div>
  );
}

export default Playground;
