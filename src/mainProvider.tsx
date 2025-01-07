import { useState } from "react";
import { mainContext } from "./main.tsx";
import React from "react";

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeApps, setActiveApps] = useState<string[]>([]);
  const [hiddenApps, setHiddenApps] = useState<string[]>([]);
  const [wallpaper, setWallpaper] = useState<number>(0);

  return (
    <mainContext.Provider
      value={{
        activeApps,
        setActiveApps,
        hiddenApps,
        setHiddenApps,
        wallpaper,
        setWallpaper,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
