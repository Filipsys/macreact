import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainProvider } from "@/mainProvider";
import App from "@/App";
import "@/index.css";

interface MainContext {
  activeApps: string[];
  setActiveApps: (apps: string[]) => void;
  hiddenApps: string[];
  setHiddenApps: (apps: string[]) => void;
  wallpaper: number;
  setWallpaper: (wallpaperNumber: number) => void;
  windowSize: [number, number];
  setWindowSize: ([width, height]: [number, number]) => void;
  widgetGridSpaces: [JSX.Element, [number, number]][];
  setWidgetGridSpaces: (widgetGridSpaces: [JSX.Element, [number, number]][]) => void;
  currentActiveApp: [string, string[]];
  setCurrentActiveApp: ([appName, appTabs]: [string, string[]]) => void;
  lastUsedApps: string[];
  setLastUsedApps: (apps: string[]) => void;
}

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
