import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import EmailContextProvider from "./context/EmailContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmailContextProvider>
      <App />
    </EmailContextProvider>
  </StrictMode>
);
