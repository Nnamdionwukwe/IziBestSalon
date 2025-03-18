import { Link } from "react-router-dom";
import styles from "./HairComp.module.css";

export default function MakeUpNavigation() {
  const hair = "makeup1.jpg";
  const wax5 = "makeup2.jpg";
  const nails = "makeup3.jpg";
  const face = "makeup4.jpg";
  const body = "makeup5.jpg";
  const wax6 = "makeup6.jpg";

  return (
    <div className={styles.imageDiv2}>
      <div className={styles.imageDivImg1}>
        <img className={styles.img1} src={body} />

        <img src={hair} />
      </div>

      <div className={styles.imageDivImg2}>
        <img className={styles.img1} src={wax5} />

        <img className={styles.img1} src={nails} />

        <img className={styles.img1} src={wax6} />

        <img src={face} />
      </div>
    </div>
  );
}
