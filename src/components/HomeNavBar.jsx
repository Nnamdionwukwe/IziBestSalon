import Hamburger from "./Hamburger";
import SalonLogo from "./SalonLogo";
import styles from "./NavBar.module.css";
import HomeLogo from "./HomeLogo";

export default function HomeNavBar() {
  return (
    <div>
      <HomeLogo />

      <div className={styles.homeNavBar}>
        <Hamburger />
      </div>
    </div>
  );
}
