import App from "next/app";
import { appWithTranslation } from "src/i18n";
import { ThemeProvider } from "src/contexts/theme";
import "../styles/themes.scss";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
