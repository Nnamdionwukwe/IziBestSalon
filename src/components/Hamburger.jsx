import { useState } from "react";
import styles from "./Hamburger.module.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.ham}>
      <div onClick={() => setIsOpen((is) => !is)}>
        {!isOpen ? (
          <i className="fa fa-bars" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-times" aria-hidden="true"></i>
        )}
      </div>

      {isOpen && (
        <div className={styles.nav}>
          <div className={styles.navSub}>
            <div>
              <h4 className={styles.home}>Home</h4>

              <div className={styles.arrowDiv}>
                <h4>Services</h4>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </div>

              <div className={styles.arrowDiv}>
                <h4>About</h4>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </div>

              <h4 className={styles.promo}>Promotions</h4>
              <h4 className={styles.promo}>Lookbook</h4>
              <h4 className={styles.promo}>Contacts</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
