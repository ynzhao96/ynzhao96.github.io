import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Resume from "./resume.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Resume />
  </StrictMode>
);
