import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  root: './public', // Set the public directory as the root
  plugins: [svelte()],
  build: {
    outDir: 'build', // Set the output directory to 'build'
  },
});