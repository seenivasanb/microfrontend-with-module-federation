import "@/styles/globals.css";
import App from "next/app";
import { Suspense, lazy, useEffect, useState } from "react";

const HostHeader =
  typeof window !== "undefined" ? lazy(() => import("host/header")) : null;

const HostSidebar =
  typeof window !== "undefined" ? lazy(() => import("host/sidebar")) : null;

const menuList = [{ link: "/", name: "Dashboard" }];

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Suspense fallback={<div>Loading Host Header...</div>}>
          <HostHeader title="Revenue Management" />
          <HostSidebar menuList={menuList} />
        </Suspense>
      )}

      <main className={`min-h-screen w-full ml-[300px] px-10 py-28`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps };
};

export default MyApp;
