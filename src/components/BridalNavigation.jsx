import styles from "./HairComp.module.css";

export default function BridalNavigation() {
  const hair = "bridal1.jpg";
  const wax5 = "bridal2.jpg";
  const nails = "bridal3.jpg";
  const body = "bridal5.jpg";
  const wax6 = "bridal6.jpg";

  return (
    <div className={styles.imageDiv2}>
      <div className={styles.imageDivImg1}>
        <img className={styles.img1} src={body} />

        <img className={styles.img2} src={hair} />
      </div>

      <div className={styles.imageDivImg2}>
        <img className={styles.img1} src={wax5} />

        <img className={styles.img1} src={nails} />

        <img className={styles.img1} src={wax6} />
      </div>
    </div>
  );
}
