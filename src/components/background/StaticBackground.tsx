import appStore from "@/store/appStore.ts";
import serializeFilters from "@/utils/dom/serializeFilters.ts";
import { type FC } from "react";
import { useStore } from "zustand";

const StaticBackground: FC<{ imageSrc: string | null }> = ({ imageSrc }) => {
  const filter = useStore(appStore, (state) => state.bg.options.filter);
  const ambientBrightness = useStore(appStore, (state) => state.appearance.ambientBrightness);
  const brightness = Math.min(100, (filter.brightness ?? 100) + ambientBrightness);

  return (
    <div
      className={`bg static`}
      style={{
        backgroundImage: imageSrc ? `url("${imageSrc}")` : "none",
        filter: serializeFilters({ ...filter, brightness }),
      }}
    />
  );
};

export default StaticBackground;
