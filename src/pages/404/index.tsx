import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NotFound from "./404.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotFound />
  </StrictMode>
);
