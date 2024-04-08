import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function CartItem({ plant }) {
  const { addCartItem, decreaseItemQuantity, onClose, removeItem } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex w-[450px] gap-3 border-b pb-3 pt-2 font-serif tracking-wide hover:bg-neutral-500/5 hover:bg-gradient-to-tr">
        <img
          className="w-[100px] pl-3 hover:cursor-pointer"
          src={plant.main_img}
          alt={plant.main_name}
          onClick={() => {
            onClose();
            navigate(
              `/products/${plant.main_name}`.toLowerCase().replaceAll(" ", "-"),
            );
          }}
        />
        <div className="ml-2 w-[300px]">
          <h4
            className="mb-2 text-base font-normal hover:cursor-pointer hover:underline hover:underline-offset-4"
            onClick={() => {
              onClose();
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
          <div className="flex items-center gap-4">
            <div className="mt-3 flex items-center gap-2">
              <button onClick={() => decreaseItemQuantity(plant)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#525252"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <label className="text-md text-neutral-600">
                {plant?.quantity}
              </label>
              <button onClick={() => addCartItem(plant)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#525252"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
            <button
              className="pt-4"
              onClick={() => {
                removeItem(plant);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#a3a3a3"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
