import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Welcome to Hassaan's Store</h1>
            <p> This project is made by Hassaan Nauman | student of SMIT batch 14 | Sir jaffar Aman</p>
            <a href="/product" className="btn">Shop Now</a>
          </div>
        </div>
      </div>

      <div className="container">
        <section className={styles.features}>
          <h2 className="text-center mb-4">Why Choose ShopCart?</h2>
          <div className="grid grid-3">
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>🚚</div>
              <h3>Fast Delivery</h3>
              <p>Get your products delivered within 24 hours</p>
            </div>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Best Prices</h3>
              <p>Competitive prices with regular discounts</p>
            </div>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Secure Shopping</h3>
              <p>100% secure payment and buyer protection</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
