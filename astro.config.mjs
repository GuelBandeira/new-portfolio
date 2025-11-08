// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://guelbandeira.github.io/new-portfolio',
  base: '/new-portfolio/',
  output: 'static',

  build: {
    assets: '_astro'
  },

  integrations: [icon()],
});