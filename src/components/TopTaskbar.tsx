import { AccountIcon, AppleIcon, MenuIcon, SearchIcon, WifiIcon } from "@/assets/navIcons";
import { mainContext } from "@/main";
import { CurrentTime } from "@components/CurrentTime";
import { appsTabsDict } from "@/constants";
import { useContext } from "react";

const LeftTools = (props: { activeAppName: string; appTabs: string[] }) => (
  <ul className="flex h-fit cursor-default flex-row items-center gap-[22px] py-1 text-[13px] font-light *:rounded-[4px] *:py-1 *:align-middle">
    <li className="font-extrabold active:bg-white/[.2]">{props.activeAppName}</li>

    {props.appTabs.map((tab) => (
      <li key={`topnav-tab-${tab}`} className="active:bg-white/[.2]">
        {tab}
      </li>
    ))}
  </ul>
);

export const TopTaskbar = () => {
  const { lastUsedApps } = useContext(mainContext);
  const lastFromLastUsedApps = lastUsedApps.length - 1;

  return (
    <nav
      onContextMenu={(e) => e.preventDefault()}
      className="z-10 flex h-7 w-full flex-row items-center justify-between bg-gradient-to-r from-[#363b87] via-[#3952a7] to-[#3058b6] font-[500] shadow-sm [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]"
    >
      <div className="flex h-full flex-row items-center">
        <div className="px-5">
          <AppleIcon />
        </div>

        <LeftTools
          activeAppName={lastUsedApps[lastFromLastUsedApps]}
          appTabs={appsTabsDict[lastUsedApps[lastFromLastUsedApps]]}
        />
      </div>

      <div className="flex flex-row">
        <ul className="flex h-5 w-fit flex-row items-center justify-center gap-1.5 *:rounded-sm *:p-1 *:px-2">
          <li className="active:bg-white/[.2]">
            <WifiIcon />
          </li>
          <li className="active:bg-white/[.2]">
            <SearchIcon />
          </li>
          <li className="active:bg-white/[.2]">
            <AccountIcon />
          </li>
          <li className="active:bg-white/[.2]">
            <MenuIcon />
          </li>
        </ul>

        <div className="px-4 text-center text-[13px] [text-shadow:_0px_0px_5px_rgb(0_0_0_/_30%)]">
          <CurrentTime />
        </div>
      </div>
    </nav>
  );
};
