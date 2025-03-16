import HomeNavBar from "./HomeNavBar";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const image = "box1.jpg";
  const image1 = "box2.jpg";
  const image3 = "box 3.jpg";
  const image2 = "cut1.jpg";
  const image4 = "cut2.jpg";

  const image5 = "cut3.jpg";
  const image6 = "ghana1.jpg";
  const image7 = "ghana2.jpg";

  const image8 = "ghana3.jpg";
  const image9 = "ghana4.jpg";
  const image10 = "install1.jpg";
  const image11 = "install2.jpg";
  const image12 = "install3.jpg";
  const image31 = "install4.jpg";

  return (
    <div className={styles.home}>
      <div>
        <HomeNavBar />
      </div>

      <div className={styles.homeImg}>
        <img src={image} />
      </div>
    </div>
  );
}
