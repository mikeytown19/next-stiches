import { global } from '../stiches.config';
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '../stiches.config';

const globalStyles = global({
  html: {m: 0, p:0},
  body: {m: 0, p:0, fontFamily: '$body'},
  '*': { margin: 0, padding: 0 },

});

console.log(darkTheme)

function MyApp({ Component, pageProps }) {
  globalStyles()
  return  (<ThemeProvider  value={{ light: 'light-theme', dark: darkTheme.className }}>
        <Component {...pageProps} />;
    </ThemeProvider>)
}

export default MyApp;
