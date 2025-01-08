import { DockSeperatorIcon } from "@/assets/navIcons";
import { useContext, useState } from "react";
import { mainContext } from "@/main";
import { TaskbarApp } from "@components/bottom-taskbar/TaskbarApp";

// Icons
import finder from "@/assets/icons/finder.webp";
import apps from "@/assets/icons/apps.webp";
import safari from "@/assets/icons/safari.webp";
import mail from "@/assets/icons/mail.webp";
import maps from "@/assets/icons/maps.webp";
import messages from "@/assets/icons/messages.webp";
import settings from "@/assets/icons/settings.webp";
import darkFullBin from "@/assets/icons/full-bin-dark.png";

const taskbarApps = [
  ["Finder", finder],
  ["Apps", apps],
  ["Safari", safari],
  ["Mail", mail],
  ["Maps", maps],
  ["Messages", messages],
  ["Settings", settings],
];

export const BottomTaskbar = () => {
  const { activeApps, setActiveApps, hiddenApps, setHiddenApps } = useContext(mainContext);
  const [appsWithNotifications] = useState<[string, number][]>([["Messages", 3]] as [string, number][]);

  const handleAppChange = (app: string) => {
    if (activeApps.includes(app)) return;

    if (hiddenApps.includes(app)) {
      setHiddenApps(hiddenApps.filter((a) => a !== app));
      setActiveApps([...activeApps, app]);

      return;
    }

    setActiveApps([...activeApps, app]);
  };

  return (
    <div className="absolute bottom-0 left-0 flex h-fit w-screen items-center justify-center pb-1">
      <div className="h-[65px] w-fit rounded-2xl border border-black/20 backdrop-blur-xl backdrop-brightness-[.70]">
        <ul className="flex flex-row justify-between gap-[2px] px-1 pt-1">
          {taskbarApps.map(([name, icon]) => (
            <li key={`taskbar-app-${name}`}>
              <TaskbarApp
                name={name}
                icon={icon}
                activeApps={activeApps}
                hiddenApps={hiddenApps}
                appsWithNotifications={appsWithNotifications}
                handleAppChange={handleAppChange}
              />
            </li>
          ))}

          <li>
            <div className="flex h-full items-center justify-center px-[6px] *:mb-2 *:opacity-40">
              <DockSeperatorIcon />
            </div>
          </li>

          <li>
            <div className="h-[60px] pr-1 *:h-[50px]">
              <img src={darkFullBin} alt="bin" className="w-[50px]" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
