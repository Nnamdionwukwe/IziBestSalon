import styles from "./Home.module.css";

export default function SpaMain() {
  const image = "salon-logo.jpg";

  return (
    <div>
      <div className={styles.main2}>
        <div className={styles.mainSub2}>
          <img className={styles.logo} src={image} />

          <div className={styles.mainDiv}>
            <div className={styles.iziBest2}>
              <p>SPA PARTIES</p>
            </div>

            <div className={styles.today2}>
              <p>
                Discover the good life. Hit the pause button and indulge
                together. Make any occasion
                <span> big, small or spontaneous,</span>
                {""} something amazing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subMain}>
        <h5>A Spa Party is a real treat for your loved ones.</h5>
      </div>
    </div>
  );
}
