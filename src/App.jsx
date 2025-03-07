import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [states, useStates] = useState();

  return (
    <div>
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
