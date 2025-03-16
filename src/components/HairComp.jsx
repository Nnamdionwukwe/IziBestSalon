import styles from "./HairComp.module.css";

export default function HairComp() {
  return (
    <div className={styles.main}>
      <div className={styles.hairCutDiv}>
        <h4>HAIRCUT & STYLE</h4>
      </div>

      <div>
        <div className={styles.ourDiv}>
          <p>
            Our stylists are also accomplished colorists, which makes it easier
            to communicate a total vision of your coloring and styling desires.
          </p>
        </div>

        <div>
          <div className={styles.blowDIv}>
            <h5>Blowout & Style</h5>

            <div className={styles.dollarDiv}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwRsCU3zmRmsAQWF6XVNnncHI6zznIERJbQ5aCRMdOqiJSFVEkGkuv8DhRmgNZrcCVUc&usqp=CAU" />
              <p>2,500</p>
            </div>
          </div>

          <div className={styles.ourDiv}>
            <p>
              More than just a Style. This treatment will include a bang trim as
              well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
