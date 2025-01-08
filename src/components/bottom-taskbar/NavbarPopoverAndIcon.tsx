export const NavbarPopoverAndIcon = (props: { name: string; icon: string }) => (
  <div className="group/iconElement">
    <div className="absolute flex w-full -translate-y-10 flex-col items-center opacity-0 transition-opacity group-hover/iconElement:opacity-100">
      <div className="z-10 h-fit w-fit rounded-[4px] bg-[#343132] px-3 py-[3px] [box-shadow:_0px_0px_0px_1px_#505050,0px_0px_0px_2px_#000000]">
        <p className="text-xs">{props.name}</p>
      </div>
      <div className="h-5 w-5 -translate-y-1 bg-[#343132]" style={{ clipPath: "polygon(50% 50%, 0 0, 100% 0)" }} />
    </div>

    <img src={props.icon} alt={props.name} className="w-[50px] active:brightness-75" />
  </div>
);
