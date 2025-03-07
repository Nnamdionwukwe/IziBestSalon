import Hamburger from "./Hamburger";
import SalonLogo from "./SalonLogo";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <SalonLogo />

      <Hamburger />
    </div>
  );
}
