import { Link } from "react-router-dom";
import styles from "./HairComp.module.css";

export default function WaxingNavigation() {
  const hair = "wax1.jpg";
  const wax5 = "wax5.jpg";
  const nails = "wax2.jpg";
  const face = "wax3.jpg";
  const body = "wax4.jpg";
  const wax6 = "wax6.jpg";

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

        <img src={face} />
      </div>
    </div>
  );
}
