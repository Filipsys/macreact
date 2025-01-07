import { useContext } from "react";
import { mainContext } from "../main";

export const WindowControl = () => {
  const { activeApps, setActiveApps, hiddenApps, setHiddenApps } = useContext(mainContext);

  const closeApp = (app: string) => {
    setActiveApps(activeApps.filter((a: string) => a !== app));
  };

  const hideApp = (app: string) => {
    setHiddenApps([...hiddenApps, app]);
    setActiveApps(activeApps.filter((a: string) => a !== app));
  };

  return (
    <div className="group flex gap-[6px] *:z-10 *:size-[10px] *:rounded-full">
      <div className="bg-red-600 *:size-3" onClick={() => closeApp("Safari")}>
        <p className="hidden text-sm font-extralight group-hover:block">x</p>
      </div>
      <div className="bg-yellow-600" onClick={() => hideApp("Safari")}>
        <p className="hidden text-sm font-extralight group-hover:block">_</p>
      </div>
      <div className="bg-green-500">
        <p className="hidden text-sm font-extralight group-hover:block">^</p>
      </div>
    </div>
  );
};
