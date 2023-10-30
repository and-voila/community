const { withUt } = require('uploadthing/tw');
const defaultTheme = require('tailwindcss/defaultTheme');
const uiConfig = require('ui/tailwind.config');

module.exports = withUt({
  ...uiConfig,
  theme: {
    ...uiConfig.theme,
    extend: {
      ...uiConfig.theme.extend,
      fontFamily: {
        ...uiConfig.theme.extend.fontFamily,
        display: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
      },
      fontWeight: {
        display: '700',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.display').join(', '),
          },
        },
      }),
    },
  },
});
