import React, { useContext, useRef } from "react";
import { mainContext } from "../main.tsx";

const Divider = () => <div className="border-b border-gray-300 opacity-15 mx-1 my-1"></div>;

const DropdownItem = (props: {name: string}) => (
  <div className="flex flex-row justify-between">
    <p>{props.name}</p>
    <div>&gt;</div>
  </div>
);

const ContextCategory = ({children}: {children: React.ReactNode}) => (
  <ul className="flex flex-col gap-[2px]">
    {children}
  </ul>
);

const ContextItem = (props: {
  name?: string,
  onClick?: () => void,
  children?: React.ReactNode
}) => {
  return (props.name ?
      <li className="hover:bg-[#254d8c] px-4 py-[1px] rounded-[4px]" onClick={props.onClick}>{props.name}</li> :
      <li className="hover:bg-[#254d8c] pl-4 py-[1px] rounded-[4px] pr-2" onClick={props.onClick}>{props.children}</li>
  );
};

export const ContextMenu = ({ children }: { children: React.ReactNode }) => {
  const contextMenuRef = useRef<HTMLDivElement>(null);
  // @ts-expect-error - Temporary fix
  const { values, setValues } = useContext(mainContext);

  const ListenerWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full h-full" onContextMenu={(e) => {
       if (!contextMenuRef.current) return;
       e.preventDefault();

       console.log("Context menu");

       const { clientX, clientY } = e;
       const contextMenu = contextMenuRef.current;

       contextMenu.style.display = "block";
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
    console.log("Change wallpaper");

    console.log(values);
    setValues({ wallpaper: values.wallpaper < 3 ? values.wallpaper + 1 : 0 });
  };

  return (
    <>
      <ListenerWrapper>
        <div
          style={{ display: "none" }}
          ref={contextMenuRef}
          // className="absolute z-50 w-44 cursor-default rounded-md p-1 text-xs text-white backdrop-blur-3xl backdrop-brightness-75 [box-shadow:_0px_0px_0px_1px_#505050,0px_0px_0px_2px_#000000,0px_0px_16px_1px_rgba(0,_0,_0,_.5)]"
          className="absolute z-50 w-40 cursor-default font-light rounded-md p-1 text-xs text-white border border-black/20 backdrop-blur-xl backdrop-brightness-[.45]"
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