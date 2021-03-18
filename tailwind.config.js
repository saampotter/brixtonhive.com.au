module.exports = {
  purge: ['./src/**/*.js'],
  theme: {},
  variants: {},
  plugins: [
    ({ addBase }) => {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontDisplay: 'optional',
            src: 'url("/fonts/inter-var-latin.woff2") format("woff2")',
          },
        },
      ]);
    },
  ],
};
