import rss from '@astrojs/rss';

import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

const postImportResult = import.meta.glob('./blog/**/*.{md,mdx}', { eager: true });
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map((post: any) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.publishedAt,
    })),
  });
