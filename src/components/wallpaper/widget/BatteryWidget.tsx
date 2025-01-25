import { ContextCategory, ContextContainer, ContextItem, Divider } from "@components/ContextMenu";
import { useContext, useEffect, useState } from "react";
import { useWindowDimensions } from "@/utils";
import { mainContext } from "@/main";
import { LaptopIcon } from "@/assets/largeIcons";

export const BatteryWidget = (props: { sizeREM?: number }) => {
  const { contextMenuIsOpen, setContextMenuIsOpen } = useContext(mainContext);
  const [contextMenuState, setContextMenuState] = useState({ visible: false, width: 0, height: 0, x: 0, y: 0 });
  const [batteryPercentage, setBatteryPercentage] = useState(100);
  const { windowWidth, windowHeight } = useWindowDimensions();

  const widgetSize = !props.sizeREM ? 11 : props.sizeREM;

  /*
    Battery status API only works for HTTPS endpoints,
    I can't check the code on localhost, as it is http.
    For future self: Check if this code works. Read more
    here -> https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
  */
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigator.getBattery().then((battery) => setBatteryPercentage(+battery.level));
    } catch {
      setBatteryPercentage(100);
    }
  }, []);

  return (
    <>
      {contextMenuState.visible ? (
        <ContextContainer
          width={contextMenuState.x}
          height={contextMenuState.y}
          setContextMenuState={() => setContextMenuState}
        >
          <ContextCategory>
            <ContextItem name="Remove Widget" />
          </ContextCategory>
          <Divider />
          <ContextCategory>
            <ContextItem name="Edit Widgets..." />
          </ContextCategory>
        </ContextContainer>
      ) : null}

      <div
        className={`rounded-3xl backdrop-blur-3xl backdrop-brightness-[.85]`}
        onClick={() => {
          setContextMenuState({ ...contextMenuState, visible: false });
          setContextMenuIsOpen(false);
        }}
        onContextMenu={(e) => {
          e.preventDefault();

          if (contextMenuIsOpen) {
            setContextMenuState({ ...contextMenuState, visible: false });
            return;
          }
          setContextMenuIsOpen(true);

          const posX =
            e.clientX + contextMenuState.width < windowWidth ? e.clientX : e.clientX - contextMenuState.width;
          const posY =
            e.clientY + contextMenuState.height < windowHeight ? e.clientY : e.clientY - contextMenuState.height;

          setContextMenuState({
            visible: true,
            x: posX,
            y: posY,
            width: contextMenuState.width,
            height: contextMenuState.height,
          });
        }}
        style={{
          width: `${widgetSize}rem`,
          height: `${widgetSize}rem`,
        }}
      >
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1 p-2 *:p-0.5">
          <div>
            <div className="size-full rounded-full bg-green-500 p-1.5">
              <div className="flex size-full items-center justify-center rounded-full bg-[#2e2e2e]">
                <LaptopIcon laptopColor="#ffffff" screenColor="#f0f0f0" />
              </div>
            </div>
          </div>
          <div>
            <div className="size-full rounded-full bg-green-500 p-1.5">
              <div className="flex size-full items-center justify-center rounded-full bg-[#2e2e2e]">
                <div className="size-3 bg-white" />
              </div>
            </div>
          </div>
          <div>
            <div className="size-full rounded-full bg-green-500 p-1.5">
              <div className="flex size-full items-center justify-center rounded-full bg-[#2e2e2e]">
                <div className="size-3 bg-white" />
              </div>
            </div>
          </div>
          <div>
            <div className="size-full rounded-full bg-green-500 p-1.5">
              <div className="flex size-full items-center justify-center rounded-full bg-[#2e2e2e]">
                <div className="size-3 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
