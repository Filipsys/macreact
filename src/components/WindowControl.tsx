import { useContext } from "react";
import { mainContext } from "@/main";
import { editValueInStore } from "@/utils";
import { CloseIcon, MinimizeIcon, ExpandIcon } from "@/assets/windowControlIcons";

export const WindowControl = (props: { windowName: string }) => {
  const { activeApps, setActiveApps, hiddenApps, setHiddenApps, lastUsedApps, setLastUsedApps } =
    useContext(mainContext);

  const closeApp = async (app: string) => {
    setActiveApps(activeApps.filter((a: string) => a !== app));
    setLastUsedApps(lastUsedApps.filter((a: string) => a !== app));

    editValueInStore({ key: "activeApps", value: activeApps.filter((a: string) => a !== app) });
    editValueInStore({ key: "lastUsedApps", value: lastUsedApps.filter((a: string) => a !== app) });
  };

  const hideApp = (app: string) => {
    setHiddenApps([...hiddenApps, app]);
    setActiveApps(activeApps.filter((a: string) => a !== app));

    editValueInStore({ key: "hiddenApps", value: [...hiddenApps, app] });
    editValueInStore({ key: "activeApps", value: activeApps.filter((a: string) => a !== app) });
  };

  return (
    <div className="group z-20 flex gap-[6px] *:z-10 *:*:hidden *:*:size-full *:size-[12px] *:rounded-full *:*:opacity-60">
      <div className="bg-red-600" onClick={() => closeApp(props.windowName)} onKeyUp={() => closeApp(props.windowName)}>
        <div className="size-[7px] items-center justify-center group-hover:flex">
          <CloseIcon />
        </div>
      </div>
      <div
        className="bg-yellow-600"
        onClick={() => hideApp(props.windowName)}
        onKeyUp={() => closeApp(props.windowName)}
      >
        <div className="w-[8px] items-center justify-center group-hover:flex">
          <MinimizeIcon />
        </div>
      </div>
      <div className="bg-green-500">
        <div className="size-[6px] items-center justify-center group-hover:flex">
          <ExpandIcon />
        </div>
      </div>
    </div>
  );
};
