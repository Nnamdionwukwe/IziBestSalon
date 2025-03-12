import { useState } from "react";
import styles from "./Hamburger.module.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.ham}>
      <div onClick={() => setIsOpen((is) => !is)}>
        {isOpen ? (
          <i className="fa fa-bars" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-times" aria-hidden="true"></i>
        )}
      </div>

      {!isOpen && (
        <div className={styles.nav}>
          <div className={styles.navSub}>
            <div>
              <p>Home</p>
              <p>Services ></p>
              <p>About ></p>
              <p>Promotions</p>
              <p>Lookbook</p>
              <p>Contacts</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
