export const Bookmark = (props: { name: string; index: string }) => (
  <div className="mb-4 flex flex-col items-center gap-2" key={`bookmarks-${props.index}`}>
    <div className="size-[72px] rounded-xl bg-slate-300" />

    <p className="text-xs [line-height:.7]">{props.name}</p>
  </div>
);
