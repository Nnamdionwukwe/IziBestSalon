import styles from "./Home.module.css";

export default function SpaMain() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.main}>
      <div className={styles.mainSub}>
        <img className={styles.logo} src={image} />

        <div className={styles.mainDiv}>
          <div className={styles.iziBest2}>
            <p>SPA PARTIES</p>
          </div>

          <div className={styles.today}>
            <p>
              Discover the good life. Hit the pause button and indulge together.
              Make any occasion<span> big, small or spontaneous,</span>
              {""} something amazing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
