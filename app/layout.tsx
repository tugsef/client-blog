import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { cx } from "@/components/utils";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import siteMetadata from "@/components/utils/siteMetadata";
import NextThemeProvider from "@/providers/theme-provider";
import TanstackProvider from "@/providers/TanstackProvider";
import Up from "@/components/Up";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});
export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
        suppressHydrationWarning={true}
      >
        <Suspense fallback={<Loading />}>
          <NextThemeProvider>
            <TanstackProvider>
              <Header />

              {children}

              <Footer />
              <Toaster position="bottom-center" reverseOrder={false} />
              <Toaster position="bottom-center" reverseOrder={false} />
              <Up />
            </TanstackProvider>
          </NextThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
