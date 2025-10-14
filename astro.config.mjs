// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
   site: 'https://guelbandeira.github.io',
   base: '', // no subdirectory
   output: 'static',
   build: {
      assets: '_astro',
      assetsPrefix: './',
   },
});