/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modulse
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/**
 * Components
 * */
import App from "./App.jsx";
/**
 * CSS Link
 */
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
