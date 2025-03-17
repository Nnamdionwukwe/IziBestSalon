import { Link } from "react-router-dom";
import styles from "./HairComp.module.css";

export default function Navigation() {
  const hair = "hair.jpg";
  const nails = "nails.jpg";
  const face = "face.jpg";
  const body = "body.jpg";

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
