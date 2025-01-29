import { useEffect, useState } from "react";
import { db } from "@/db";

export const DEBUG_MODE = true;

export const debug = (message: string) => {
  if (!DEBUG_MODE) return;

  console.log(`%c[ DEBUG ]`, "color: white; background:green; padding: 1px 3px", `\n${message}`);
};

export const changeTo12Hour = (hour: number) => {
  if (hour > 12) return { hour: hour - 12, pm: true };
  return { hour, pm: false };
};

export function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const storeInDatabase = async () => {
  const requestID = await db.values.add({
    key: "first-key",
    value: { somethingCool: "123 apple" },
  });

  return { response: 201, text: `Successfully stored request of ID ${requestID}` };
};

export const getFromDatabase = async () => {
  return db.values.toArray();
};
