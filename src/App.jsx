import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import styles from "./App.module.css";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import About from "./components/About";
import Promotions from "./components/Promotions";
import LookBooks from "./components/LookBooks";
import Contacts from "./components/Contacts";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path="homepage" element={<HomePage />} />

          <Route path="services" element={<Services />} />

          <Route path="about" element={<About />} />

          <Route path="promotions" element={<Promotions />} />

          <Route path="lookbooks" element={<LookBooks />} />

          <Route path="contacts" element={<Contacts />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
