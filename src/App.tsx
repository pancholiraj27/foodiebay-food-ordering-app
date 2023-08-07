import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderOnline from "./pages/Order-Online/OrderOnline";
import Dining from "./pages/Dining/Dining";
import NightLife from "./pages/Nightlife/NightLife";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CartSection from "./components/Cart/CartSection";

function App() {
  const [cartItem, setCartItem] = useState<any>({});
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order-online"
            element={
              <OrderOnline
                cartItem={cartItem}
                setCartItem={setCartItem}
                cartItemCount={cartItemCount}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route
            path="/dining"
            element={
              <Dining
                cartItem={cartItem}
                setCartItem={setCartItem}
                cartItemCount={cartItemCount}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route
            path="/nightlife-and-clubs"
            element={
              <NightLife
                cartItem={cartItem}
                setCartItem={setCartItem}
                cartItemCount={cartItemCount}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route
            path="/order-online/:id/:id"
            element={
              <ProductDetail
                cartItem={cartItem}
                setCartItem={setCartItem}
                cartItemCount={cartItemCount}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route
            path="/dining/:id/:id"
            element={
              <ProductDetail
                cartItem={cartItem}
                setCartItem={setCartItem}
                cartItemCount={cartItemCount}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartSection
                cartItem={cartItem}
                setCartItem={setCartItem}
                cartItemCount={cartItemCount}
                setCartItemCount={setCartItemCount}
              />
            }
          />
          <Route
            path="/nightlife-and-clubs/:id/:id"
            element={
              <ProductDetail
                cartItem={cartItem}
                setCartItem={setCartItem}
                cartItemCount={cartItemCount}
                setCartItemCount={setCartItemCount}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
