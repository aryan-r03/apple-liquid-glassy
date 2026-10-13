import appStore, { DEFAULT_STATE } from "@/store/appStore.ts";
import type { SectionProps } from "@/types/settingSchema.ts";

export const getAppearanceSettings = (
  state: ReturnType<typeof appStore.getState>,
): SectionProps => ({
  id: "glassify-appearance",
  sectionName: "Appearance",
  groups: [
    {
      id: "glass-material",
      groupName: "Glass Material",
      components: [
        {
          id: "glass-intensity",
          type: "Dropdown",
          label: "Glass Intensity",
          tippy: "Choose how softly or prominently glass surfaces stand out.",
          value: state.appearance.glassIntensity,
          options: [
            ["Subtle", "subtle"],
            ["Balanced", "balanced"],
            ["Rich", "rich"],
          ],
          onChange: (glassIntensity) => state.setAppearance({ glassIntensity }),
        },
        {
          id: "glass-blur",
          type: "Range",
          label: "Blur Strength",
          tippy: "Backdrop blur in pixels.",
          value: state.appearance.blurStrength,
          min: 0,
          max: 24,
          unit: " px",
          onChange: (blurStrength) => state.setAppearance({ blurStrength }),
        },
        {
          id: "glass-opacity",
          type: "Range",
          label: "Glass Transparency",
          tippy: "Adjust the opacity of glass surfaces.",
          value: state.appearance.glassOpacity,
          min: 8,
          max: 36,
          unit: "%",
          onChange: (glassOpacity) => state.setAppearance({ glassOpacity }),
        },
        {
          id: "ambient-brightness",
          type: "Range",
          label: "Ambient Brightness",
          tippy: "Strength of the soft ambient light.",
          value: state.appearance.ambientBrightness,
          min: 0,
          max: 24,
          unit: "%",
          onChange: (ambientBrightness) => state.setAppearance({ ambientBrightness }),
        },
        {
          id: "artwork-ambience",
          type: "Toggle",
          label: "Artwork-Reactive Ambience",
          tippy: "Use the current artwork for the ambient background.",
          isChecked: state.appearance.artworkAmbience,
          onChange: (artworkAmbience) => state.setAppearance({ artworkAmbience }),
        },
        {
          id: "animation-intensity",
          type: "Dropdown",
          label: "Animation Intensity",
          value: state.appearance.animationIntensity,
          options: [
            ["Full", "full"],
            ["Reduced", "reduced"],
            ["Off", "off"],
          ],
          onChange: (animationIntensity) => state.setAppearance({ animationIntensity }),
        },
      ],
    },
    {
      id: "surface-details",
      groupName: "Surface Details",
      components: [
        {
          id: "corner-radius",
          type: "Dropdown",
          label: "Corner Radius",
          value: state.appearance.cornerRadius,
          options: [
            ["Compact", "compact"],
            ["Balanced", "balanced"],
            ["Rounded", "rounded"],
          ],
          onChange: (cornerRadius) => state.setAppearance({ cornerRadius }),
        },
        {
          id: "contrast-mode",
          type: "Dropdown",
          label: "Contrast Mode",
          value: state.appearance.contrastMode,
          options: [
            ["Standard", "standard"],
            ["Higher Contrast", "high"],
          ],
          onChange: (contrastMode) => state.setAppearance({ contrastMode }),
        },
        {
          id: "reset-appearance",
          type: "Button",
          label: "Reset Appearance",
          tippy: "Restore appearance controls to their defaults.",
          buttonText: "Reset",
          onClick: () => state.setAppearance(DEFAULT_STATE.appearance),
        },
      ],
    },
  ],
});
