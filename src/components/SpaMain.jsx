import styles from "./Home.module.css";

export default function SpaMain() {
  const image = "salon-logo.jpg";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainSub}>
          <img className={styles.logo} src={image} />

          <div className={styles.mainDiv}>
            <div className={styles.iziBest4}>
              <p>SPA PARTIES </p>
            </div>

            <div className={styles.today}>
              <p>
                Discover the good life. Hit the pause button and indulge
                together. Make any occasion
                <span> big, small or spontaneous,</span>
                {""} something amazing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main0}>
        <div>
          <h3>A SPA PARTY IS A REAL TREAT FOR YOUR LOVED ONES</h3>
        </div>

        <div>
          <p>
            Bridal showers, employee retreats, birthdays and teens spa parties
            are among the top 10 trends in spa and salon services. The
            treatments are hand picked and customized to accommodate the needs
            of the group, budget and personal style. The treatments are usually
            “express” versions of regular treatments.
          </p>

          <p>
            Our rates are based on the number of guests, the number of
            treatments and how long the spa party runs. Please tell us your
            budget and number of guests, and we will be happy to work out a
            package that suits your specific needs. We recommend that you call
            us at least 1 month prior to event, as that will give us a time to
            arrange to our regular working schedule.
          </p>

          <p>
            To schedule, please call the Izi Lifestyle Salon at +234 803 0588
            774 or email to izilifestyle.gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
