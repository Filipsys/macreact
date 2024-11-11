import React from "react";

const Divider = () => <div className="border-b border-gray-300 opacity-15 mx-1 my-1"></div>;
  
const DropdownItem = (props: {name: string}) => (
  <div className="flex flex-row justify-between">
    <p>{props.name}</p>
    <div>&gt;</div>
  </div>
);

const ContextCategory = (props: children) => (
  <ul className="flex flex-col gap-[2px]">
    {props.children}
  </ul>
);

const ContextItem = (props: {
  name?: string;
  children?: React.ReactNode
}) => {
  return (props.name ?
    <li className="hover:bg-[#254d8c] px-4 rounded-[4px]">{props.name}</li> :
    <li className="hover:bg-[#254d8c] pl-4 pr-2 rounded-[4px]">{props.children}</li>
  );
};

export const ContextMenu = () => {
  return (
    <div className="w-44 rounded-md p-1 text-sm text-white backdrop-blur-3xl bg-zinc-950/[.65] [box-shadow:_0px_0px_0px_1px_#505050,0px_0px_0px_2px_#000000,0px_0px_16px_1px_rgba(0,_0,_0,_.5)]">
        <ContextCategory>
          <ContextItem name="New Folder" />
        </ContextCategory>
        <Divider />
        <ContextCategory>
          <ContextItem name="Get Info" />
          <ContextItem name="Change Wallpaper..." />
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
    );
  };