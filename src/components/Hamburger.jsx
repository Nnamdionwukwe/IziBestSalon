import { useState } from "react";
import styles from "./Hamburger.module.css";
import { Link } from "react-router-dom";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function handleClose() {
    setIsOpen((is) => !is);
    setIsOpen2(false);
    setIsOpen3(false);
  }

  return (
    <div className={styles.ham}>
      <div className={styles.hamImg} onClick={() => handleClose()}>
        {!isOpen ? (
          <i className="fa fa-bars" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-times" aria-hidden="true"></i>
        )}
      </div>

      <>
        {isOpen && (
          <div className={styles.nav}>
            <div className={styles.navSub}>
              <div>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={styles.home}
                  to="/"
                >
                  <h4 className={styles.home}>Home</h4>
                </Link>

                <Link className={styles.home} to="/homepage">
                  <h4 className={styles.home}>Izi Lifestyle</h4>
                </Link>

                <div>
                  <Link className={styles.arrowDiv}>
                    <h4 onClick={() => setIsOpen2(true)}>Services</h4>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </Link>
                </div>

                <div>
                  <Link className={styles.arrowDiv}>
                    <h4 onClick={() => setIsOpen3(true)}>About</h4>
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
      </>

      <div>
        {isOpen2 && (
          <div className={styles.nav}>
            <div className={styles.navSub}>
              <div className={styles.navSubMain}>
                <i
                  onClick={() => setIsOpen2(false)}
                  className="fa fa-long-arrow-left"
                  aria-hidden="true"
                ></i>

                <Link className={styles.home} to="/hair">
                  <h4 className={styles.home}>Hair</h4>
                </Link>

                <Link className={styles.home} to="/nails">
                  <h4 className={styles.home}>Nails</h4>
                </Link>

                <div>
                  <Link to="/face" className={styles.arrowDiv}>
                    <h4>Face</h4>
                  </Link>
                </div>

                <div>
                  <Link to="/body" className={styles.arrowDiv}>
                    <h4>Body</h4>
                  </Link>
                </div>

                <Link to="/waxing" className={styles.promo}>
                  <h4>Waxing</h4>
                </Link>

                <Link to="/makeup" className={styles.promo}>
                  <h4>Makeup</h4>
                </Link>

                <Link to="/eyelash" className={styles.promo}>
                  <h4>Eyelash</h4>
                </Link>

                <Link to="/bridal" className={styles.promo}>
                  <h4>Bridal</h4>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {isOpen3 && (
          <div className={styles.nav}>
            <div className={styles.navSub}>
              <div className={styles.navSubMain}>
                <i
                  onClick={() => setIsOpen3(false)}
                  className="fa fa-long-arrow-left"
                  aria-hidden="true"
                ></i>

                <Link className={styles.home} to="/spaparties">
                  <h4 className={styles.home}>Spa Parties</h4>
                </Link>

                <Link className={styles.home} to="/products">
                  <h4 className={styles.home}>Products</h4>
                </Link>

                <div>
                  <Link to="/employment" className={styles.arrowDiv}>
                    <h4>Employment</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
