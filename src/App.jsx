import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import styles from "./App.module.css";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import About from "./components/About";
import Promotions from "./components/Promotions";
import LookBooks from "./components/LookBooks";
import Contacts from "./components/Contacts";

import Hair from "./components/Hair";
import Nails from "./components/Nails";
import Face from "./components/Face";
import Body from "./components/Body";
import Waxing from "./components/Waxing";
import MakeUp from "./components/MakeUp";
import EyeLash from "./components/EyeLash";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Home />} />

          <Route index path="/" element={<HomePage />} />

          <Route path="services" element={<Services />} />

          <Route path="about" element={<About />} />

          <Route path="promotions" element={<Promotions />} />

          <Route path="lookbooks" element={<LookBooks />} />

          <Route path="contacts" element={<Contacts />} />

          <Route path="hair" element={<Hair />} />
          <Route path="nails" element={<Nails />} />
          <Route path="face" element={<Face />} />
          <Route path="body" element={<Body />} />
          <Route path="waxing" element={<Waxing />} />
          <Route path="makeup" element={<MakeUp />} />
          <Route path="eyelash" element={<EyeLash />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
