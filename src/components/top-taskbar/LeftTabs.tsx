import { AppleIcon } from "@/assets/navIcons";
import type { MouseEvent, KeyboardEvent } from "react";

export const LeftTabs = (props: {
  activeAppName: string;
  appTabs: string[];
  handleActiveTabClick: (event: MouseEvent | KeyboardEvent) => void;
}) => (
  <div className="flex h-full flex-row items-center text-[13px] font-light">
    <TaskbarTab tabIcon={<AppleIcon />} index={-1} />

    <div
      className="font-extrabold"
      onClick={(event) => props.handleActiveTabClick(event)}
      onKeyUp={(event) => props.handleActiveTabClick(event)}
    >
      <TaskbarTab tabName={props.activeAppName} index={0} />
    </div>

    {props.appTabs.map((tab, index) => (
      <TaskbarTab tabName={tab} index={index + 1} key={`topnav-tab-${tab}`} />
    ))}
  </div>
);
