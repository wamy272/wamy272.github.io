import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: [
          {
            name: "Open Sans",
            weights: [400, 700],
          },
          {
            name: "Noto Sans SC",
            weights: [400, 700],
          },
        ],
      },
    }),
  ],
  shortcuts: {
    "section-title": "color-[#275B94] font-bold font-[Courier] my-4",
    article: "text-size-[14px]",
    "article-highlight":
      "bg-gradient-linear bg-gradient-[to_bottom,transparent_60%,#A5D6FF99_60%]",
  },
});
