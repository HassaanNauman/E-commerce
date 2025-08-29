import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./productDetails.module.css";

const ProductDetails = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchSingleProduct();
  }, [params.id]);

  const fetchSingleProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setSingleProduct(response.data);
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    // TODO: Implement cart functionality
    alert(`Added ${quantity} ${singleProduct.title} to cart!`);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Loading product details...</p>
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
        <div className={styles.breadcrumb}>
          <Link to="/product">Products</Link> / {singleProduct.title}
        </div>

        <div className={styles.productContainer}>
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <img src={singleProduct.image} alt={singleProduct.title} />
            </div>
          </div>

          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{singleProduct.title}</h1>
            
            <div className={styles.rating}>
              <span className={styles.stars}>
                {'★'.repeat(Math.floor(singleProduct.rating?.rate || 0))}
                {'☆'.repeat(5 - Math.floor(singleProduct.rating?.rate || 0))}
              </span>
              <span className={styles.ratingText}>
                {singleProduct.rating?.rate || 0} ({singleProduct.rating?.count || 0} reviews)
              </span>
            </div>

            <div className={styles.price}>${singleProduct.price}</div>
            
            <div className={styles.category}>
              <span>Category: </span>
              <span className={styles.categoryName}>{singleProduct.category}</span>
            </div>

            <p className={styles.description}>{singleProduct.description}</p>

            <div className={styles.quantitySection}>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className={styles.quantityInput}
              />
            </div>

            <div className={styles.actions}>
              <button onClick={addToCart} className="btn">
                Add to Cart
              </button>
              <button className="btn btn-secondary">
                Buy Now
              </button>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚚</span>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🔄</span>
                <span>30-day return policy</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🛡️</span>
                <span>Secure payment</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.relatedProducts}>
          <h2>You might also like</h2>
          <div className={styles.relatedGrid}>
            {/* TODO: Add related products */}
            <div className={`card ${styles.relatedCard}`}>
              <img src="https://via.placeholder.com/200x200" alt="Related product" />
              <h3>Related Product</h3>
              <p>$29.99</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
