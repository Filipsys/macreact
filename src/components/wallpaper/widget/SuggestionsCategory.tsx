export const SuggestionsCategory = () => (
  <div>
    <p>Suggestions</p>

    <div className="grid h-48 grid-cols-6 grid-rows-2">
      <div className="bg-blue-300" />
      <div className="bg-white" />
      <div className="col-span-2 row-span-2 bg-red-300" />
      <div className="bg-violet-300" />
      <div className="bg-pink-300" />
      <div className="height-24 col-span-2 row-span-1 bg-green-300" />
      <div className="bg-yellow-300" />
      <div className="bg-blue-300" />
    </div>

    <div className="p-2 px-4">
      <div className="h-[1px] w-full bg-white" />
    </div>
  </div>
);
