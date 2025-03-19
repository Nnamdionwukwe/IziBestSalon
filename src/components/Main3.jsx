import { useState } from "react";
import styles from "./Main2.module.css";
// import styles from "./Home.module.css";

export default function Main3() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const image = "salon-logo.jpg";

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainSub}>
          <img className={styles.logo} src={image} />

          <div className={styles.mainDiv}>
            <div className={styles.iziBest}>
              <p>UPDATES</p>
            </div>

            <div className={styles.today}>
              <p>
                Sign up to receive access to monthly specials and exclusive
                offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.inputMain}>
        <div className={styles.inputDiv}>
          <p className={styles.inputP1}>* indicates required</p>
          <h4 className={styles.inputP2}>Email Address *</h4>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>

        <div className={styles.inputDiv}>
          <h4 className={styles.inputP3}>First Name *</h4>

          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          />
        </div>

        <div className={styles.inputDiv}>
          <h4 className={styles.inputP3}>Last Name *</h4>

          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          />
        </div>

        <div className={styles.subscribeDiv}>
          <p>SUBSCRIBE</p>
        </div>
      </div>
    </div>
  );
}
