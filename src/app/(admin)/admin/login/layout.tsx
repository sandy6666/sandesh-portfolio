import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../../globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Login Page",
  description: "Admin Login Page",
};

export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en'>
      <body className={nunito.className}>
        {children}
      <SpeedInsights />
      </body>
      </html>
  );
}
