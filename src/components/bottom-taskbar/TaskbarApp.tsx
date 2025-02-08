import { NotificationIcon } from "@/assets/navIcons";
import { NavbarPopoverAndIcon } from "@components/bottom-taskbar/NavbarPopoverAndIcon";
import { OpenIndicator } from "./OpenIndicator";
import { useState } from "react";

export const TaskbarApp = (props: {
  name: string;
  icon: string;
  activeApps: string[];
  hiddenApps: string[];
  appsWithNotifications: [string, number][];
  handleAppChange: (name: string) => void;
}) => {
  const [appIsClicked, setAppIsClicked] = useState<boolean>(false);

  return (
    <div className="relative h-[60px]" onClick={() => props.handleAppChange(props.name)}>
      <div
        onClick={() => setAppIsClicked(true)}
        className={`${appIsClicked === false && props.activeApps.includes(props.name) === false && props.hiddenApps.includes(props.name) === false ? "animate-jumpup" : null}`}
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

      <OpenIndicator
        isActive={props.activeApps.includes(props.name)}
        isHidden={props.hiddenApps.includes(props.name)}
      />
    </div>
  );
};
