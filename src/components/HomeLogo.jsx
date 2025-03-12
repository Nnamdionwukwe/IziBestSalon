import Logo from "../Logo";
import styles from "./SalonLogo.module.css";

export default function HomeLogo() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.homeLogo}>
      <img className={styles.logo2} src={image} />
      <p>izi lifestyle</p>
    </div>
  );
}
