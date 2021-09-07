import { ThemeProvider } from 'next-themes';
import { darkTheme } from '../theme/stiches.config';
import { globalStyles } from '../theme/globals';

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
