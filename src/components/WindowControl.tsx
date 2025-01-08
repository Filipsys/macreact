import { useContext } from "react";
import { mainContext } from "@/main";
import { CloseIcon, MinimizeIcon, ExpandIcon } from "@/assets/windowControlIcons";

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
    <div className="group flex gap-[6px] *:z-10 *:*:hidden *:*:size-full *:size-[12px] *:*:items-center *:*:justify-center *:rounded-full *:*:opacity-50">
      <div className="bg-red-600" onClick={() => closeApp("Safari")}>
        <div className="*:size-[7px] group-hover:flex">
          <CloseIcon />
        </div>
      </div>
      <div className="bg-yellow-600" onClick={() => hideApp("Safari")}>
        <div className="*:w-[8px] group-hover:flex">
          <MinimizeIcon />
        </div>
      </div>
      <div className="bg-green-500">
        <div className="*:size-[6px] group-hover:flex">
          <ExpandIcon />
        </div>
      </div>
    </div>
  );
};
