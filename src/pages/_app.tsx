import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TanstackProvider from "@/providers/TanstackProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TanstackProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </TanstackProvider>
    </>
  );
}
