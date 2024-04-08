import { Badge } from "antd";
function CheckoutItem({ plant }) {
  return (
    <div>
      <div
        className="flex w-full gap-5
       pb-3 pt-4 font-serif tracking-wide"
      >
        <Badge
          count={plant.quantity}
          size="medium"
          color="#4b5563"
          style={{ opacity: "70%" }}
        >
          <img
            className="w-[85px] border shadow-sm"
            src={plant.main_img}
            alt={plant.main_name}
          />
        </Badge>
        <div className="ml-2 mt-2 w-full">
          <h4 className="text-sm font-normal">{plant.main_name}</h4>
          <span className="ml-[85%] text-sm text-neutral-900">{`$${plant.base_price}.00`}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
