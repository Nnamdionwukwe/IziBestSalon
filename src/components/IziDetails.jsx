import styles from "./IziDetails.module.css";

export default function IziDetails() {
  const image = "izi3.jpg";

  return (
    <div className={styles.main}>
      <div className={styles.imgDiv}>
        <div className={styles.paraDiv}>
          <p className={styles.para1}>
            Izi Lifestyle Salon owner on family ties, her passion for style, and
            making people look and feel thier absolute best...
          </p>

          <p className={styles.para2}>
            ANSWERING THE CREATIVE CALL, SHE SPENT TIME IN EUROPE, RETURNING TO
            NIGERIA - WORKING IN HER OWN COMPANY UNTIL OPENING HER OWN LUXURY
            SALON. TODAY, SHE IS THE FORCE BEHIND IZI KIFESTYLE - HER SALON IN
            CHANDELLUX IMPERIAL HOTEL IN DURUMI, A LOCATION SHE'S BEEN IN FOR
            NEARLY HALF A DECADE. "I'VE BEEN A PART OF FABRIC OF BEAUTY,
            LIFESTYLE AND DECORATION FOR THE LAST 20 YEARS," QUEEN LILY
            EXPLAINS. "I JUST LOVE PEOPLE, FASHION AND LUXURY. IT'S ALSO WHY
            I'VE BEEN WITH A LOT OF MY TEAM SINCE THE START. WE ALL FEEL THE
            SAME WAY AND SHARE A SIMILAR VISION."
          </p>
        </div>

        <div className={styles.image}>
          <img className={styles.img} src={image} />
        </div>
      </div>
    </div>
  );
}
