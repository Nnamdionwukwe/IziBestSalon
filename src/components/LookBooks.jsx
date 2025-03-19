import { useState } from "react";
import HomeNavBar from "./HomeNavBar";
import styles from "./HomePage.module.css";
import NavBar from "./NavBar";

const steps = [
  "lookbook1.jpg",
  "lookbook2.jpg",
  "lookbook3.jpg",
  "lookbook5.jpg",
  "lookbook6.jpg",
  "lookbook7.jpg",
  "lash3.jpg",
];

export default function LookBooks() {
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
    if (step < 7) setStep(step + 1);
    if (step >= 7) setStep(1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    if (step <= 1) setStep(7);
  }

  return (
    <div className={styles.homeMain}>
      <div className={styles.homeImgMain}>
        <NavBar />
      </div>

      <div className={styles.homeImg}>
        <div onClick={(e) => handleNext(e)} className={styles.leftDiv}>
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>

        <img src={steps[step - 1]} />

        <div onClick={(e) => handlePrevious(e)} className={styles.rightDiv}>
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}
