import styles from "./IziDetails.module.css";

export default function IziDetails() {
  const image = "salon-logo.jpg";

  return (
    <div className={styles.main}>
      <div className={styles.imgDiv}>
        <div className={styles.paraDiv}>
          <p className={styles.para1}>
            Izi Lifestyle Salon owner on family ties, her passion for style, and
            making people look and feel thier absolute best...
          </p>

          <div>
            <p className={styles.para2}>
              ANSWERING THE CREATIVE CALL, SHE SPENT TIME IN EUROPE, RETURNING
              TO CHICAGO - WORKING IN HER FAMILY'S SALON UNTIL OPENING HER OWN.
              TODAY, SHE IS THE FORCE BEHIND TIARA - HER SALON ON WESTERN AVENUE
              IN LAKE FOREST, A LOCATION SHE'S BEEN IN FOR NEARLY A DECADE.
              "I'VE BEEN A PART OF FABRIC OF THE THE NORTH SHORE FOR THE LAST 20
              YEARS," KRISTINA EXPLAINS. "I JUST LOVE THE PEOPLE AND THE
              ATMOSPHERE. IT'S ALSO WHY I'VE BEEN WITH A LOT OF MY TEAM SINCE
              THE START. WE ALL FEEL THE SAME WAY AND SHARE A SIMILAR VISION."
            </p>
          </div>
        </div>

        <div className={styles.image}>
          <img className={styles.img} src={image} />
        </div>
      </div>
    </div>
  );
}
