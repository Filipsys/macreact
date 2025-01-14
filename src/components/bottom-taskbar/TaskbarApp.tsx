import { NotificationIcon } from "@/assets/navIcons";
import { mainContext } from "@/main";
import { NavbarPopoverAndIcon } from "@components/bottom-taskbar/NavbarPopoverAndIcon";
import { useContext } from "react";

export const TaskbarApp = (props: {
  name: string;
  icon: string;
  activeApps: string[];
  hiddenApps: string[];
  appsWithNotifications: [string, number][];
  handleAppChange: (name: string) => void;
}) => {
  const { setCurrentActiveApp } = useContext(mainContext);

  return (
    <div
      className="relative h-[60px]"
      onClick={() => {
        props.handleAppChange(props.name);

        if (props.name == "Safari" && !props.activeApps.includes(props.name)) {
          setCurrentActiveApp([
            "Safari",
            ["File", "Edit", "View", "History", "Bookmarks", "Develop", "Window", "Help"],
          ]);
        }
      }}
    >
      <div
        className={`${!props.activeApps.includes(props.name) && !props.hiddenApps.includes(props.name) ? null : "animate-jumpup"}`}
      >
        <div className="absolute right-0 top-0 z-20 size-[18px]">
          {props.appsWithNotifications.some(([appName]) => appName === props.name) && (
            <NotificationIcon
              amount={props.appsWithNotifications.find(([appName]) => appName === props.name)?.[1] ?? 0}
            />
          )}
        </div>

        <NavbarPopoverAndIcon name={props.name} icon={props.icon} />
      </div>

      <div
        className="h[10px] flex w-full items-center justify-center"
        style={{
          display: props.activeApps.includes(props.name) || props.hiddenApps.includes(props.name) ? "flex" : "none",
        }}
      >
        <div className="h-[4px] w-[4px] rounded-full bg-gray-400 opacity-75" />
      </div>
    </div>
  );
};
