import { SidebarIcon, LeftArrowIcon, RightArrowIcon, UploadIcon, SearchIcon } from "@/assets/safariIcons";
import { WindowControl } from "@components/WindowControl";
import React, { useState } from "react";

const navigationButtonsEnabled = false;

export const TopNavigation = (props: {
  position: { x: number; y: number };
  setDragging: (arg: boolean) => void;
  setOffset: ({ x, y }: { x: number; y: number }) => void;
  handleMove: (e: React.MouseEvent) => void;
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <nav
      className="relative flex h-12 w-full items-center justify-between rounded-t-xl bg-[#403938] shadow-sm"
      onMouseDown={(e) => {
        props.setDragging(true);
        props.setOffset({
          x: e.clientX - props.position.x,
          y: e.clientY - props.position.y,
        });
      }}
      onMouseUp={() => props.setDragging(false)}
      onMouseLeave={() => props.setDragging(false)}
      onMouseMove={(e) => props.handleMove(e)}
    >
      <div className="absolute left-0 flex items-center px-4">
        <WindowControl />

        <div className="z-10 px-[12px]">
          <div className="rounded-md p-1 px-2 *:fill-[#bfbab9] hover:bg-white/5">
            <SidebarIcon />
          </div>
        </div>

        <div className="z-10 flex gap-1">
          <div
            className={`rounded-md p-1 px-2 ${navigationButtonsEnabled ? "*:fill-[#bfbab9]" : "*:fill-[#635e5c]"} ${navigationButtonsEnabled ? "hover:bg-white/5" : ""}`}
          >
            <LeftArrowIcon />
          </div>
          <div
            className={`rounded-md p-1 px-2 ${navigationButtonsEnabled ? "*:fill-[#bfbab9]" : "*:fill-[#635e5c]"} ${navigationButtonsEnabled ? "hover:bg-white/5" : ""}`}
          >
            <RightArrowIcon />
          </div>
        </div>
      </div>

      <div className="absolute flex h-full w-full justify-center">
        <div className="h-full w-96 p-2">
          <div
            className="relative flex h-full w-full rounded-md bg-[#332c2b] transition-colors duration-200"
            style={{
              border: isClicked ? "3px solid #446f96" : "3px solid transparent",
            }}
          >
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center px-2">
              <div className="*:mr-1.5 *:size-3 *:fill-[#999595]">
                <SearchIcon />
              </div>

              {/* Field sizing property is not fully supported. Does not work on Safari & Firefox (ironic how Safari won't work fully in Safari) */}
              <input
                type="text"
                onClick={() => setIsClicked(true)}
                onBlur={(e) => {
                  if (e.target.value == "") {
                    e.target.style.width = "55%";
                  } else {
                    e.target.style.width = "100%";
                  }

                  setIsClicked(false);
                }}
                placeholder="Search or enter website name"
                className="font-base z-10 h-min w-[55%] bg-transparent text-[12px] text-white outline-none [field-sizing:content] [transition:width_0.3s] placeholder:text-[#6f6c6c] focus-within:w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 flex gap-4 px-6 *:fill-[#635e5c]">
        <UploadIcon />
        <UploadIcon />
        <UploadIcon />
      </div>
    </nav>
  );
};
