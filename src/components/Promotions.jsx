import NavBar from "./NavBar";
import styles from "./Home.module.css";
import Footer from "./Footer";
import Main2 from "./Main2";

export default function Promotions() {
  return (
    <div className={styles.mainMain}>
      <NavBar />

      <Main2 />

      <Footer />
    </div>
  );
}
