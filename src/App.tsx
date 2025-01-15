import "./index.css";

import { useContext, useEffect, useRef } from "react";
import { mainContext } from "@/main";
import { TopTaskbar } from "@components/TopTaskbar";
import { BottomTaskbar } from "@components/bottom-taskbar/BottomTaskbar";
import { Wallpaper } from "@components/wallpaper/Wallpaper";
import { LoadingScreen } from "@components/LoadingScreen";
import { Safari } from "@components/safari/Safari";
import { DEBUG_MODE } from "@/utils";

function App() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { setWindowSize } = useContext(mainContext);

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
