import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import "../styles/globals.css";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const authRoute = router.pathname === "/" || router.pathname === "/login";

  return (
    <>
      <Head>
        <meta name="description" content="NEWS, taking new to the moon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      </Head>

      {!authRoute ? (
        <div className="newsAdmin">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="mainLayout">
            <div className="mainLayout__header">
              <Header />
            </div>
            <Component {...pageProps} />
          </div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
export default MyApp;
