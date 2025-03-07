import { useState } from "react";
import styles from "./Hamburger.module.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen((is) => !is)} className={styles.ham}>
      {!isOpen ? (
        <i className="fa fa-bars" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-times" aria-hidden="true"></i>
      )}
    </div>
  );
}
