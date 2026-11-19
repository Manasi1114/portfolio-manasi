// This file configures Astro (our web framework)
// You don't need to change anything here to get started!

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-manasi.netlify.app/',
  integrations: [sitemap()],
  // The old projects list now lives at /work.
  redirects: {
    '/projects': '/work',
  },

  vite: {
    plugins: [tailwindcss()]
  }
});