import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Contact from "./pages/Contact.tsx";
import Layout from "./pages/Layout.tsx";
import NoPage from "./pages/NoPage.tsx";
import Cart from "./pages/Cart.tsx"
import Store from "./pages/Store.tsx"
import ProductDetails from "./pages/ProductDetails.tsx";
import Wish from './toggler items/Wish.tsx';
import Profile from "./toggler items/Profile.tsx";
import Orders from "./toggler items/Orders.tsx";
import BestSeller from "./toggler items/BestSeller.tsx";
import Sell from "./toggler items/Sell.tsx";
import Review from "./toggler items/Review.tsx";
import Aboutus from "./toggler items/Aboutus.tsx";
import Footer from "./Footer/Footer.tsx";


const App: React.FC = () => {
  return (
    <Router>
      {/* Main Container to ensure footer stays at the bottom */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
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
