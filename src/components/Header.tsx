import HeaderLink from './HeaderLink';

import { SITE_TITLE } from '../config';

function Header({ title }: { title?: string }) {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <header className="max-w-8xl mx-auto">
        <div className="flex flex-row justify-between py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <a href="/">
            <h2 className="text-base md:text-md font-semibold px-4 text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900 border-rose-300/50 dark:border-rose-700/50 rounded-full">
              {title || SITE_TITLE}
            </h2>
          </a>
          <nav className="flex space-x-4 font-semibold text-base md:text-md text-slate-900 dark:text-slate-100">
            <HeaderLink href="/blog">Blog</HeaderLink>
            <HeaderLink href="/projects">Projects</HeaderLink>
            <HeaderLink href="/about">About</HeaderLink>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
