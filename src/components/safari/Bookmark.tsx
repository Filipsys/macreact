export const Bookmark = (props: { name: string; index: number }) => (
  <div className="mb-4 flex flex-col items-center gap-2" key={`bookmarks-${props.index}`}>
    <div className="size-[72px] rounded-xl bg-zinc-900/50" />

    <p className="text-xs [line-height:.7]">{props.name}</p>
  </div>
);
