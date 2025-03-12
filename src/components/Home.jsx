import NavBar from "./NavBar";
import styles from "./Home.module.css";
import Approach from "./Approach";
import IziDetails from "./IziDetails";
import Surburbs from "./Surburbs";
import Footer from "./Footer";
import Main from "./Main";

export default function Home() {
  return (
    <div className={styles.mainMain}>
      <NavBar />

      <Main />

      <Approach />

      <IziDetails />

      <Surburbs />

      <Footer />
    </div>
  );
}
