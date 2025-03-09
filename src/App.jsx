import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./pages/Layout.jsx";
import NoPage from "./pages/NoPage.jsx";
import Cart from "./pages/Cart.jsx";
import Store from "./pages/Store.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Wish from "./toggler items/Wish.jsx";
import Profile from "./toggler items/Profile.jsx";
import Orders from "./toggler items/Orders.jsx";
import BestSeller from "./toggler items/BestSeller.jsx";
import Sell from "./toggler items/Sell.jsx";
import Review from "./toggler items/Review.jsx";
import Aboutus from "./toggler items/Aboutus.jsx";
import Footer from "./Footer/Footer.jsx";

const App = () => {
  return (
    <Router>
      {/* Main Container to ensure footer stays at the bottom */}
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {/* Content Area */}
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Orders" element={<Orders />} />
              <Route path="BestSeller" element={<BestSeller />} />
              <Route path="Sell" element={<Sell />} />
              <Route path="Review" element={<Review />} />
              <Route path="Aboutus" element={<Aboutus />} />
              <Route path="Store" element={<Store />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="Login" element={<Login />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="Wish" element={<Wish />} />
              <Route path="NoPage" element={<NoPage />} />
            </Route>
          </Routes>
        </div>

        {/* Footer placed at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
