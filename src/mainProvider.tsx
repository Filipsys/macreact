import { useState } from "react";
import { mainContext } from "@/main";
import React from "react";

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeApps, setActiveApps] = useState<string[]>([]);
  const [hiddenApps, setHiddenApps] = useState<string[]>([]);
  const [wallpaper, setWallpaper] = useState<number>(0);
  const [windowSize, setWindowSize] = useState<[number, number]>([0, 0]);
  const [widgetGridSpaces, setWidgetGridSpaces] = useState<[JSX.Element, [number, number]][]>([]);
  const [currentActiveApp, setCurrentActiveApp] = useState<[string, string[]]>([
    "Finder",
    ["File", "Edit", "View", "Go", "Window", "Help"],
  ]);

  return (
    <mainContext.Provider
      value={{
        activeApps,
        setActiveApps,
        hiddenApps,
        setHiddenApps,
        wallpaper,
        setWallpaper,
        windowSize,
        setWindowSize,
        widgetGridSpaces,
        setWidgetGridSpaces,
        currentActiveApp,
        setCurrentActiveApp,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
