import styles from "./Home.module.css";

export default function Main() {
  const image = "salon-logo.jpg";
  const image1 = "izi1.jpg";
  const image3 = "izi3.jpg";
  const image2 = "izi2.jpg";
  const image4 = "izi4.jpg";

  const image5 = "05.svg";
  const image6 = "01.svg";
  const image7 = "06.svg";

  const image8 = "cute1.jpg";
  const image9 = "cute2.jpg";
  const image10 = "cute3.jpg";
  const image11 = "cute4.jpg";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainSub}>
          <img className={styles.logo} src={image} />

          <div className={styles.mainDiv}>
            <div className={styles.iziBest}>
              <p>EXPERIENCE IZI LIFESTYLE </p>
            </div>

            <div className={styles.today}>
              <p>
                Today everyone needs a little time away. Imagine an entire day
                just for you... Leave stunning and renewed!
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
          <h5>THE IZI LIFESTYLE DIFFERENCE</h5>
        </div>

        <div className={styles.best1}>
          <p className={styles.iconP}>
            Izi Lifestyle Salon offers a tranquil and transformational hair
            styles and braids in a luxury enviroment, allowing you to be whisked
            away, completely uniterrupted by any distractions.
          </p>
        </div>

        <div className={styles.iconDiv}>
          <img src={image7} />

          <div>INNOVATION</div>
          <div>
            <p className={styles.iconP}>
              From our roots to yours, we're driven by unceasing imagination
              that pushes us to lead the industry with innovative methods.
            </p>
          </div>
        </div>

        <div className={styles.iconDiv}>
          <img src={image6} />

          <div>PRECISION</div>
          <div>
            <p className={styles.iconP}>
              Our team of stylists are known for their attention to detail and
              unmatched precision, leading you to the perfect look.
            </p>
          </div>
        </div>

        <div className={styles.iconDiv}>
          <img src={image5} />

          <div>PERFECTION</div>
          <div>
            <p className={styles.iconP}>
              IziBest team of experts offer you the best practices and
              philosophies anywhere, so you can create greater balance in your
              life and feel your very best.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.come}>
          <p className={styles.come1}>
            COME AND ENJOY THE ULTIMATE HAIR STYLING EXPERIENCE, REJUVENATE YOUR
            HAIR AND TRANSFORM YOUR LOOK IN OUR RELAXING ENVIRONMENT WITH EVERY
            COMFORT YOU MAY NEED. GIVE THE GIFT OF RELAXATION OR SHARE YOUR
            SPECIAL DAY WITH FAVORITE FRIENDS & FAMILY.
          </p>

          <p className={styles.come2}></p>

          <p className={styles.come3}>
            Izi lifestyle goes far beyond hair transformation, indulgence and
            style. Our friendly, experienced and gracious service awaits you.
            Join us.
          </p>
        </div>

        <div className={styles.hair}>
          <img src={image8} />
        </div>

        <div className={styles.hair}>
          <img src={image9} />
        </div>

        <div className={styles.hair}>
          <img src={image10} />
        </div>

        <div className={styles.hair}>
          <img src={image11} />
        </div>
      </div>

      <div>
        <p className={styles.our}>OUR APPROACH</p>

        <p className={styles.come5}></p>
      </div>
    </div>
  );
}
