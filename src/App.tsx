import "./index.css";

import { TopTaskbar } from "@components/TopTaskbar";
import { BottomTaskbar } from "@components/bottom-taskbar/BottomTaskbar";
import { Wallpaper } from "@components/Wallpaper";
import { ContextMenu } from "@components/ContextMenu";
import { LoadingScreen } from "@components/LoadingScreen";
import { Safari } from "@components/safari/Safari";
import { DEBUG_MODE } from "@/utils";

function App() {
  return (
    <div className="flex h-dvh w-full select-none flex-col tracking-wide text-white">
      {!DEBUG_MODE ? <LoadingScreen /> : null}

      <TopTaskbar />

      <Safari />

      <ContextMenu>
        <Wallpaper />
      </ContextMenu>

      <BottomTaskbar />
    </div>
  );
}

export default App;
