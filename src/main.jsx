import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Logo from "./Logo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <Logo />
  </StrictMode>
);
