import styles from "./IziDetails.module.css";

export default function IziDetails() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.main}>
      <div className={styles.imgDiv}>
        <div className={styles.paraDiv}>
          <p>
            Izi Lifestyle Salon owner on family ties, her passion for style, and
            making people look and feel thier absolute best...
          </p>
        </div>

        <div className={styles.image}>
          <img className={styles.img} src={image} />
        </div>
      </div>
    </div>
  );
}
