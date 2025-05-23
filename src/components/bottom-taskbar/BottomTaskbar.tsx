import { DockSeperatorIcon } from "@/assets/navIcons";
import { useContext, useEffect, useState } from "react";
import { mainContext } from "@/main";
import { TaskbarApp } from "@components/bottom-taskbar/TaskbarApp";
import { appsTabsDict, taskbarApps } from "@/constants";
import { editValueInStore, getValueFromStore } from "@/utils";

import darkFullBin from "@/assets/icons/full-bin-dark.png";

export const BottomTaskbar = () => {
  const {
    activeApps,
    setActiveApps,
    hiddenApps,
    setHiddenApps,
    setCurrentActiveApp,
    lastUsedApps,
    setLastUsedApps,
    dbLoaded,
  } = useContext(mainContext);
  const [appsWithNotifications] = useState<[string, number][]>([["Messages", 3]] as [string, number][]);

  useEffect(() => {
    (async () => {
      if (!dbLoaded) return;

      await getValueFromStore("activeApps").then((response) => setActiveApps(response as string[]));
      await getValueFromStore("hiddenApps").then((response) => setHiddenApps(response as string[])); // This should also work
    })();
  }, [dbLoaded, setActiveApps, setHiddenApps]);

  const handleAppChange = (app: string): void => {
    setCurrentActiveApp([app, appsTabsDict[app]]);
    editValueInStore({ key: "currentActiveApp", value: [app, appsTabsDict[app]] });

    if (!lastUsedApps.includes(app)) {
      setLastUsedApps([...lastUsedApps, app]);
      editValueInStore({ key: "lastUsedApps", value: [...lastUsedApps, app] });
    }

    if (activeApps.includes(app)) return;

    if (hiddenApps.includes(app)) {
      setHiddenApps(hiddenApps.filter((a) => a !== app));
      editValueInStore({ key: "hiddenApps", value: hiddenApps.filter((a) => a !== app) });

      setActiveApps([...activeApps, app]);
      editValueInStore({ key: "activeApps", value: [...activeApps, app] });

      return;
    }

    setActiveApps([...activeApps, app]);
    editValueInStore({ key: "activeApps", value: [...activeApps, app] });
  };

  return (
    <div className="absolute bottom-0 left-0 flex h-fit w-screen items-center justify-center pb-1">
      <div className="h-[65px] w-fit rounded-2xl border border-black/20 bg-blend-luminosity backdrop-blur-xl backdrop-brightness-75">
        <div className="flex flex-row items-center justify-between gap-[2px] px-1 pt-1">
          {taskbarApps.map(([name, icon]) => (
            <TaskbarApp
              name={name}
              icon={icon}
              activeApps={activeApps}
              hiddenApps={hiddenApps}
              appsWithNotifications={appsWithNotifications}
              handleAppChange={handleAppChange}
              key={`taskbar-app-${name}`}
            />
          ))}

          <div className="flex h-full items-center justify-center px-[6px] *:mb-2 *:opacity-40">
            <DockSeperatorIcon />
          </div>

          <div className="h-[60px] pr-1 *:h-[50px]">
            <img src={darkFullBin} alt="bin" className="w-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
