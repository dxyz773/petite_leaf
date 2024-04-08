import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { useCart } from "../features/cart/CartContext";

function ListItem({ plant }) {
  const [activeImg, setActiveImg] = useState(plant.main_img);
  const [hoverActiveStatus, setHoverActiveStatus] = useState(false);
  const { addCartItem, showDrawer } = useCart();
  useEffect(
    function () {
      if (hoverActiveStatus) {
        setTimeout(() => setActiveImg(plant?.hover_img), 150);
      } else {
        setTimeout(() => setActiveImg(plant?.main_img), 150);
      }
    },
    [hoverActiveStatus, plant?.hover_img, plant?.main_img],
  );
  return (
    <div className="card w-full rounded-sm bg-base-100 font-serif tracking-wide shadow-sm">
      <Link
        to={`/products/${plant.main_name}`.toLowerCase().replaceAll(" ", "-")}
      >
        <figure>
          <img
            src={activeImg}
            onMouseOver={() => setHoverActiveStatus(true)}
            onMouseOut={() => setHoverActiveStatus(false)}
            className="h-[30rem] w-[30rem] object-cover sm:h-[40rem] sm:w-[40rem] md:h-[45rem] md:w-[45rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18rem] xl:w-[18rem]"
          />
        </figure>
      </Link>

      <div className="card-body justify-between px-2 lg:flex lg:h-[180px] lg:flex-col">
        <h2 className="card-title pl-2 text-lg font-[450] lg:text-base">
          {plant.main_name}
        </h2>
        <div>
          <p className="pl-2 lg:text-[0.9rem]">{`$${plant.base_price}.00`}</p>
          <div className="card-actions justify-center pt-3">
            <Btn
              disabled={plant.stock_amount ? false : true}
              type={plant.stock_amount ? "list_item" : "list_item_soldout"}
              onClick={
                plant.stock_amount
                  ? () => {
                      addCartItem({ ...plant, quantity: 1 });
                      showDrawer();
                    }
                  : null
              }
            >
              {plant.stock_amount ? "+ Quick Add" : "Out of stock"}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
