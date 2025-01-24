export const BatteryCircleSVG = (props: { percentFilled: number }) => {
  const percentage = props.percentFilled > 100 || props.percentFilled < 0 ? 0 : props.percentFilled;

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="none" stroke="#4b5563" stroke-width="20"></circle>

      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="#6bd45f"
        stroke-width="20"
        stroke-dasharray="565.48"
        stroke-dashoffset={`${percentage}`}
        stroke-linecap="round"
        transform="rotate(-90 100 100)"
      ></circle>
    </svg>
  );
};
