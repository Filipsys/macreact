import { useState } from "react";
import { mainContext } from "./main.tsx";
import React from "react";

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [values, setValues] = useState({ wallpaper: 0 });

  // @ts-expect-error - This is a valid return type
  return <mainContext.Provider value={{ values, setValues }}>{children}</mainContext.Provider>;
};