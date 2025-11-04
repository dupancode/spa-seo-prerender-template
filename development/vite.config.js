import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";
import { router } from "./src/configuration/router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    vue(),
    prerender({
      staticDir: resolve(__dirname, "dist"),
      routes: router,
      renderer: new PuppeteerRenderer({
        renderAfterDocumentEvent: "render-event",
      }),
    }),
  ],
  build: {
    outDir: "dist",
  },
});
