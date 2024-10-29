import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Problems from "./problems.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Problems />
  </StrictMode>
);
