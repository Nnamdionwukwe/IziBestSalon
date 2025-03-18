import { useState } from "react";
import HomeNavBar from "./HomeNavBar";
import styles from "./HomePage.module.css";

const steps = [
  "bridal1.jpg",
  "bridal3.jpg",
  "bridal4.jpg",
  "bridal5.jpg",
  "lash2.jpg",
  "lash1.jpg",
  "lash3.jpg",

  "wax4.jpg",
];

export default function HomePage() {
  // const image = "box1.jpg";
  // const image1 = "box2.jpg";
  // const image3 = "box 3.jpg";
  // const image2 = "cut1.jpg";
  // const image4 = "cut2.jpg";

  // const image5 = "cut3.jpg";
  // const image6 = "ghana1.jpg";
  // const image7 = "ghana2.jpg";

  // const image8 = "ghana3.jpg";
  // const image9 = "ghana4.jpg";
  // const image10 = "install1.jpg";
  // const image11 = "install2.jpg";
  // const image12 = "install3.jpg";
  // const image31 = "install4.jpg";

  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 8) setStep(step + 1);
    if (step >= 8) setStep(1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    if (step <= 1) setStep(8);
  }

  return (
    <div className={styles.homeMain}>
      <div className={styles.homeImgMain}>
        <HomeNavBar />
      </div>

      <div className={styles.homeImg}>
        <div onClick={(e) => handleNext(e)} className={styles.leftDiv}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>

        <img src={steps[step - 1]} />

        <div onClick={(e) => handlePrevious(e)} className={styles.rightDiv}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
