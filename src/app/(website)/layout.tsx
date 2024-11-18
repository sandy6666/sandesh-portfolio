import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Menu from "@/components/generic/Menu";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "@/components/generic/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandesh S",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <Menu/>
      {children}
      <Footer />
      <SpeedInsights />
      </body>
    </html>
  );
}
