// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
   site: 'https://guelbandeira.github.io/new-portfolio',
   base: '/new-portfolio/',
   output: 'static',
   build: {
      assets: '_astro'
   },
});