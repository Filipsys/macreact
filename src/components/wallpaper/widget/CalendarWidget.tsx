import { ContextCategory, ContextContainer, ContextItem, Divider } from "@components/ContextMenu";
import { /* useContext, */ useState } from "react";
// import { mainContext } from "@/main";
import { useGetWindowDimensions } from "@/utils";

export const CalendarWidget = (props: { sizeREM?: number }) => {
  const [contextMenuState, setContextMenuState] = useState({ visible: false, width: 0, height: 0 });
  // const { widgetGridSpaces, setWidgetGridSpaces } = useContext(mainContext);
  const { width, height } = useGetWindowDimensions();
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
        <ContextContainer width={contextMenuState.width} height={contextMenuState.height}>
          <ContextCategory>
            <ContextItem
              name="Remove Widget"
              // onClick={() =>
              //   setWidgetGridSpaces(
              //     (list) => list[1][0] != getGridPosition()[0] && list[1][1] != getGridPosition()[1],
              //     widgetGridSpaces.filter(),
              //   )
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
        onContextMenu={(e) => {
          e.preventDefault();
          setContextMenuState({ visible: true, width: width, height: height });
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
