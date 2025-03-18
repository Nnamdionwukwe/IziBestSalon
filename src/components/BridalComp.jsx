import styles from "./HairComp.module.css";

export default function BridalComp() {
  return (
    <div>
      <div>
        <div className={styles.main}>
          <div className={styles.hairCutDiv}>
            <h4>BRIDAL HAIRSTYLES</h4>
          </div>

          <div>
            <div className={styles.ourDiv}></div>

            <div>
              <div className={styles.blowDIv}>
                <h5>Bride Up-Do Styling</h5>

                <div className={styles.dollarDiv}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
                  <p>150,000</p>
                </div>
              </div>

              <div className={styles.ourDiv}>
                <p>
                  10% Discount for 5 or more Bridal Party (Bridesmaid, Mother of
                  Bride, Family & Friends) not including bride.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main2}>
          <div className={styles.hairCutDiv}>
            <h4>BRIDAL MAKEUP</h4>
          </div>

          <div>
            <div className={styles.ourDiv}></div>

            <div>
              <div className={styles.blowDIv}>
                <h5>Bride Makeup Application</h5>

                <div className={styles.dollarDiv}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
                  <p>150,000</p>
                </div>
              </div>

              <div className={styles.ourDiv}>
                <p>
                  10% Discount for 5 or more Bridal Party (Bridesmaid, Mother of
                  Bride, Family & Friends) not including bride.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main2}>
          <div className={styles.hairCutDiv}>
            <h4>BRIDAL NAILS</h4>
          </div>

          <div>
            <div className={styles.ourDiv}></div>

            <div>
              <div className={styles.blowDIv}>
                <h5>Bride Mani & Pedi</h5>

                <div className={styles.dollarDiv}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
                  <p>120,000</p>
                </div>
              </div>

              <div className={styles.ourDiv}>
                <p>
                  10% Discount for 5 or more Bridal Party (Bridesmaid, Mother of
                  Bride, Family & Friends) not including bride.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main2}>
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
