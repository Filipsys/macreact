import "./index.css";

import { TopTaskbar } from "./components/TopTaskbar.tsx";
import { BottomTaskbar } from "./components/BottomTaskbar.tsx";
import { Wallpaper } from "./components/Wallpaper.tsx";
import { ContextMenu } from "./components/ContextMenu.tsx";
import { LoadingScreen } from "./components/LoadingScreen.tsx";
import { Safari } from "./components/safari/Safari.tsx";

function App() {
  return (
    <div className="h-dvh w-full select-none tracking-wide text-white">
      <LoadingScreen />

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
