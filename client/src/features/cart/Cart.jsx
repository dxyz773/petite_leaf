import { useNavigate } from "react-router-dom";
import Btn from "../../ui/Btn";

import CartItem from "./CartItem";
import { useCart } from "./CartContext";
import { Drawer } from "antd";

function Cart() {
  const navigate = useNavigate();
  const { cart, open, onClose } = useCart();

  const emptyCart = cart.length < 1;
  const numItems = cart
    ? cart?.reduce((acc, curr) => acc + curr.quantity, 0)
    : [];
  const subTotal = cart
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.base_price, 0)
    : [];

  return (
    <>
      <Drawer onClose={onClose} open={open} width={500}>
        <div className="flex gap-2 border-b pb-3 align-middle">
          <h1 className="pl-3 font-serif text-lg font-[600]">YOUR CART</h1>
          <span className="pt-[1px] font-serif text-base tracking-wide">
            {emptyCart ? "" : ` ${numItems}`}
          </span>
        </div>
        <div className="w-[450px]">
          {!emptyCart ? (
            cart?.map((plant) => <CartItem plant={plant} key={plant.id} />)
          ) : (
            <div className="pt-32 text-center font-serif tracking-wider">
              <p>Your cart is empty</p>
              <button
                className="btn btn-sm mt-7 w-[200px] rounded-sm bg-neutral-950 text-sm font-normal  tracking-wide text-neutral-200 hover:bg-lime-400 hover:text-neutral-950"
                onClick={() => {
                  onClose();
                  navigate("/products");
                }}
              >
                Shop
              </button>
            </div>
          )}
        </div>
        {!emptyCart && (
          <>
            <div className="flex h-20 justify-between px-6 pt-6 font-serif ">
              <p className="text-base font-semibold uppercase tracking-wide">
                Subtotal
              </p>
              <p className="text-lg tracking-wide">
                {`$${!emptyCart ? subTotal : 0}.00`}
              </p>
            </div>
            <Btn
              type="cart_side_bar"
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
            >
              Checkout
            </Btn>
          </>
        )}
      </Drawer>
    </>
  );
}

export default Cart;
