import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainProvider } from "./mainProvider.tsx";
import App from "./App.tsx";
import "./index.css";

export const mainContext = createContext({ wallpaper: 0 });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
);
