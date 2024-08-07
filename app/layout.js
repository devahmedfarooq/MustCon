import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});
import Header from '@/components/Header/Index'
import Footer from "@/components/Footer/Index"
import Head from "next/head";

export const metadata = {
  title: "MustCon'24",
  description: "Webiste developed for mustcon'24.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
      </Head>

      <body className={"scroll-smooth  " + inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
