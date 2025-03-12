import styles from "./Footer.module.css";

export default function Footer() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.Izi}>
          <img src={image} />
          <p>izi lifestyle</p>
        </div>

        <div className={styles.paraDiv}>
          <h4 className={styles.para1}>Izi Lifestyle Salon</h4>
          <h4 className={styles.para2}>Chandellux Imperial Hotel Durumi</h4>
          <h4 className={styles.para3}>+234 803 058 8774</h4>
        </div>
      </div>
    </div>
  );
}
