import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.logo}>
        ShopCart
      </Link>
      
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/product">
            All Products
          </NavLink>
        </li>
        <li className={styles.cartIcon}>
          <Link to="/cart">
            🛒
            <span className={styles.cartCount}>0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;