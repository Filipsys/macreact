import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainProvider } from "@/mainProvider";
import { MainContext } from "@/constants";
import App from "@/App";
import "@/index.css";

export const mainContext = createContext<MainContext>({
  activeApps: [],
  setActiveApps: () => {},
  hiddenApps: [],
  setHiddenApps: () => {},
  wallpaper: 0,
  setWallpaper: () => {},
  windowSize: [0, 0],
  setWindowSize: () => {},
  widgetGridSpaces: [],
  setWidgetGridSpaces: () => {},
  currentActiveApp: ["", []],
  setCurrentActiveApp: () => {},
  lastUsedApps: ["Finder"],
  setLastUsedApps: () => {},
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
);
