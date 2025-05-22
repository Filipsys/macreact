import { ContextCategory, ContextContainer, ContextItem, Divider } from "@components/ContextMenu";
import { appsTabsDict, appTabDropdownValues } from "@/constants";
import { mainContext } from "@/main";
import { useContext, useState } from "react";

import type { JSX, KeyboardEvent, MouseEvent } from "react";
import { LeftTabs } from "./LeftTabs";
import { RightTabs } from "./RightTabs";

export const TopTaskbar = () => {
  const [contextMenuState, setContextMenuState] = useState({ visible: false, width: 0, height: 0, x: 0, y: 0 });
  const [activeTaskbarTab, setActiveTaskbarTab] = useState<number>(1);
  const [tabIsActive, setTabIsActive] = useState(false);

  const { lastUsedApps } = useContext(mainContext);
  const lastFromLastUsedApps = lastUsedApps.length - 1;

  const handleActiveTabClick = (event: MouseEvent | KeyboardEvent) => {
    const textDiv = event.currentTarget.parentElement?.getBoundingClientRect();
    if (!textDiv) return;

    setActiveTaskbarTab(0);
    setContextMenuState({
      ...contextMenuState,
      visible: true,
      x: textDiv.left,
      y: textDiv.top + 2 + textDiv.height, // + 2 is accounting for the small gap between the context menu and the taskbar
    });
  };

  function TaskbarTab(props: { tabName: string; index: number } | { tabIcon: JSX.Element; index: number }) {
    const handleAppTabHover = (event: MouseEvent, index: number) => {
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
    };

    const handleTabClick = (event: MouseEvent | KeyboardEvent, index: number) => {
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
    };

    return (
      <div
        className={`${tabIsActive && activeTaskbarTab === props.index + 1 ? "before:bg-white/20" : ""} relative flex h-full items-center rounded-[4px] before:absolute before:-z-10 before:block before:h-full before:w-[calc(100%+10px)] before:-translate-x-[5px] before:rounded-[4px]`}
      >
        <div
          className="px-2.5"
          onMouseOver={(event) => handleAppTabHover(event, props.index)}
          onClick={(event) => handleTabClick(event, props.index)}
          onKeyUp={(event) => handleTabClick(event, props.index)}
          onFocus={() => null}
        >
          {"tabName" in props ? props.tabName : props.tabIcon}
        </div>
      </div>
    );
  }

  // useEffect(() => {
  //   if (isUnfocused)
  //     setContextMenuState({
  //       ...contextMenuState,
  //       visible: false,
  //     });
  // }, [contextMenuState, isUnfocused]);

  return (
    <nav
      onContextMenu={(e) => e.preventDefault()}
      className="z-10 flex h-[24px] w-full flex-row items-center justify-between bg-linear-to-r from-[#363b87] via-[#3952a7] to-[#3058b6] font-medium shadow-xs [text-shadow:0px_0px_5px_rgb(0_0_0/30%)]"
    >
      <LeftTabs
        activeAppName={lastUsedApps[lastFromLastUsedApps]}
        appTabs={appsTabsDict[lastUsedApps[lastFromLastUsedApps]]}
      />

      <RightTabs />

      {contextMenuState.visible ? (
        <ContextContainer
          width={contextMenuState.x}
          height={contextMenuState.y}
          setContextMenuState={() => setContextMenuState}
        >
          {Object.values(Object.values(appTabDropdownValues)[0])[activeTaskbarTab].map((values, index) => (
            <ContextCategory key={`context-${values[0]}-${index}`}>
              {values.map((value) => (
                <ContextItem name={value} key={`context-${values[0]}-${index}-item-${value}`} disabled />
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
