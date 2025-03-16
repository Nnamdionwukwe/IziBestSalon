import { useState } from "react";
import HomeNavBar from "./HomeNavBar";
import styles from "./HomePage.module.css";

const steps = [
  "box2.jpg",
  "box1.jpg",
  "box 3.jpg",
  "cut1.jpg",
  "cut2.jpg",
  "cut3.jpg",
  "ghana1.jpg",
  "ghana2.jpg",
  "ghana4.jpg",
  "install1.jpg",
  "install2.jpg",
  "install3.jpg",
  "install4.jpg",
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
    if (step < 14) setStep(step + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className={styles.home}>
      <div>
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
