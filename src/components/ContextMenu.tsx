import React from "react";

export const Divider = () => <div className="mx-1 my-1 border-b border-gray-300 opacity-15"></div>;

export const DropdownItem = (props: { name: string }) => (
  <div className="flex flex-row justify-between">
    <p>{props.name}</p>
    <div className="flex items-center justify-center">
      <svg width="6" height="8" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.907749 24.1748L10.63 15.3363C10.8657 15.1221 11 14.8184 11 14.5C11 14.1816 10.8657 13.8779 10.63 13.6637L0.907748 4.82523C0.329604 4.29964 0 3.55455 0 2.77321C0 1.24161 1.24161 0 2.77321 0H2.87214C3.5971 0 4.29524 0.274154 4.82649 0.767454L16.9008 11.9793C17.6017 12.6302 18 13.5435 18 14.5C18 15.4565 17.6017 16.3698 16.9008 17.0207L4.82649 28.2325C4.29524 28.7258 3.5971 29 2.87214 29H2.77321C1.24161 29 0 27.7584 0 26.2268C0 25.4454 0.329605 24.7004 0.907749 24.1748Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
);

export const ContextCategory = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => (
  <ul className="flex flex-col gap-[2px]">{children}</ul>
);

export const ContextItem = (props: {
  name?: string;
  inset?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}) => {
  let inset: boolean;
  if (props.inset === undefined) {
    inset = false;
  } else {
    inset = true;
  }

  let disabled: boolean;
  if (props.disabled === undefined || props.disabled == false) {
    disabled = false;
  } else {
    disabled = true;
  }

  return (
    <li
      className={`rounded-[4px] py-[2px] pl-4 pr-2 ${disabled ? "!text-gray-500" : "hover:bg-[#5587d6]"}`}
      onClick={disabled ? undefined : props.onClick}
      style={{
        paddingLeft: inset ? "1rem" : "0.5rem",
      }}
    >
      {props.name ? props.name : props.children}
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
    className="absolute z-50 w-40 cursor-default rounded-[5px] p-1 text-xs font-light text-gray-200 backdrop-blur-xl backdrop-brightness-[.5] [box-shadow:_0_0_0_.8px_rgba(255,255,255,0.3),_0_0_0_1.6px_rgba(0,0,0,0.6),0px_25px_75px_-20px_rgba(0,0,0,0.85)]"
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
