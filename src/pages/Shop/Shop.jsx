import styles from "./Shop.module.css";
import add from "../../assets/plus.svg";
import remove from "../../assets/minus.svg";
import cart from "../../assets/cart.svg";
import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Dumbbells" },
  { id: 3, name: "Shoes" },
  { id: 4, name: "Bottle" },
  { id: 5, name: "Bag" },
];

function Shop() {
  const [inputValue, setInputValue] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

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

  console.log(inputValue);
  return (
    <div className={styles.shop}>
      {products.map((product) => {
        const inputId = `amount-${product.id}`;

        return (
          <div key={product.id} className={styles.card}>
            {product.name}
            <label htmlFor={inputId}> quantity:</label>
            <input
              type="text"
              id={inputId}
              onChange={(e) => handleChange(product.id, e.target.value)}
              value={inputValue[product.id]}
            />
            <div className={styles.icons}>
              <button type="button" onClick={() => handlePlus(product.id)}>
                <img src={add} alt="add" />
              </button>
              <img src={remove} alt="remove" />
            </div>
            <img className={styles.icons} src={cart} alt="cart" />
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
