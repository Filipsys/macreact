export const NavPopover = (props: { appName: string }) => {
  return (
    <div className="h-fit w-fit rounded-xl bg-gray-400 p-2">
      <div>{props.appName}</div>
      <div />
    </div>
  );
};
