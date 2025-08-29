import { Link } from "react-router-dom";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1>Page Not Found</h1>
        <p>
          Oops! The page you're looking for doesn't exist. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className={styles.actions}>
          <Link to="/" className="btn">
            Go Home
          </Link>
          <Link to="/product" className="btn btn-secondary">
            Browse Products
          </Link>
        </div>
        <div className={styles.help}>
          <p>Need help? <Link to="/contact">Contact our support team</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
