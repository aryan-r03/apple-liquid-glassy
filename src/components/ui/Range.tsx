import type { RangeProps } from "@/types/uiSchema.ts";
import { type ChangeEvent, type FC } from "react";

const Range: FC<RangeProps> = ({ label, value, min, max, step = 1, unit = "", onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.currentTarget.value);
    if (Number.isFinite(nextValue)) onChange(Math.min(max, Math.max(min, nextValue)));
  };

  return (
    <div className="glassify-range">
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <output>
        {value}
        {unit}
      </output>
    </div>
  );
};

export default Range;
