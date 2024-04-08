// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import store from "./store";

import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import ScrollToTop from "./ui/ScrollToTop";
import Root from "./routes/Root";
import Products from "./features/products/Products";
import Product from "./features/products/Product";
import OurStory from "./pages/OurStory";
import Blog from "./features/blog/Blog";
import Login from "./pages/Login";
import Shipping from "./pages/Shipping";
import ReturnPolicy from "./pages/ReturnPolicy";
import FAQSection from "./pages/FAQSection";
import Playground from "./ui/Playground";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Collections from "./features/products/Collections";
import CookiePolicy from "./pages/CookiePolicy";
import Collection from "./features/products/Collection";
import LeafAndMentalWellness from "./pages/LeafAndMentalWellness";
import Post from "./features/blog/Post";
import Checkout from "./features/cart/Checkout";
import Order from "./features/cart/Order";
import OrderNotFound from "./features/cart/OrderNotFound";
// ---------------- USERS ---------------------------- //
import Account from "./features/users/Account";
import Addresses from "./features/users/Addresses";
import Favorites from "./features/users/Favorites";
import OrderHistory from "./features/users/OrderHistory";
import Payments from "./features/users/Payments";
import Profile from "./features/users/Profile";
import AccountLayout from "./features/users/AccountLayout";
import Register from "./pages/Register";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import OrderSearch from "./features/cart/OrderSearch";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* //------------------- App Layout ------------------ // */}
            <Route element={<AppLayout />}>
              {/* //------------------- Company -------------------- // */}
              <Route path="/" element={<Root />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route
                path="leaf-mental-wellness"
                element={<LeafAndMentalWellness />}
              />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:name" element={<Post />} />

              {/* // -------------- Products/Shop ------------------// */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/:name" element={<Product />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/collections/:name" element={<Collection />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order" element={<OrderNotFound />} />
              <Route path="order/search" element={<OrderSearch />} />
              <Route path="/order/:orderNumber" element={<Order />} />

              {/* // --------------------- AUTH -------------------// */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* // --------------------- USERS -------------------// */}

              <Route
                element={
                  <ProtectedRoute>
                    <AccountLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/account" element={<Account />} />
                <Route path="/account/favorites" element={<Favorites />} />
                <Route path="/account/addresses" element={<Addresses />} />
                <Route path="/account/payments" element={<Payments />} />
                <Route path="/account/profile" element={<Profile />} />
                <Route
                  path="/account/order-history"
                  element={<OrderHistory />}
                />
              </Route>

              {/* //----------------- FOOTER ---------------------- // */}
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/faq" element={<FAQSection />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />

              {/* //--------------- Playground ---------------------- */}
              <Route path="/playground" element={<Playground />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fafaf9",
            color: "#0a0a0a",
            borderRadius: "5px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
