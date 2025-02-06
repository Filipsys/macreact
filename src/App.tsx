import "./index.css";

import { useCallback, useContext, useEffect, useRef } from "react";
import { mainContext } from "@/main";
import { TopTaskbar } from "@components/TopTaskbar";
import { BottomTaskbar } from "@components/bottom-taskbar/BottomTaskbar";
import { Wallpaper } from "@components/wallpaper/Wallpaper";
import { LoadingScreen } from "@components/LoadingScreen";
import { Safari } from "@components/safari/Safari";
import { DEBUG_MODE, debug, getFromStore, getValueFromStore, storeInStore } from "@/utils";
import { globalVariableDefaults } from "./constants";

function App() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const storeInitialized = useRef<boolean>(false);
  const { setWindowSize, setDbLoaded } = useContext(mainContext);

  const initializeGlobals = useCallback(async () => {
    // getValueFromStore("wallpaperIndex").then((response) => console.log(response));

    for (const key of Object.keys(globalVariableDefaults)) {
      await getValueFromStore(key).then(async (response) => {
        if (response !== undefined) return;

        await storeInStore({ key: key, value: globalVariableDefaults[key as keyof typeof globalVariableDefaults] });
      });
    }

    setDbLoaded(true);
    debug(JSON.stringify(await getFromStore()));
  }, [setDbLoaded]);

  useEffect(() => {
    // storeInStore({
    //   key: "key1",
    //   value: ["value1"],
    // }).then((response) => debug(response.text));
    // getFromStore().then((response) => debug(JSON.stringify(response)));

    // checkForValueInStore("key1").then(() => debug("Value found in store"));
    // checkForValueInStore("key2").then((response) =>
    //   response ? debug(`Found in store. Response: ${response.toString()}`) : debug("Value not found in store", true),
    // );

    (async () => {
      if (!storeInitialized.current) {
        storeInitialized.current = true;

        // resetStore().then(async () => {
        await initializeGlobals();
        // });
      }
    })();
  }, [initializeGlobals]);

  const handleWindowResize = () => {
    const bodyDiv = bodyRef.current;
    if (!bodyDiv) throw new Error("How?");

    const { width, height } = bodyDiv.getBoundingClientRect();
    setWindowSize([width, height]);
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (["iphone", "ipad", "android", "tablet", "mobile"].some((deviceType) => userAgent.includes(deviceType))) {
      const bodyDiv = bodyRef.current;
      if (!bodyDiv) throw new Error("Cannot find body");

      bodyDiv.innerHTML = `
      <div class="w-full h-full bg-black flex justify-center items-center px-8">
        <p class="text-4xl text-center">Sorry, this device isn't supported.</p>
      </div>
      `;
    }
  }, []);

  return (
    <div
      ref={bodyRef}
      className="flex h-dvh w-full select-none flex-col font-SFPro tracking-wide text-white"
      onLoad={() => handleWindowResize()}
      onResize={() => handleWindowResize()}
    >
      {!DEBUG_MODE ? <LoadingScreen /> : null}

      <TopTaskbar />

      <Safari />

      <Wallpaper />

      <BottomTaskbar />
    </div>
  );
}

export default App;
