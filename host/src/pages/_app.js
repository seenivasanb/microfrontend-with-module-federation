import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import "@/styles/globals.css";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
