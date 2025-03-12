import styles from "./Footer.module.css";

export default function Footer() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.Izi}>
          <img src={image} />
          <p>izi L lifestyle</p>
        </div>

        <p>Izi Lifestyle Salon</p>
        <p>Chandellux Imperial Hotel</p>
        <p>Durumi</p>
        <p></p>
      </div>
    </div>
  );
}
