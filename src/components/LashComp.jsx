import Footer from "./Footer";
import styles from "./HairComp.module.css";
import Navigation from "./Navigation";

export default function LashComp() {
  return (
    <div className={styles.main3}>
      <div className={styles.hairCutDiv}>
        <h4>EYE LASH EXTENSIONS</h4>
      </div>

      <div>
        <div className={styles.ourDiv3}>
          <p>
            Our licensed technicians use only the purest, premium grade,
            synthetic silk strands of hair placed individually into natural
            eyelashes using a special bonding agent. You'll notice a difference
            after first treatment looking natural and highly undetectable while
            providing flawless coverage. We specialize in both Classic and
            Advanced American Volume eyelash extensions offering a wide-ranging
            palette of colors and textures. From subtle and natural lashes to
            trendy glamorous look, each application is a work of art with an
            intricate finish.
          </p>
        </div>

        <div>
          <div className={styles.blowDIv}>
            <h5>Eyelash Extensions</h5>

            <div className={styles.dollarDiv}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
              <p>25,000 +</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.blowDIv}>
            <h5>Follow-up Treatment</h5>

            <div className={styles.dollarDiv}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
              <p>10,000 +</p>
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
            <h5>For Bridal Eyelash Extensions</h5>

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
