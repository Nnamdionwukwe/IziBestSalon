import styles from "./Home.module.css";

export default function SoloLogo() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.main}>
      <div className={styles.mainSub}>
        <img className={styles.logo} src={image} />
      </div>
    </div>
  );
}
