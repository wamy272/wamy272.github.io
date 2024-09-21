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
            weights: [400, 500, 700],
            italic: true,
          },
          {
            name: "Noto Sans SC",
            weights: [400, 500, 700],
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      design: {
        product: "#6BC0F2",
        service: "#F18D7B",
        brand: "#F9E49A",
        DEFAULT: "gray",
      },
    },
  },
  safelist: ["bg-design-product", "bg-design-service", "bg-design-brand"],
  shortcuts: {
    section: "w-full mb-8",
    "section-header": "font-bold font-[Courier] mb-3 text-size-lg",
    "section-content": "flex flex-col gap-8 mb-6 sm:flex-row",
    "section-content-start": "flex-1",
    "section-content-main": "flex-[3] text-justify",
    "section-footer": "text-[#888888] flex flex-row gap-4",
    "image-placeholder":
      "flex place-items-center place-content-center bg-gray opacity-60 aspect-ratio-square color-white shadow-md",
    image: "shadow-md",
    icon: "transition hover:color-[#7FAFC7]",
    article: "text-size-[14px] space-y-4",
    "article-highlight": "relative hover:[--highlight-color:#A5D6FFFF] [--highlight-color:#A5D6FF99] before:bg-[--highlight-color] before:content-empty before:w-full before:h-[40%] before:bottom-0 before:absolute before:z--1 before:transition before:transition-duration-300",
    academic: "text-size-[14px] space-y-1",
    "academic-title": "font-bold",
    "academic-journal": "font-italic",
    "academic-authors": "break-words",
    "academic-abstract-summary":
      "flex flex-row gap-2 font-normal select-none place-items-center",
    "academic-abstract": "text-[#888888]",
  },
});
