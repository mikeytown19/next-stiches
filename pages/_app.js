import { ThemeProvider } from 'next-themes';
import { globalCss, darkTheme } from '../theme/stiches.config';

const globalStyles = globalCss({
  html: { m: 0, p: 0 },
  body: { m: 0, p: 0, fontFamily: '$body' },
  '*': { margin: 0, padding: 0 },
  h4: {
    fontWeight: '600',
  },

});

globalStyles();
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
