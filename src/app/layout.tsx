import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapLoader from "./components/BootstrapLoader";
import Provider from "./Provider";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Redux Ecommerce Application",
};

export function TostProvider(){
  return <ToastContainer style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)",  }} autoClose={3000} />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} d-flex flex-column min-vh-100`}>
        <Provider>
          <Header/>
          <BootstrapLoader/>
          <TostProvider />
          <main className="flex-grow-1">
            {children}
          </main>
        </Provider>
        <Footer/>
      </body>
    </html>
  );
}
