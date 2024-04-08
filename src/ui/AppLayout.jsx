import Footer from "./Footer";
import Header from "./HeaderComponents/Header";
import { Outlet } from "react-router-dom";
import TopOfHeader from "./TopOfHeader";
import Search from "./Search";
import { SearchContextProvider } from "../context/SearchContext";
import DropDown from "./HeaderComponents/Dropdown";
import { CartContextProvider } from "../features/cart/CartContext";
import Cart from "../features/cart/Cart";

function AppLayout() {
  return (
    <div className="bg-stone-100">
      <SearchContextProvider>
        <CartContextProvider>
          <TopOfHeader />
          <Header />

          <main className="relative">
            <Search />
            <DropDown />
            <Outlet />
          </main>
          <Footer />
          <Cart />
        </CartContextProvider>
      </SearchContextProvider>
    </div>
  );
}

export default AppLayout;
