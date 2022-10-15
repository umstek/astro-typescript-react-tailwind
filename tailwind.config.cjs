const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      height: {
        'screen/2': '50vh',
      },
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-emphasis': theme('colors.rose[600]'),
            pre: {
              color: null,
              backgroundColor: null,
            },
            h1: {
              fontWeight: '300',
              color: 'var(--tw-prose-emphasis)',
            },
            h2: {
              fontWeight: '350',
              color: 'var(--tw-prose-emphasis)',
            },
            h3: {
              fontWeight: '400',
              color: 'var(--tw-prose-emphasis)',
            },
            h4: {
              fontWeight: '600',
              color: 'var(--tw-prose-emphasis)',
            },
            h5: {
              color: 'var(--tw-prose-emphasis)',
            },
            h6: {
              fontStyle: 'italic',
              color: 'var(--tw-prose-emphasis)',
            },
            a: {
              textDecoration: 'none',
              borderColor: 'var(--tw-prose-emphasis)',
              borderBottomWidth: '2px',
            },
            'a:hover': {
              color: 'var(--tw-prose-emphasis)',
            },
            blockquote: {
              borderLeftColor: 'var(--tw-prose-emphasis)',
            },
            'blockquote > p::before': {
              color: 'var(--tw-prose-emphasis)',
            },
            'blockquote > p::after': {
              color: 'var(--tw-prose-emphasis)',
            },
            'ol > li::marker': {
              color: 'var(--tw-prose-emphasis)',
            },
            'ul > li::marker': {
              color: 'var(--tw-prose-emphasis)',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
