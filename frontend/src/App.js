import React, { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AgeVerification from "./components/age-verification/AgeVerification";
import "./css/main.css";

// home page
const Home = lazy(() => import("./pages/Home"));

// shop pages
const ShopCatalog = lazy(() => import("./pages/ShopCatalog"));
const ShopGridStandard = lazy(() => import("./pages/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/ShopGridFilter"));

// product pages
const Product = lazy(() => import("./pages/Product"));

// user authentication
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
const Login = lazy(() => import("./pages/Login"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const ResetPasswordConfirm = lazy(() => import("./pages/ResetPasswordConfirm"));
const Register = lazy(() => import("./pages/Register"));

// other pages
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Router>
      <AgeVerification />
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="cage-preloader-wrapper">
              <div className="cage-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            {/* home pages */}
            <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
            <Route path={process.env.PUBLIC_URL + "/home"} element={<Home />} />

            {/* shop pages */}
            <Route
              path={process.env.PUBLIC_URL + "/shop-catalog/:id"}
              element={<ShopCatalog />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-standard"}
              element={<ShopGridStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-filter"}
              element={<ShopGridFilter />}
            />

            {/* product pages */}
            <Route
              path={process.env.PUBLIC_URL + "/product/:id"}
              element={<Product />}
            />

            {/* authentication pages */}
            <Route
              path={process.env.PUBLIC_URL + "/login"}
              element={<Login />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/register"}
              element={<Register />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/dj-rest-auth/registration/account-confirm-email/:key/"}
              element={<EmailVerification />}
            />

            {/* other pages */}
            <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
