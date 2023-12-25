import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cjanua.xyz',
  integrations: [sitemap(), tailwind(), react()],
  compressHTML: true,
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
});