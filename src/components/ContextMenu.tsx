import React, { useContext, useRef } from "react";
import { mainContext } from "../main.tsx";

const Divider = () => <div className="mx-1 my-1 border-b border-gray-300 opacity-15"></div>;

const DropdownItem = (props: { name: string }) => (
  <div className="flex flex-row justify-between">
    <p>{props.name}</p>
    <div>&gt;</div>
  </div>
);

const ContextCategory = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-[2px]">{children}</ul>
);

const ContextItem = (props: { name?: string; onClick?: () => void; children?: React.ReactNode }) => {
  return props.name ? (
    <li className="rounded-[4px] px-4 py-[1px] hover:bg-[#254d8c]" onClick={props.onClick}>
      {props.name}
    </li>
  ) : (
    <li className="rounded-[4px] py-[1px] pl-4 pr-2 hover:bg-[#254d8c]" onClick={props.onClick}>
      {props.children}
    </li>
  );
};

export const ContextMenu = ({ children }: { children: React.ReactNode }) => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const { wallpaper, setWallpaper } = useContext(mainContext);

  const ListenerWrapper = ({ children }: { children: React.ReactNode }) => (
    <div
      className="h-full w-full"
      onContextMenu={(e) => {
        if (!contextMenuRef.current) return;
        e.preventDefault();

        let { clientX, clientY } = e;
        const contextMenu = contextMenuRef.current;
        contextMenu.style.display = "block";

        if (clientX + contextMenu.offsetWidth > window.innerWidth) clientX -= contextMenu.offsetWidth;
        if (clientY + contextMenu.offsetHeight > window.innerHeight) clientY -= contextMenu.offsetHeight;

        contextMenu.style.left = `${clientX}px`;
        contextMenu.style.top = `${clientY}px`;

        document.addEventListener("click", () => {
          contextMenu.style.display = "none";
          document.removeEventListener("click", () => {});
        });
      }}
    >
      {children}
    </div>
  );

  const handleWallpaperChange = () => {
    setWallpaper(wallpaper < 3 ? wallpaper + 1 : 0);
  };

  return (
    <>
      <ListenerWrapper>
        <div
          style={{ display: "none" }}
          ref={contextMenuRef}
          // className="absolute z-50 w-44 cursor-default rounded-md p-1 text-xs text-white backdrop-blur-3xl backdrop-brightness-75 [box-shadow:_0px_0px_0px_1px_#505050,0px_0px_0px_2px_#000000,0px_0px_16px_1px_rgba(0,_0,_0,_.5)]"
          className="absolute z-50 w-40 cursor-default rounded-md border border-black/20 p-1 text-xs font-light text-white backdrop-blur-xl backdrop-brightness-[.45]"
        >
          <ContextCategory>
            <ContextItem name="New Folder" />
          </ContextCategory>
          <Divider />
          <ContextCategory>
            <ContextItem name="Get Info" />
            <ContextItem name="Change Wallpaper..." onClick={handleWallpaperChange} />
            <ContextItem name="Edit Widgets..." />
          </ContextCategory>
          <Divider />
          <ContextCategory>
            <ContextItem name="Use Stacks" />
            <ContextItem>
              <DropdownItem name="Group Stacks By" />
            </ContextItem>
            <ContextItem name="Show View Options" />
          </ContextCategory>
          <Divider />
          <ContextCategory>
            <ContextItem>
              <DropdownItem name="Import from iPhone" />
            </ContextItem>
          </ContextCategory>
        </div>

        {children}
      </ListenerWrapper>
    </>
  );
};
