import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./product.module.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(response.data);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Loading products...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.header}>
          <h1>Our Products</h1>
          <p>Discover amazing products at great prices</p>
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search Your Product Here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => {
            const { title, price, image, description } = product;
            return (
              <div key={product.id} className={`card ${styles.productCard}`}>
                <div className={styles.imageContainer}>
                  <img src={image} alt={title} className={styles.productImage} />
                  <div className={styles.overlay}>
                    <Link to={`/product/${product.id}`} className="btn">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>
                    <Link to={`/product/${product.id}`}>{title}</Link>
                  </h3>
                  <p className={styles.productDescription}>
                    {description.length > 100 
                      ? `${description.substring(0, 100)}...` 
                      : description
                    }
                  </p>
                  <div className={styles.productFooter}>
                    <span className={styles.price}>${price}</span>
                    <button className="btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className={styles.noResults}>
            <h3>No products found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
