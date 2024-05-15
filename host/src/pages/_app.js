import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import "@/styles/globals.css";
import App from "next/app";

const menuList = [
  { link: "/", name: "Dashboard" },
  { link: "/asset-management", name: "Asset Management" },
  { link: "/revenue-management", name: "Revenue Management" },
];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header title="Micro Frontend" />
      <Sidebar menuList={menuList} />

      <main className={`min-h-screen w-full ml-[300px] py-28 px-10`}>
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
