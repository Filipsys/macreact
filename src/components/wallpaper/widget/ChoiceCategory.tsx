import { Widget } from "@/constants";

const SingleWidget = (props: Widget) => {
  const sizes = ["size-24", "aspect-2/1 h-24", "aspect-square size-48"];

  return props.component === undefined ? (
    <div>
      <div
        className={`${props.size == "small" ? sizes[0] : props.size == "medium" ? sizes[1] : sizes[2]} rounded-xl bg-black/30`}
      />
      <div className="flex flex-col items-center px-6 pt-5">
        <p className="font-bold">{props.widgetName}</p>
        <p className="text-white/80">{props.widgetDescription}</p>
      </div>
    </div>
  ) : (
    <div>
      <div
        className={`${props.size == "small" ? "size-24" : props.size == "medium" ? "aspect-2/1 h-24" : "aspect-square size-48"} rounded-xl`}
      >
        {props.component}
      </div>
      <div className="flex flex-col items-center px-6 pt-5">
        <p className="font-bold">{props.widgetName}</p>
        <p className="text-white/80">{props.widgetDescription}</p>
      </div>
    </div>
  );
};

export const ChoiceCategory = (props: { categoryName: string; isFromPhone?: boolean; widgets: Widget[] }) => {
  return (
    <div>
      <div className="flex justify-between py-1.5">
        <p className="text-xs font-bold text-white/40">{props.categoryName}</p>
        <p className={`text-xs text-white/40 ${props.isFromPhone == undefined ? "hidden" : "block"}`}>from iPhone</p>
      </div>

      <div className="grid h-48 grid-cols-3 grid-rows-1 text-center text-xs *:flex *:flex-col *:items-center *:justify-center">
        {props.widgets.map((widget, index) => (
          <SingleWidget
            widgetName={widget.widgetName}
            widgetDescription={widget.widgetDescription}
            size={widget.size}
            component={widget.component}
            key={`single-widget-${widget.widgetName}-${index}`}
          />
        ))}
      </div>

      <div className="p-2">
        <div className="h-px w-full bg-white/20" />
      </div>
    </div>
  );
};
