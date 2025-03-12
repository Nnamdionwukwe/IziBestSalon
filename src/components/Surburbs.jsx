import styles from "./Surburbs.module.css";

export default function Surburbs() {
  const image = "izi2.jpg";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.imageDiv}>
          <img src={image} />
        </div>

        <div className={styles.mainSub}>
          <p>
            PROVIDING THE FEELING OF "THE CITY" LUXURY SALON WITH THE
            CONVENIENCE OF SURBURBS.
          </p>
        </div>
      </div>

      <div className={styles.mainPara}>
        <p>
          Recognized as one of the premier salons in Abuja and in Nigeria, the
          Izi Lifestyle team is known for it's warm and friendly atmosphere,
          helping clients experience the peace and comfort they deserve. Open 7
          days a week and 24/7, Izi Lifestyle Salon and Spa can be found just
          past Apo Bridge in Chandellux Imperial Hotel Durumi.
        </p>

        <p>
          At Izi Lifestyle Salon, we provide to our guests the latest in salon
          and spa treatments. From soothing manicures, pedicures, and body
          treatments to a team of stylists that are recognized as leaders in
          forecasting trends and developing innovative styles and color
          techniques - our all-inclusive approach will suit your every need.
        </p>
      </div>
    </div>
  );
}
