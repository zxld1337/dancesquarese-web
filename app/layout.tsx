import type { Metadata } from "next";
import { MonteCarlo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { withBasePath } from "@/lib/basePath";

const monteCarlo = MonteCarlo({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dance Square | Táncoktatás Hatvanban",
  description:
    "Dance Square Sportegyesület – versenytánc, társastánc és esküvői tánctanfolyamok Hatvanban. Minden korosztálynak.",
  keywords: ["dance square", "dancesquare", "dancesquarese", "tánctanfolyam Hatvan"],
  icons: { icon: withBasePath("/icon/DS.png") },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${monteCarlo.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-background text-foreground font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
