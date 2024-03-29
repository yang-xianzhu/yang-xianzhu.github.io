import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

// https://astro.build/config

// /** @type {import("astro/config");} */
export default defineConfig({
  // 配置你需要使用的框架
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(), // Enable React for the Algolia search component.
    react(),
  ],

  site: "https://yang-xianzhu.github.io",
  // base:'/src/pages'
  // site: `http://astro.build`,
});
