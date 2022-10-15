import { GITHUB, LICENSE_NOTICE, MAINTENANCE_NOTICE, OWNER, START_YEAR, TWITTER } from '../config';

function Footer() {
  return (
    <footer className="py-8 mt-24 bg-slate-900">
      <div className="mx-32 mt-8 flex flex-row justify-between">
        <div className="flex flex-col">
          <a href={`https://twitter.com/${TWITTER}`} className="text-slate-400 hover:text-rose-600">
            Twitter
          </a>
          <a href={`https://github.com/${GITHUB}`} className="text-slate-400 hover:text-rose-600">
            GitHub
          </a>
          <a href="/license/" className="text-slate-400 hover:text-rose-600">
            License: {LICENSE_NOTICE}
          </a>
        </div>
        <div />
      </div>
      <div className="flex flex-col lg:flex-row font-light text-sm text-slate-300 justify-between">
        <p className="mx-32 mt-6 mb-2 lg:mb-8">
          Copyright © {START_YEAR} - {new Date().getFullYear()} {OWNER}.
        </p>
        <p className="mx-32 mt-2 lg:mt-6 mb-8">{MAINTENANCE_NOTICE}</p>
      </div>
    </footer>
  );
}

export default Footer;
