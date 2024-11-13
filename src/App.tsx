import "./index.css";

import { TopTaskbar } from "./components/TopTaskbar.tsx";
import { BottomTaskbar } from "./components/BottomTaskbar.tsx";
import { Notification } from "./components/Notification.tsx";
import { Wallpaper } from "./components/Wallpaper.tsx";
import { ContextMenu } from "./components/ContextMenu.tsx";

function App() {
  return (
    <div className="select-none text-white w-dvw h-dvh">
      <TopTaskbar />

      <Notification />

      <ContextMenu>
        <Wallpaper />
      </ContextMenu>

      <BottomTaskbar />
    </div>
  );
}

export default App;
