import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import styles from "./App.module.css";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className={styles.app}>
      {/* hello */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path="HomePage" element={<HomePage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path="button" element={<Button />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
