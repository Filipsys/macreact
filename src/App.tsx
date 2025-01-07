import "./index.css";

import { TopTaskbar } from "./components/TopTaskbar.tsx";
import { BottomTaskbar } from "./components/BottomTaskbar.tsx";
import { Wallpaper } from "./components/Wallpaper.tsx";
import { ContextMenu } from "./components/ContextMenu.tsx";
import { LoadingScreen } from "./components/LoadingScreen.tsx";
import { Safari } from "./components/safari/Safari.tsx";
import { DEBUG_MODE } from "./utils.ts";

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
