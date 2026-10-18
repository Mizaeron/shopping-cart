import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleCart = (product, quantity) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + Number(quantity) }
            : item,
        );
      }

      return [...prev, { ...product, quantity: Number(quantity) }];
    });
  };

  useEffect(() => {
    console.log(cartItems);
  });

  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/shop" element={<Shop handleCart={handleCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
