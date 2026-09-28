/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,njk}'],
  theme: {
    extend: {
      colors: {
        paper: '#ecebe5',
        sheet: '#f6f5f0',
        ink: '#1c1a1b',
        mute: '#625e57',
        hair: '#c9c6bc',
        ash: '#a8a49b',
        char: '#3a3736',
        signal: '#e8500f'
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'Menlo',
          'Consolas',
          'monospace'
        ],
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif']
      },
      maxWidth: {
        page: '80rem'
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-lead': theme('colors.mute'),
            '--tw-prose-links': theme('colors.ink'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.mute'),
            '--tw-prose-bullets': theme('colors.signal'),
            '--tw-prose-hr': theme('colors.ink'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.signal'),
            '--tw-prose-captions': theme('colors.mute'),
            '--tw-prose-code': theme('colors.ink'),
            '--tw-prose-pre-code': theme('colors.paper'),
            '--tw-prose-pre-bg': theme('colors.ink'),
            '--tw-prose-th-borders': theme('colors.ink'),
            '--tw-prose-td-borders': theme('colors.hair'),
            maxWidth: '70ch',
            a: {
              fontWeight: '500',
              textDecorationColor: theme('colors.signal'),
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
              '&:hover': {
                backgroundColor: theme('colors.signal'),
                textDecorationColor: theme('colors.ink')
              }
            },
            'h2, h3': {
              fontFamily: theme('fontFamily.display').join(', '),
              letterSpacing: '0.01em',
              lineHeight: '1'
            },
            h2: {
              fontWeight: '700',
              borderTop: `2px solid ${theme('colors.ink')}`,
              paddingTop: '0.5em'
            },
            h3: {
              fontWeight: '600'
            },
            h4: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '500',
              backgroundColor: theme('colors.sheet'),
              borderLeftWidth: '4px',
              paddingTop: '0.75em',
              paddingBottom: '0.75em',
              paddingRight: '1em'
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            code: {
              fontWeight: '500',
              backgroundColor: theme('colors.sheet'),
              border: `1px solid ${theme('colors.hair')}`,
              padding: '0.125em 0.375em'
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            'pre code': {
              backgroundColor: 'transparent',
              border: '0',
              padding: '0'
            },
            pre: {
              borderRadius: '0',
              border: `2px solid ${theme('colors.ink')}`
            },
            img: {
              border: `2px solid ${theme('colors.ink')}`
            },
            'thead th': {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            },
            'ol > li::marker': {
              fontFamily: theme('fontFamily.mono').join(', ')
            }
          }
        },
        lg: {
          css: {
            h2: { fontSize: '2em' },
            h3: { fontSize: '1.5em' },
            h4: { fontSize: '0.8em' },
            pre: { borderRadius: '0' },
            'thead th': { fontSize: '0.75em' }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
