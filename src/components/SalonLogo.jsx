import Logo from "../Logo";
import styles from "./SalonLogo.module.css";

export default function SalonLogo() {
  const image = "salon-logo.jpg";

  return (
    <div>
      <img className={styles.logo} src={image} />
    </div>
  );
}
