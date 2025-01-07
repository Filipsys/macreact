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
  wallpaper: number;
  setWallpaper: (wallpaperNumber: number) => void;
}

export const mainContext = createContext<MainContext>({
  activeApps: [],
  setActiveApps: () => {},
  hiddenApps: [],
  setHiddenApps: () => {},
  wallpaper: 0,
  setWallpaper: () => {},
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
);
