import styles from "./Shop.module.css";
import add from "../../assets/plus.svg";
import remove from "../../assets/minus.svg";
import cart from "../../assets/cart.svg";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";

function Shop({ handleCart }) {
  const [inputValue, setInputValue] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
  });

  const products = useProducts();

  const handleChange = (id, value) => {
    setInputValue((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handlePlus = (id) => {
    setInputValue((prev) => ({
      ...prev,
      [id]: Number(prev[id] || 0) + 1,
    }));
  };

  const handleMinus = (id) => {
    setInputValue((prev) => ({
      ...prev,
      [id]: Number(prev[id] || 0) - 1,
    }));
  };

  return (
    <div className={styles.shop}>
      {products.map((product) => {
        const inputId = `amount-${product.id}`;

        return (
          <div key={product.id} className={styles.card}>
            {product.title}
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <label htmlFor={inputId}> quantity:</label>
            <input
              type="text"
              id={inputId}
              onChange={(e) => handleChange(product.id, e.target.value)}
              value={inputValue[product.id]}
            />
            <div className={styles.icons + " " + styles.addRemove}>
              <button type="button" onClick={() => handlePlus(product.id)}>
                <img src={add} alt="add" />
              </button>
              <button type="button" onClick={() => handleMinus(product.id)}>
                <img src={remove} alt="remove" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => handleCart(product, inputValue[product.id] || 1)}
            >
              <img className={styles.icons} src={cart} alt="cart" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
