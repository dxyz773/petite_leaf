import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartCreateContext";

function CartContextProvider({ children }) {
  const [cart, setCart] = useState(function () {
    const cartItem = localStorage.getItem("cart");
    return cartItem ? JSON.parse(cartItem) : [];
  });

  const [open, setOpen] = useState(false);

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart],
  );

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  function addCartItem(item) {
    if (!item) return;
    const cartItem = cart.find((curr) => curr.id === item.id);

    if (cart.length > 0 && cartItem) {
      const updated = cart.filter((curr) =>
        curr.id === cartItem.id ? { ...curr, quantity: curr.quantity++ } : curr,
      );
      setCart(updated);
    } else {
      setCart([...cart, item]);
    }
  }

  function clearCart() {
    setCart([]);
  }

  function decreaseItemQuantity(item) {
    if (!item) return;
    const cartItem = cart.find((curr) => curr.id === item.id);
    if (cart.length > 0 && cartItem) {
      if (cartItem.quantity > 1) {
        const updated = cart.filter((curr) =>
          curr.id === cartItem.id
            ? { ...curr, quantity: curr.quantity-- }
            : curr,
        );
        setCart(updated);
      } else {
        const updated = cart.filter((curr) => curr.id !== cartItem.id);
        setCart(updated);
      }
    } else {
      return;
    }
  }

  function removeItem(item) {
    if (!item) return;
    const cartItem = cart.find((curr) => curr.id === item.id);
    if (cart.length > 0 && cartItem) {
      const updated = cart.filter((curr) => curr.id !== cartItem.id);
      setCart(updated);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        open,
        showDrawer,
        onClose,
        addCartItem,
        clearCart,
        decreaseItemQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext used outside of CartContextProvider");

  return context;
}

export { CartContextProvider, useCart };
