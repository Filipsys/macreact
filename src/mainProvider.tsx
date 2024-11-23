import { useState } from "react";
import { mainContext } from "./main.tsx";
import React from "react";

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [values, setValues] = useState<{ wallpaper: number }>({ wallpaper: 0 });
  const [activeApps, setActiveApps] = useState<string[]>([]);
  const [hiddenApps, setHiddenApps] = useState<string[]>([]);

  return <mainContext.Provider
    value={{
      values, setValues,
      activeApps, setActiveApps,
      hiddenApps, setHiddenApps
    }}
  >
    {children}
  </mainContext.Provider>;
};