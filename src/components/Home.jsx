import NavBar from "./NavBar";
import styles from "./Home.module.css";

export default function Home() {
  const image = "salon-logo.jpg";
  const image1 = "izi1.jpg";
  const image3 = "izi3.jpg";
  const image2 = "izi2.jpg";
  const image4 = "izi4.jpg";

  return (
    <div>
      <div className={styles.main}>
        <NavBar />

        <div className={styles.mainSub}>
          <img className={styles.logo} src={image} />

          <div className={styles.mainDiv}>
            <div className={styles.iziBest}>
              <p>EXPERIENCE IZI LIFESTYLE </p>
            </div>

            <div className={styles.today}>
              <p>
                Today everyone need a little time away. Imagine an entire day
                just for you... Leave refreshed and renewed!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.iziImg}>
        <div>
          <img src={image2} />
        </div>

        <div>
          <img src={image1} />
        </div>

        <div>
          <img src={image3} />
        </div>

        <div>
          <img src={image4} />
        </div>
      </div>
    </div>
  );
}
