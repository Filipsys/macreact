import React from "react";

export const Divider = () => <div className="mx-1 my-1 border-b border-gray-300 opacity-15"></div>;

export const DropdownItem = (props: { name: string }) => (
  <div className="flex flex-row justify-between">
    <p>{props.name}</p>
    <div>&gt;</div>
  </div>
);

export const ContextCategory = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-[2px]">{children}</ul>
);

export const ContextItem = (props: { name?: string; onClick?: () => void; children?: React.ReactNode }) => {
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

export const ContextContainer = ({
  contextMenuRef,
  children,
}: {
  contextMenuRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode | React.ReactNode[];
}) => (
  <div
    style={{ display: "none" }}
    ref={contextMenuRef}
    className="absolute z-50 w-40 cursor-default rounded-md border border-black/20 p-1 text-xs font-light text-white backdrop-blur-xl backdrop-brightness-[.45]"
  >
    {children}
  </div>
);

export const ListenerWrapper = ({
  contextMenuRef,
  children,
}: {
  contextMenuRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode | React.ReactNode[];
}) => (
  <div
    className="h-full w-full"
    onContextMenu={(e) => {
      if (!contextMenuRef.current) return;
      e.preventDefault();

      let { clientX, clientY } = e;
      const contextMenu = contextMenuRef.current;

      if (clientX + contextMenu.offsetWidth > window.innerWidth) clientX -= contextMenu.offsetWidth;
      if (clientY + contextMenu.offsetHeight > window.innerHeight) clientY -= contextMenu.offsetHeight;

      contextMenu.style.left = `${clientX}px`;
      contextMenu.style.top = `${clientY}px`;
      contextMenu.style.display = "block";

      document.addEventListener("click", () => {
        contextMenu.style.display = "none";
        document.removeEventListener("click", () => {});
      });
    }}
  >
    {children}
  </div>
);
