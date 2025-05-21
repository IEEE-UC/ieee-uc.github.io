import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteStaticCopy } from "vite-plugin-static-copy";

// Set base for GitHub Pages deployment
export default defineConfig({
  base: "/",
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        { src: "src/assets", dest: "src/" },
        { src: "src/editable-content", dest: "src/" },
      ],
    }),
  ],
});
