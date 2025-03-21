import styles from "./main2.module.css";

export default function Main3() {
  const image = "salon-logo.jpg";

  return (
    <div>
      <div className={styles.main3}>
        <div className={styles.mainSub}>
          <img className={styles.logo} src={image} />

          <div className={styles.mainDiv}>
            <div className={styles.iziBest2}>
              <p>CONTACT</p>
            </div>

            <div className={styles.today2}>
              <p>
                Discover the good life. Come and enjoy the{" "}
                <span> utimate look transformation</span> experience at Izi
                Lifestlye Salon.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.inputMain}>
        <div>
          <p className={styles.location}>
            Conveniently located at Chadellux Hotel & Suits, Durumi.
          </p>

          <p className={styles.email}>Email: izilifestyle@gmail.com</p>
        </div>

        <div></div>

        <div>
          <h5 className={styles.add}>Address</h5>
          <p className={styles.add2}>Chadellux Hotel & Suits, Durumi</p>

          <h5 className={styles.add3}>Phones</h5>
          <p className={styles.add2}>+234 803 0588 774 Main</p>
          <p className={styles.add2}>+234 803 4903 356</p>

          <h5 className={styles.add3}>Hours</h5>
          <p className={styles.mon}>Mon - Sat: 24/7</p>
          <p className={styles.mon}>Sun: By appointment only</p>
        </div>
      </div>
    </div>
  );
}
