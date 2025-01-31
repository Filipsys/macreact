import "./index.css";

import { useContext, useEffect, useRef } from "react";
import { mainContext } from "@/main";
import { TopTaskbar } from "@components/TopTaskbar";
import { BottomTaskbar } from "@components/bottom-taskbar/BottomTaskbar";
import { Wallpaper } from "@components/wallpaper/Wallpaper";
import { LoadingScreen } from "@components/LoadingScreen";
import { Safari } from "@components/safari/Safari";
import { DEBUG_MODE, debug, storeInStore, getFromStore, clearStore, checkForValueInStore } from "@/utils";

const initializeGlobals = async () => {
  if (!(await checkForValueInStore("wallpaper"))) {
    await storeInStore({ key: "wallpaper", value: ["url_to_wallpaper"] });

    debug("Stored wallpaper value in database");
  } else {
    debug("Value already in database");
  }

  debug(JSON.stringify(await getFromStore()));
};

function App() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { setWindowSize } = useContext(mainContext);

  useEffect(() => {
    clearStore()
      .then(() => debug("Store cleared"))
      .catch((reason) => debug(`Error: ${reason}`, true));
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
      await initializeGlobals();
    })();
  }, []);

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
