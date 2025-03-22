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
          <h4 className={styles.mainPara}>
            A SPA PARTY IS A REAL TREAT FOR YOUR LOVED ONES
          </h4>
        </div>

        <div>
          <p className={styles.mainPara1}>
            Bridal showers, employee retreats, birthdays and teens spa parties
            are among the top 10 trends in spa and salon services. The
            treatments are hand picked and customized to accommodate the needs
            of the group, budget and personal style. The treatments are usually
            “express” versions of regular treatments.
          </p>

          <h5 className={styles.mainPara2}>
            Our rates are based on the number of guests, the number of
            treatments and how long the spa party runs. Please tell us your
            budget and number of guests, and we will be happy to work out a
            package that suits your specific needs. We recommend that you call
            us at least 1 month prior to event, as that will give us a time to
            arrange to our regular working schedule.
          </h5>

          <h5 className={styles.mainPara2}>
            To schedule, please call the Izi Lifestyle Salon at +234 803 0588
            774 or email to izilifestyle.gmail.com
          </h5>
        </div>
      </div>

      <div className={styles.main0}>
        <div className={styles.bride}>
          <i class="fa fa-diamond" aria-hidden="true"></i>

          <h5 className={styles.bridePara}>BRIDAL SHOWERS</h5>
          <h5 className={styles.mainPara2}>
            At Izi Lifestyle, we'll make sure you look & feel as elegant &
            unforgettable as you should on your wedding day. With our wide range
            of salon and spa services, you'll find everything you need for
            ultimate glamour on your special day.
          </h5>
        </div>

        <div className={styles.bride}>
          <i class="fa fa-bolt" aria-hidden="true"></i>

          <h5 className={styles.bridePara}>EMPLOYEE RETREATS</h5>
          <h5 className={styles.mainPara2}>
            Let us help you plan your next corporate group event. The perfect
            corporate retreat at Izi Lifestyle transforms your group to see new
            possibilities, make connections and emerge recharged and
            enthusiastic.
          </h5>
        </div>

        <div className={styles.bride}>
          <i class="fa fa-birthday-cake" aria-hidden="true"></i>

          <h5 className={styles.bridePara}>BIRTHDAYS</h5>
          <h5 className={styles.mainPara2}>
            Ready for a memorable day of fun? There's nothing like a relaxing
            escape with your best friends or family to celebrate a special day.
            Choose a delightful, rejuvenating experience at Izi Lifestyle.
          </h5>
        </div>

        <div className={styles.bride}>
          <i class="fa fa-bomb" aria-hidden="true"></i>

          <h5 className={styles.bridePara}>TEENS SPA PARTY</h5>
          <h5 className={styles.mainPara2}>
            A spa atmosphere full of fun, relaxation and pampering - just for
            you and your friends! Each party is customized to meet all your
            unique party needs.
          </h5>
        </div>
      </div>
    </div>
  );
}
