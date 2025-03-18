import { Link } from "react-router-dom";
import styles from "./HairComp.module.css";

export default function LashNavigation() {
  const hair = "lash1.jpg";
  const nails = "lash2.jpg";
  const face = "lash3.jpg";
  const body = "lash4.jpg";

  return (
    <div className={styles.imageDiv}>
      <Link to="/hair" className={styles.imageDivImg1}>
        <img src={hair} />
      </Link>

      <Link to="/nails" className={styles.imageDivImg2}>
        <img src={nails} />
      </Link>

      <Link to="/face" className={styles.imageDivImg3}>
        <img src={face} />
      </Link>

      <Link to="/body" className={styles.imageDivImg4}>
        <img src={body} />
      </Link>
    </div>
  );
}
