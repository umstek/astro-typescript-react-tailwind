import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import shikiTwoslash from 'remark-shiki-twoslash';

import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkReadingTime,
      [shikiTwoslash.default || shikiTwoslash, { themes: ['github-dark', 'github-light'] }],
    ],
    extendDefaultPlugins: true,
  },
  integrations: [mdx(), react(), tailwind({ config: { applyBaseStyles: false } }), sitemap()],
});
