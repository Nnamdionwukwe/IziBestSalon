import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "./Home.module.css";
import SoloLogo from "./SoloLogo";
import EmploymentComp from "./EmploymentComp";

export default function Employment() {
  const image8 = "cute1.jpg";
  const image9 = "cute2.jpg";
  const image10 = "cute3.jpg";
  const image11 = "cute4.jpg";

  return (
    <div>
      <NavBar />

      <SoloLogo />

      <EmploymentComp />

      <div className={styles.sub}>
        <div className={styles.hair}>
          <img src={image8} />
        </div>

        <div className={styles.hair}>
          <img src={image9} />
        </div>

        <div className={styles.hair}>
          <img src={image10} />
        </div>

        <div className={styles.hair}>
          <img src={image11} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
