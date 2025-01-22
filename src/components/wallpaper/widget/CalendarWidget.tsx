import { ContextCategory, ContextContainer, ContextItem, Divider } from "@components/ContextMenu";
import { useContext, useState /* , RefObject */ } from "react";
import { useWindowDimensions } from "@/utils";
import { mainContext } from "@/main";

export const CalendarWidget = (props: { sizeREM?: number }) => {
  const { /* widgetGridSpaces, setWidgetGridSpaces, */ contextMenuIsOpen, setContextMenuIsOpen } =
    useContext(mainContext);
  const [contextMenuState, setContextMenuState] = useState({ visible: false, width: 0, height: 0, x: 0, y: 0 });
  const { windowWidth, windowHeight } = useWindowDimensions();
  const date = new Date();

  const widgetSize = !props.sizeREM ? 11 : props.sizeREM;

  const timeDict = {
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  };

  // const getGridPosition = (ref: RefObject<HTMLDivElement>) => {
  //   const refDiv = ref.current;
  //   if (!refDiv) throw new Error("Error in ref");

  //   const { x, y } = refDiv.getBoundingClientRect();
  //   return [x, y];
  // };

  return (
    <>
      {contextMenuState.visible ? (
        <ContextContainer
          width={contextMenuState.x}
          height={contextMenuState.y}
          setContextMenuState={() => setContextMenuState}
        >
          <ContextCategory>
            <ContextItem
              name="Remove Widget"
              // onClick={() =>
              // setWidgetGridSpaces(
              //   (list) => list[1][0] != getGridPosition()[0] && list[1][1] != getGridPosition()[1],
              //   widgetGridSpaces.filter(),
              // )
              // }
            />
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
        <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-[#3f3b36] bg-opacity-25">
          <p className="text-3xl font-bold">
            <span>{timeDict.days[date.getDay()]}</span>{" "}
            <span className="text-gray-300">{timeDict.months[date.getMonth()]}</span>
          </p>

          <p className="font-SFProRounded text-[6.5rem] font-bold opacity-90 [line-height:1]">
            {date.getDate().toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    </>
  );
};
