import styles from "./Cart.module.css";
import remove from "../../assets/remove.svg";
// import { useProducts } from "../../hooks/useProducts";

function Cart({ cartItems, setCartItems }) {
  const handleMinus = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const handlePlus = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.cart}>
      {cartItems.map((item) => {
        console.log(item);
        return (
          <div key={item.id} className={styles.cartItems}>
            <img
              src={item.image}
              alt=""
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <span className={styles.quant}>{item.quantity}</span>
            <button
              className={styles.button}
              type="button"
              onClick={() => handleMinus(item.id)}
            >
              -
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={() => handlePlus(item.id)}
            >
              +
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={() => handleRemove(item.id)}
            >
              <img src={remove} alt="remove" className={styles.removeIcon} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
