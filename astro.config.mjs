import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [sitemap(), tailwind(), react(), compress({
    Path: ["./src", "./src/*"],
    CSS: true,
			HTML: true,
			Image: true,
			JavaScript: true,
			SVG: true,

  })],
  compressHTML: true
});