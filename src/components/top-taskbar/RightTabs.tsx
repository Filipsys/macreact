import { WifiIcon, SearchIcon, AccountIcon, MenuIcon } from "@/assets/navIcons";
import { CurrentTime } from "./CurrentTime";

import type { JSX } from "react";

export const RightTabs = () => (
  <div className="flex flex-row">
    <div className="flex h-5 w-fit flex-row items-center justify-center gap-1.5 *:rounded-xs *:px-2">
      {(
        [
          [WifiIcon, 1],
          [SearchIcon, 2],
          [AccountIcon, 3],
          [MenuIcon, 4],
        ] as [() => JSX.Element, number][]
      ).map(([Icon, iconIndex]) => (
        <div className="active:bg-white[.2]" key={`button-icon-${iconIndex}`}>
          <Icon />
        </div>
      ))}
    </div>

    <div className="px-4 text-center text-[13px] [text-shadow:0px_0px_5px_rgb(0_0_0/30%)]">
      <CurrentTime />
    </div>
  </div>
);
