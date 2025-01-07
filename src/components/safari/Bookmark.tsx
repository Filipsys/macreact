export const Bookmark = (props: { name: string; index: string }) => (
  <div className="flex flex-col items-center gap-2" key={`bookmarks-${props.index}`}>
    <div className="size-16 rounded-lg bg-slate-300" />

    <p className="text-xs [line-height:.7]">{props.name}</p>
  </div>
);
