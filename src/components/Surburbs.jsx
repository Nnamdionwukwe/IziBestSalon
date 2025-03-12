import styles from "./Surburbs.module.css";

export default function Surburbs() {
  const image = "izi2.jpg";

  return (
    <div className={styles.main}>
      <div className={styles.imageDiv}>
        <img src={image} />
      </div>

      <div className={styles.mainSub}>
        <p>
          PROVIDING THE FEELING OF "THE CITY" LUXURY SALON WITH THE CONVENIENCE
          OF SURBURBS.
        </p>
      </div>
    </div>
  );
}
