import { mainContext } from "@/main";
import { ContextCategory, ContextContainer, ContextItem, Divider, ListenerWrapper } from "@components/ContextMenu";
import React, { useRef, useContext } from "react";

export const CalendarWidget = (props: { size?: number }) => {
  const { widgetGridSpaces, setWidgetGridSpaces } = useContext(mainContext);
  const contextMenuRef = useRef(null);
  const date = new Date();

  const widgetSize = !props.size ? 44 : props.size;
  const widgetText = `size-${widgetSize}`;

  const timeDict = {
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  };

  const getGridPosition = (ref: React.RefObject<HTMLDivElement>) => {
    const refDiv = ref.current;
    if (!refDiv) throw new Error("Error in ref");

    const { x, y } = refDiv.getBoundingClientRect();
    return [x, y];
  };

  return (
    <ListenerWrapper contextMenuRef={contextMenuRef}>
      <ContextContainer contextMenuRef={contextMenuRef}>
        <ContextCategory>
          <ContextItem
            name="Remove Widget"
            onClick={() =>
              setWidgetGridSpaces(
                widgetGridSpaces.filter(
                  (list) =>
                    list[1][0] != getGridPosition(contextMenuRef)[0] &&
                    list[1][1] != getGridPosition(contextMenuRef)[1],
                ),
              )
            }
          />
        </ContextCategory>
        <Divider />
        <ContextCategory>
          <ContextItem name="Edit Widgets..." />
        </ContextCategory>
      </ContextContainer>

      <div className={`${widgetText} rounded-3xl backdrop-blur-3xl backdrop-brightness-[.85]`}>
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
    </ListenerWrapper>
  );
};
