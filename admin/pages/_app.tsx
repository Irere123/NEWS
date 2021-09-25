import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";

import "../styles/globals.css";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { client } from "../lib/ApolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const authRoute = router.pathname === "/" || router.pathname === "/login";

  return (
    <>
      <Head>
        <meta name="description" content="NEWS, taking new to the moon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      </Head>

      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </>
  );
}
export default MyApp;
