import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import styles from "./contact.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us!</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>
              Have a question or need assistance? We're here to help! 
              Reach out to us through any of the channels below.
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h3>Address</h3>
                  <p>123 Commerce Street<br />Shopping District, NY 10001</p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>📧</div>
                <div>
                  <h3>Email</h3>
                  <p>hello@shopcart.com<br />support@shopcart.com</p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567<br />Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h3>Follow Us</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>📘</a>
                <a href="#" className={styles.socialIcon}>📷</a>
                <a href="#" className={styles.socialIcon}>🐦</a>
                <a href="#" className={styles.socialIcon}>💼</a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
