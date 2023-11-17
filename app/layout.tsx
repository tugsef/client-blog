import { Inter} from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Header from "@/components/Header";
import { cx } from "@/components/utils";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, "font-mono dark:bg-dark bg-light")}>
        <Header />
        {children}
        <hr className="border-2  border-black dark:bg-light  mt-12 lg:16"  />

        <Footer/>
 
        <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      </body>
    </html>
  );
}
