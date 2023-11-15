import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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

export const metadata: Metadata = {
  title: "This Blog create Sefa Demirtaş",
  description: "Blog Web Site",
};
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
        <Footer/>
        <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      </body>
    </html>
  );
}
