import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleCart = (name, id, quantity) => {
    setCartItems((prev) => [...prev, { name, id, quantity: Number(quantity) }]);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/shop" element={<Shop handleCart={handleCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
