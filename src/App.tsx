import "./index.css";

import { TopTaskbar } from "./components/TopTaskbar.tsx";
import { BottomTaskbar } from "./components/BottomTaskbar.tsx";
import { Wallpaper } from "./components/Wallpaper.tsx";
import { ContextMenu } from "./components/ContextMenu.tsx";
import { LoadingScreen } from "./components/LoadingScreen.tsx";
import { Safari } from "./components/Safari.tsx";

function App() {
  return (
    <div className="h-dvh w-dvw select-none text-white tracking-wide">
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
