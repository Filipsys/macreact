export const OpenIndicator = (props: { isActive: boolean; isHidden: boolean }) => (
  <div
    className="h[10px] flex w-full items-center justify-center"
    style={{
      display: props.isActive || props.isHidden ? "flex" : "none",
    }}
  >
    <div className="h-[4px] w-[4px] rounded-full bg-gray-400 opacity-75" />
  </div>
);
