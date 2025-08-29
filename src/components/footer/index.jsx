import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <Link to="/" className={styles.footerLogo}>
            ShopCart
          </Link>
        </div>
        
        <div className={styles.footerCenter}>
          <nav className={styles.footerNav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">All Products</Link>
          </nav>
        </div>
        
        <div className={styles.footerRight}>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>Facebook</a>
            <a href="#" className={styles.socialLink}>Twitter</a>
            <a href="#" className={styles.socialLink}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
