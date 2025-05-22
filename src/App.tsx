import "./index.css";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { mainContext } from "@/main";
import { TopTaskbar } from "@components/TopTaskbar";
import { BottomTaskbar } from "@components/bottom-taskbar/BottomTaskbar";
import { Wallpaper } from "@components/wallpaper/Wallpaper";
import { LoadingScreen } from "@components/LoadingScreen";
import { Safari } from "@components/safari/Safari";
import { DEBUG_MODE, debug, getFromStore, getValueFromStore, storeInStore } from "@/utils";
import { globalVariableDefaults } from "./constants";
import { FullscreenPrompt } from "./components/FullscreenPrompt";

function App() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const storeInitialized = useRef<boolean>(false);
  const { setWindowSize, setDbLoaded } = useContext(mainContext);
  const [isFullscreen, setIsFullscreen] = useState<boolean | null>(null);

  const initializeGlobals = useCallback(async () => {
    // getValueFromStore("wallpaperIndex").then((response) => console.log(response));

    for (const key of Object.keys(globalVariableDefaults)) {
      await getValueFromStore(key).then(async (response): Promise<void> => {
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

  const handleWindowResize = (): void => {
    const bodyDiv = bodyRef.current;
    if (!bodyDiv) throw new Error("How?");

    const { width, height } = bodyDiv.getBoundingClientRect();
    setWindowSize([width, height]);
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    // Check for mobile devices
    if (["iphone", "ipad", "android", "tablet", "mobile"].some((deviceType) => userAgent.includes(deviceType))) {
      document.body.innerHTML = `
      <div class="w-full h-dvh bg-black text-white flex justify-center items-center px-8">
        <p class="text-4xl text-center">Sorry, this device isn't supported.</p>
      </div>
      `;
    }

    // Check for Firefox
    if (userAgent.includes("firefox")) {
      document.body.innerHTML = `
      <div class="w-full h-dvh bg-black text-white flex justify-center items-center px-8">
        <p class="text-4xl text-center">Sorry, this browser isn't supported.</p>
      </div>
      `;
    }
  }, []);

  // Added import.meta.env.PROD for easier debugging (I don't have to constantly see the menu)
  return isFullscreen === null && import.meta.env.PROD ? (
    <FullscreenPrompt setIsFullscreen={setIsFullscreen} />
  ) : (
    <div
      ref={bodyRef}
      className="font-SFPro flex h-dvh w-full flex-col tracking-wide text-white select-none"
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
