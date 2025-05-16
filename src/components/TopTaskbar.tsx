import { AccountIcon, AppleIcon, MenuIcon, SearchIcon, WifiIcon } from "@/assets/navIcons";
import { ContextCategory, ContextContainer, ContextItem, Divider } from "@components/ContextMenu";
import { mainContext } from "@/main";
import { CurrentTime } from "@components/CurrentTime";
import { appsTabsDict, appTabDropdownValues } from "@/constants";
import { useContext, useState } from "react";

export const TopTaskbar = () => {
  const [contextMenuState, setContextMenuState] = useState({ visible: false, width: 0, height: 0, x: 0, y: 0 });
  const [activeTaskbarTab, setActiveTaskbarTab] = useState<number>(1);
  const [tabIsActive, setTabIsActive] = useState(false);
  const { lastUsedApps /* , isUnfocused, setIsUnfocused */ } = useContext(mainContext);
  const lastFromLastUsedApps = lastUsedApps.length - 1;

  // useEffect(() => {
  //   if (isUnfocused)
  //     setContextMenuState({
  //       ...contextMenuState,
  //       visible: false,
  //     });
  // }, [contextMenuState, isUnfocused]);

  const LeftTools = (props: { activeAppName: string; appTabs: string[] }) => {
    return (
      <div className="flex h-full cursor-default flex-row items-center text-[13px] font-light *:rounded-[4px]">
        <div
          className="pr-2.5 font-extrabold active:bg-white/[.2]"
          onClick={(event) => {
            const textDiv = event.currentTarget.parentElement?.getBoundingClientRect();
            if (!textDiv) return;

            setActiveTaskbarTab(0);
            setContextMenuState({
              ...contextMenuState,
              visible: true,
              x: textDiv.left,
              y: textDiv.top + 2 + textDiv.height, // + 2 is accounting for the small gap between the context menu and the taskbar
            });
          }}
        >
          {props.activeAppName}
        </div>

        {props.appTabs.map((tab, index) => (
          <div
            key={`topnav-tab-${tab}`}
            className={`${tabIsActive && activeTaskbarTab === index + 1 ? "before:bg-white/20" : ""} relative flex h-full items-center before:absolute before:-z-10 before:block before:h-full before:-translate-x-[5px] before:rounded-[4px] before:w-[calc(100%+10px)]`}
          >
            <div
              className="px-2.5"
              onMouseOver={(event) => {
                if (tabIsActive && activeTaskbarTab !== index + 1) {
                  const textDiv = event.currentTarget.parentElement?.getBoundingClientRect();
                  if (!textDiv) return;

                  setActiveTaskbarTab(index + 1);
                  setContextMenuState({
                    ...contextMenuState,
                    visible: true,
                    x: textDiv.left,
                    y: textDiv.top + 2 + textDiv.height,
                  });
                }
              }}
              onClick={(event) => {
                if (tabIsActive) {
                  setTabIsActive(false);
                  setContextMenuState({
                    ...contextMenuState,
                    visible: false,
                  });

                  return;
                }

                setTabIsActive(true);
                const textDiv = event.currentTarget.parentElement?.getBoundingClientRect();
                if (!textDiv) return;

                setActiveTaskbarTab(index + 1);
                setContextMenuState({
                  ...contextMenuState,
                  visible: true,
                  x: textDiv.left,
                  y: textDiv.top + 2 + textDiv.height,
                });
              }}
            >
              {tab}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <nav
      onContextMenu={(e) => e.preventDefault()}
      className="z-10 flex h-[24px] w-full flex-row items-center justify-between bg-linear-to-r from-[#363b87] via-[#3952a7] to-[#3058b6] font-medium shadow-xs [text-shadow:0px_0px_5px_rgb(0_0_0/30%)]"
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
        <ul className="flex h-5 w-fit flex-row items-center justify-center gap-1.5 *:rounded-xs *:px-2">
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

        <div className="px-4 text-center text-[13px] [text-shadow:0px_0px_5px_rgb(0_0_0/30%)]">
          <CurrentTime />
        </div>
      </div>

      {contextMenuState.visible ? (
        <ContextContainer
          width={contextMenuState.x}
          height={contextMenuState.y}
          setContextMenuState={() => setContextMenuState}
        >
          {Object.values(Object.values(appTabDropdownValues)[0])[activeTaskbarTab].map((values, index) => (
            <ContextCategory>
              {values.map((value) => (
                <ContextItem name={value} disabled />
              ))}
              {index !== Object.values(Object.values(appTabDropdownValues)[0])[activeTaskbarTab].length - 1 ? (
                <Divider />
              ) : null}
            </ContextCategory>
          ))}
        </ContextContainer>
      ) : null}
    </nav>
  );
};
