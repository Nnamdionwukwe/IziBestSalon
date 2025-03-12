import styles from "./Footer.module.css";

export default function Footer() {
  const image = "salon-logo.jpg";

  return (
    <div>
      <div className={styles.main}>
        <div>
          <div className={styles.Izi}>
            <img src={image} />
            <p>izi lifestyle</p>
          </div>

          <div className={styles.paraDiv}>
            <h4 className={styles.para1}>Izi Lifestyle Salon</h4>
            <h4 className={styles.para2}>Chandellux Imperial Hotel Durumi</h4>
            <h3 className={styles.para3}>+234 803 058 8774</h3>
          </div>
        </div>
      </div>

      <div className={styles.mainSub}>
        <div>
          <p className={styles.para}>Copyright 2025</p>
          <p className={styles.paras}>Designed by Daft Punk</p>
        </div>
      </div>
    </div>
  );
}
