import "@/styles/globals.css";
import App from "next/app";
import { Suspense, lazy, useEffect, useState } from "react";

const HostHeader =
  typeof window !== "undefined" ? lazy(() => import("host/header")) : null;

const HostSidebar =
  typeof window !== "undefined" ? lazy(() => import("host/sidebar")) : null;

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Suspense fallback={<div>Loading Host Header...</div>}>
          <HostHeader />
          <HostSidebar />
        </Suspense>
      )}
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps };
};

export default MyApp;
