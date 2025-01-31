import { useEffect, useState } from "react";
import { db } from "@/db";

export const DEBUG_MODE = true;

export const debug = (message: string, isError?: boolean) => {
  if (!DEBUG_MODE) return;
  isError ||= false;

  if (isError) {
    console.log(`%c[ ERROR ]`, "color: white; background:red; padding: 1px 3px", `\n${message}`);
  } else {
    console.log(`%c[ DEBUG ]`, "color: white; background:green; padding: 1px 3px", `\n${message}`);
  }
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

export const storeInStore = async (props: { key: string; value: object }) => {
  const requestID = await db.values.add({
    key: props.key,
    value: props.value,
  });

  return { response: 201, text: `Successfully stored request of ID ${requestID}` };
};

export const getFromStore = async () => {
  return db.values.toArray();
};

export const clearStore = async () => {
  return db.values.clear();
};

export const checkForValueInStore = async (key: string) => {
  const query = await db.values.where("key").equals(key).toArray();

  return query.length > 0 ? true : false;
};
