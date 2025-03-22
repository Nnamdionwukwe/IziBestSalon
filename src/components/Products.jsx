import NavBar from "./NavBar";
import styles from "./Home.module.css";
import Footer from "./Footer";

export default function Products() {
  return (
    <div>
      <NavBar />

      <div className={styles.main0}>
        <div className={styles.mainSub}>
          <div className={styles.mainDiv}>
            <div>
              <h4 className={styles.mainPara}>PRODUCT SELECTION </h4>
            </div>

            <div className={styles}>
              <p className={styles.mainPara1}>
                At Izi Lifestyle Salon you will find carefully selected
                professional care products for hair, body, nails, face, and
                skin.
              </p>

              <p className={styles.mainPara1}>
                We've curated only the best professional products that we also
                use on day-to-day bases. Now you can achieve same results at
                home. Frequently we run specials on hair care and skin care
                lines. We encourage you to often look at our promotions section,
                subscribe to e-newsletter or visit our shop for more details.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
