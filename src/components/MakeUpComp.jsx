import Footer from "./Footer";
import styles from "./HairComp.module.css";
import Navigation from "./Navigation";

export default function MakeUpComp() {
  return (
    <div className={styles.main3}>
      <div className={styles.hairCutDiv}>
        <h4>MAKEUP</h4>
      </div>

      <div>
        <div className={styles.ourDiv3}>
          <p>
            Our makeup artists use only the purest, most premium grade mineral
            cosmetics line made of natural, fine premier luxury minerals from
            the earth. You'll notice an incredibly silky feel and polished,
            fresh finish. Our lightweight foundations contain a natural sun
            protectant, & look virtually undetectable while providing flawless
            coverage.
          </p>
        </div>

        <div>
          <div className={styles.blowDIv}>
            <h5>Full Makeup Application</h5>

            <div className={styles.dollarDiv}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
              <p>40,000</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.blowDIv}>
            <h5>Eye Makeup Application</h5>

            <div className={styles.dollarDiv}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
              <p>15,000</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.blowDIv}>
            <h5>Lesson</h5>

            <div className={styles.dollarDiv}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
              <p>150,000</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.blowDIv}>
            <h5>For Bride Makeup Application</h5>

            <div className={styles.dollarDiv}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
              <p>150,000</p>
            </div>
          </div>
        </div>

        <div className={styles.r}>
          <div className={styles.ourDiv2}>
            <p>
              *Due to industry trends, availability and pricing on all items are
              subject to change or discontinuation at any time without prior
              notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
