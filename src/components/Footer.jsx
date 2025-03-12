import styles from "./Footer.module.css";

export default function Footer() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.Izi}>
          <img src={image} />
          <p>Izi Lifestyle</p>
        </div>
        Izi Lifestyle Salon
      </div>
    </div>
  );
}
