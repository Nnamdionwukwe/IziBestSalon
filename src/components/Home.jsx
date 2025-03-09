import NavBar from "./NavBar";
import styles from "./Home.module.css";

export default function Home() {
  const image = "salon-logo.jpg";
  const image1 = "izi1.jpg";
  const image3 = "izi3.jpg";
  const image2 = "izi2.jpg";
  const image4 = "izi4.jpg";

  const image5 = "05.svg";
  const image6 = "01.svg";
  const image7 = "06.svg";

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

      <div className={styles.lifeStytle}>
        <div className={styles.best}>
          <h5>THE IZIBEST LIFESTYLE DIFFERENCE</h5>
        </div>

        <div className={styles.best1}>
          <p>
            IziBest Lifestyle Salon offers a tranquil and transformational hair
            styles and braids in luxury enviroment, allowing you to be whisked
            away, completely uniterrupted by any distractions.
          </p>
        </div>

        <div className={styles.iconDiv}>
          <img src={image7} />

          <div>INNOVATION</div>
          <div>
            <p>
              From our roots to yours, we're driven by unceasing imagination
              that pushes us to lead the industry with innovative methods.
            </p>
          </div>
        </div>

        <div className={styles.iconDiv}>
          <img src={image6} />

          <div>PRECISION</div>
          <div>
            <p>
              Our team of stylists are known for their attention to detail and
              unmatched precision, leading you to the perfect look.
            </p>
          </div>
        </div>

        <div className={styles.iconDiv}>
          <img src={image5} />

          <div>PERFECTION</div>
          <div>
            <p>
              IziBest team of experts offer you the best practices and
              philosophies anywhere, so you can create greater balance in your
              life and feel your very best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
