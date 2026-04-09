import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://starter3.jakefixestech.com/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
