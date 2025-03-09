import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import styles from "./App.module.css";

function App() {
  const [states, useStates] = useState();

  return (
    <div className={styles.app}>
      {/* hello */}
      <Home />
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
