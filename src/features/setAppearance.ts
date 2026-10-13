import type { GlassifyAppearance } from "@/store/appStore.ts";
import appStore from "@/store/appStore.ts";

const GLASS_INTENSITY = {
  subtle: { highlight: 0.14, border: 0.12, shadow: 0.18 },
  balanced: { highlight: 0.22, border: 0.17, shadow: 0.24 },
  rich: { highlight: 0.3, border: 0.22, shadow: 0.32 },
} as const;

const CORNER_RADIUS = {
  compact: {
    control: "8px",
    container: "14px",
    player: "18px",
    artwork: "8px",
    card: "10px",
  },
  balanced: {
    control: "10px",
    container: "18px",
    player: "22px",
    artwork: "10px",
    card: "14px",
  },
  rounded: {
    control: "12px",
    container: "22px",
    player: "26px",
    artwork: "12px",
    card: "18px",
  },
} as const;

function applyAppearance(appearance: GlassifyAppearance) {
  const root = document.documentElement;
  const intensity =
    appearance.glassIntensity === "subtle"
      ? GLASS_INTENSITY.subtle
      : appearance.glassIntensity === "rich"
        ? GLASS_INTENSITY.rich
        : GLASS_INTENSITY.balanced;
  const radius =
    appearance.cornerRadius === "compact"
      ? CORNER_RADIUS.compact
      : appearance.cornerRadius === "rounded"
        ? CORNER_RADIUS.rounded
        : CORNER_RADIUS.balanced;
  const opacity = appearance.glassOpacity / 100;

  root.style.setProperty("--glass-blur", `${appearance.blurStrength}px`);
  root.style.setProperty("--glass-opacity", opacity.toString());
  root.style.setProperty("--glass-highlight-opacity", intensity.highlight.toString());
  root.style.setProperty("--glass-border-opacity", intensity.border.toString());
  root.style.setProperty("--glass-shadow-strength", intensity.shadow.toString());
  root.style.setProperty("--glass-radius-control", radius.control);
  root.style.setProperty("--glass-radius-container", radius.container);
  root.style.setProperty("--glass-radius-panel", radius.container);
  root.style.setProperty("--glass-radius-player", radius.player);
  root.style.setProperty("--glass-radius-artwork", radius.artwork);
  root.style.setProperty("--glass-radius", radius.container);
  root.style.setProperty("--glass-radius-card", radius.card);
  root.style.setProperty(
    "--glass-bg",
    `rgba(var(--clr-surface-4-rgb), ${appearance.contrastMode === "high" ? Math.min(opacity + 0.08, 0.44) : opacity})`,
  );
  root.style.setProperty(
    "--ambient-artwork-color",
    `rgba(180, 198, 226, ${appearance.ambientBrightness / 100})`,
  );
  root.style.setProperty("--ambient-light-alpha", (appearance.ambientBrightness / 100).toString());

  document.body.dataset.glassMotion = appearance.animationIntensity;
  document.body.dataset.artworkAmbience = appearance.artworkAmbience ? "on" : "off";
  document.body.dataset.glassContrast = appearance.contrastMode;
}

export default function setAppearance() {
  applyAppearance(appStore.getState().appearance);
  return appStore.subscribe((state) => state.appearance, applyAppearance);
}
