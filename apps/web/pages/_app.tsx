import type { AppContext } from "next/app";
import NextApp from "next/app";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/globals.scss";

function App({ Component, pageProps }: any) {
  const Layout = (Component as any).layout || DashboardLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default App;
