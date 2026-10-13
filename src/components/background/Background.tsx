import AnimatedBackgroundCanvas from "@/components/background/AnimatedBackgroundCanvas.tsx";
import StaticBackground from "@/components/background/StaticBackground.tsx";
import appStore from "@/store/appStore.ts";
import tempStore from "@/store/tempStore.ts";
import { type FC } from "react";
import { useStore } from "zustand";

const Background: FC = () => {
  const mode = useStore(appStore, (state) => state.bg.mode);
  const color = useStore(appStore, (state) => state.bg.options.color);
  const imageMode = useStore(appStore, (state) => state.bg.options.imageMode);
  const customUrl = useStore(appStore, (state) => state.bg.options.imageSrc);
  const artworkAmbience = useStore(appStore, (state) => state.appearance.artworkAmbience);
  const storedAnimationIntensity = useStore(
    appStore,
    (state) => state.appearance.animationIntensity,
  );
  const animationIntensity =
    storedAnimationIntensity === "off"
      ? "off"
      : storedAnimationIntensity === "reduced"
        ? "reduced"
        : "full";
  const npUrl = useStore(tempStore, (state) => state.player?.current?.url);
  const pageImgUrl = useStore(tempStore, (state) => state.pageImg);
  const imageSrc = (() => {
    if (imageMode === "custom" && customUrl) return customUrl;

    if (imageMode === "page" && artworkAmbience) {
      const { desktop, cover } = pageImgUrl || {};
      if (desktop) return desktop;
      if (cover) return cover;
    }

    if (npUrl && artworkAmbience) return npUrl;

    return null;
  })();

  return (
    <div className="bg-wrapper">
      {mode === "animated" && animationIntensity !== "off" ? (
        <div className="bg animated">
          <AnimatedBackgroundCanvas imageSrc={imageSrc} animationIntensity={animationIntensity} />
        </div>
      ) : mode === "solid" ? (
        <div className="bg solid" style={{ backgroundColor: color }}></div>
      ) : (
        <StaticBackground imageSrc={imageSrc} />
      )}
    </div>
  );
};

export default Background;
