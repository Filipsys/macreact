import { BinIcon, DockSeperatorIcon, NotificationIcon } from "../assets/navIcons.tsx";
import { useState } from "react";
import finder from "../assets/icons/finder.webp";
import apps from "../assets/icons/apps.webp";
import safari from "../assets/icons/safari.webp";
import mail from "../assets/icons/mail.webp";
import maps from "../assets/icons/maps.webp";
import messages from "../assets/icons/messages.webp";
import settings from "../assets/icons/settings.webp";

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
  const [activeApps, setActiveApps] = useState<string[]>([]);
  const [hiddenApps, setHiddenApps] = useState<string[]>([]);
  const [appsWithNotifications] = useState<[string, number][]>([["Messages", 3]] as [
    string,
    number,
  ][]);

  const handleAppChange = (app: string) => {
    if (activeApps.includes(app)) return;

    if (hiddenApps.includes(app))
      return setHiddenApps(hiddenApps.filter(a => a !== app)); setActiveApps([...activeApps, app]);

    setActiveApps([...activeApps, app]);
  };

  return (
    <div className="absolute bottom-0 left-0 flex h-fit w-screen items-center justify-center pb-1">
      <div
        className="h-[65px] w-fit rounded-2xl border-[1px] border-white/10 backdrop-blur-2xl backdrop-brightness-[.8]">
        <ul className="flex flex-row justify-between gap-[2px] px-1 pt-1">
          {/* <li>
              <div className="h-[60px] pl-1">
                <img src={finder} alt="finder" className="w-[50px]" />
                <div className="h[10px] flex w-full items-center justify-center">
                  <div className="h-[4px] w-[4px] rounded-full bg-gray-400 opacity-75" />
                </div>
              </div>
            </li> */}

          {taskbarApps.map(([name, icon]) => (
            <li key={`taskbar-app-${name}`}>
              <div
                className="relative h-[60px]"
                onClick={() => {
                  handleAppChange(name);
                }}
              >
                <div
                  className={`${!activeApps.includes(name) && !hiddenApps.includes(name) ? null : "animate-jumpup"}`}
                >
                  <div className="absolute right-0 top-0 z-20 size-[18px]">
                    {appsWithNotifications.some(([appName]) => appName === name) && (
                      <NotificationIcon
                        amount={appsWithNotifications.find(([appName]) => appName === name)?.[1] ?? 0}
                      />
                    )}
                  </div>

                  {/* Popover */}
                  <div className="group/iconElement">
                    <div
                      className="absolute flex w-full -translate-y-10 flex-col items-center opacity-0 transition-opacity group-hover/iconElement:opacity-100">
                      <div
                        className="z-10 h-fit w-fit rounded-md bg-[#343132] px-3 py-1 [box-shadow:_0px_0px_0px_1px_#505050,0px_0px_0px_2px_#000000]">
                        <p className="text-xs">{name}</p>
                      </div>
                      <div
                        className="h-5 w-5 -translate-y-1 bg-[#343132]"
                        style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0)" }}
                      />
                    </div>

                    <img src={icon} alt={name} className="w-[50px] active:brightness-75" />
                  </div>
                </div>

                <div
                  className="h[10px] flex w-full items-center justify-center"
                  style={{
                    display: activeApps.includes(name) || hiddenApps.includes(name) ? "flex" : "none",
                  }}
                >
                  <div className="h-[4px] w-[4px] rounded-full bg-gray-400 opacity-75" />
                </div>
              </div>
            </li>
          ))}

          <li>
            <div className="flex h-full items-center justify-center px-[6px] *:mb-2 *:opacity-40">
              <DockSeperatorIcon />
            </div>
          </li>

          <li>
            <div className="h-[60px] pr-1 *:h-[50px]">
              <BinIcon />
            </div>
          </li>
        </ul>
      </div>
    </div>

  )
}