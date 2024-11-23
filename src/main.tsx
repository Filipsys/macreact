import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainProvider } from "./mainProvider.tsx";
import App from "./App.tsx";
import "./index.css";

interface MainContext {
  activeApps: string[];
  setActiveApps: (apps: string[]) => void;
  hiddenApps: string[];
  setHiddenApps: (apps: string[]) => void;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const mainContext = createContext<MainContext>();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
);
