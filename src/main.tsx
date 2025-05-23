import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainProvider } from "@/mainProvider";
import { scan } from "react-scan";
import App from "@/App";

import type { MainContext } from "@/constants";

// Check for prod version to disable react-scan
if (typeof window !== "undefined" && !import.meta.env.PROD) scan();

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
  contextMenuIsOpen: false,
  setContextMenuIsOpen: () => {},
  dbLoaded: false,
  setDbLoaded: () => {},
  isUnfocused: false,
  setIsUnfocused: () => {},
});

const doc = document.getElementById("root");
if (!doc) throw new Error("Root element not found");

createRoot(doc).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
);
