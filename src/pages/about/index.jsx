import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import styles from "./about.module.css";

const AboutPage = () => {
  const profileImg = "/src/assets/profile.jpg";

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.card}>
          <div className={styles.avatarWrap}>
            <img
              src={profileImg}
              alt="Hassaan Nauman"
              className={styles.avatar}
            />
          </div>
          <div className={styles.info}>
            <h1>Hassaan Nauman</h1>
            <p className={styles.role}>
              React js learner | JavaScript CSS HTML expert | student of SMIT
            </p>

            <div className={styles.meta}>
              <div>
                <strong>Location:</strong> Karachi
              </div>
            </div>

            <div className={styles.timeline}>
              <h3>My Timeline</h3>
              <div className={styles.event}>
                <div className={styles.year}>2023</div>
                <div className={styles.desc}>
                  <strong>Matriculation in Computer Science</strong>
                  <div>
                    Completed Matriculation from the Board of Secondary Education,
                    Karachi, specializing in Computer Science
                  </div>
                </div>
              </div>

              <div className={styles.event}>
                <div className={styles.year}>2024 - Present</div>
                <div className={styles.desc}>
                  <strong>Pursuing Intermediate in Pre - Engineering</strong>
                  <div>
                    Completed the 1st year and now currently studying in 2nd year
                    in Pre-Engineering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
