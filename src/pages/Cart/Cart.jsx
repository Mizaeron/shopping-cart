import styles from "./Cart.module.css";

function Cart({ cartItems }) {
  return (
    <div className={styles.cart}>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} - {item.quantity}
        </div>
      ))}
    </div>
  );
}

export default Cart;
