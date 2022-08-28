import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../presentation/components/common/Layout";
import { Web3ReactProvider } from "@web3-react/core";

import Web3 from "web3";
import { Web3Provider } from "../context/Web3Provider";

function MyApp({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any) => {
    return new Web3(provider);
  };

  return (
    <NextUIProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3Provider>
      </Web3ReactProvider>
    </NextUIProvider>
  );
}

export default MyApp;
