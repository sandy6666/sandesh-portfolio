import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../../globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sandesh S",
    description: "Personal Website",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
      <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          {children}
      </SidebarProvider>
      <SpeedInsights />
      </body>
    </html>
  );
}
