import { useState } from "react";
import styles from "./Hamburger.module.css";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.ham}>
      <div className={styles.hamImg} onClick={() => setIsOpen((is) => !is)}>
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
              <Link className={styles.home} to="/homepage">
                <h4 className={styles.home}>Home</h4>
              </Link>

              <div>
                <Link to="/services" className={styles.arrowDiv}>
                  <h4>Services</h4>
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </Link>
              </div>

              <div>
                <Link to="/about" className={styles.arrowDiv}>
                  <h4>About</h4>
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </Link>
              </div>

              <Link to="/promotions" className={styles.promo}>
                <h4>Promotions</h4>
              </Link>

              <Link to="lookbooks" className={styles.promo}>
                <h4>Lookbook</h4>
              </Link>

              <Link to="contacts" className={styles.promo}>
                <h4>Contacts</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
