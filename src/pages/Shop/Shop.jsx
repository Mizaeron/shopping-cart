import styles from "./Shop.module.css";
import { useState } from "react";

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

  console.log(inputValue);

  const handleChange = (id, value) => {
    console.log(inputValue);
    setInputValue((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
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
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
