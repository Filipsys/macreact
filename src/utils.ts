import { useEffect, useState } from "react";
import { db } from "@/db";
import { globalVariableDefaults, globalVariablesList } from "./constants";

export const DEBUG_MODE = import.meta.env.DEV;

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

export const storeInStore = async (props: {
  key: string;
  value: string | string[] | number | number[] | boolean | object;
}) => {
  const requestID = await db.values.add({ key: props.key, value: props.value });

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

export const getValueFromStore = async (key: string) => {
  const query = await db.values.where("key").equals(key).first();

  return query?.value;
};

export const validateAllStoreValues = () => {
  const query = db.values.toArray();

  query.then((response) => {
    response.forEach((element) => {
      if (!Object.keys(globalVariableDefaults).includes(element.key)) {
        return Error("Cannot find key in global keys");
      }
      if (globalVariablesList.includes(element.key)) return;

      // TODO: What the hell is this? keyof typeof blah blah what even is that?!
      storeInStore({
        key: element.key,
        value: globalVariableDefaults[element.key as keyof typeof globalVariableDefaults],
      });
    });
  });
};

export const resetStore = async () => {
  clearStore()
    .then(() => debug("Store cleared"))
    .catch((reason: string) => debug(`Error: ${reason}`, true));

  for (const [key, value] of Object.entries(globalVariableDefaults)) {
    await storeInStore({ key: key, value: value });
  }
};

export const editValueInStore = async (props: {
  key: string;
  value: string | string[] | number | number[] | boolean | object;
}) => {
  const record = await db.values.where("key").equals(props.key).first();
  if (!record) return Error("Cannot find key in store");

  await db.values.update(record.id, { value: props.value });
};
