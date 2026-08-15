import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

const postImportResult = import.meta.glob('./blog/**/*.{md,mdx}', { eager: true });
const posts = Object.values(postImportResult) as Record<string, any>[];

export function GET(context: APIContext) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? '',
    items: posts.map((post: any) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.publishedAt),
    })),
  });
}
