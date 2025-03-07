import NavBar from "./NavBar";
import styles from "./Home.module.css";
import SalonLogo from "./SalonLogo";

export default function Home() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.mainSub}>
        <img className={styles.logo} src={image} />

        <div className={styles.mainDiv}>
          <div className={styles.iziBest}>
            <p>EXPERIENCE IZI LIFESTYLE </p>
          </div>

          <div className={styles.today}>
            <p>
              Today everyone need a little time away. Imagine an entire day just
              for you... Leave refreshed and renewed!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
