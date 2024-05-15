import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import "@/styles/globals.css";
import App from "next/app";
// import { Suspense, lazy, useEffect, useState } from "react";

// const RemoteTitle =
//   typeof window !== "undefined"
//     ? lazy(() => import("asset-management/title"))
//     : null;

function MyApp({ Component, pageProps }) {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <>
      {/* {isClient && (
        <Suspense fallback={<div>Loading navigation...</div>}>
          <RemoteTitle />
        </Suspense>
      )} */}
      <Header />
      <Sidebar />

      <main className={`min-h-screen w-full ml-[270px] py-28 px-10`}>
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
