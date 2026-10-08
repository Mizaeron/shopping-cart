import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/cart"> Cart</Link>
    </nav>
  );
}

export default Navbar;
