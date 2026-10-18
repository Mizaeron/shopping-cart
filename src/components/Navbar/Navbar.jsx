import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ cartItems }) {
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + Number(item.quantity),
    0,
  );
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">
        Cart <span className={styles.totalQuantity}>{totalQuantity}</span>
      </Link>
    </nav>
  );
}

export default Navbar;
