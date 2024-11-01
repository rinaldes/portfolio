import type { Metadata } from "next";
import "./globals.css";
import { ChildType } from "@/types";
import { geistSans, geistMono } from "@/fonts";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Rinaldes Duma",
  description: "Rinaldes Duma's portfolio",
};

const RootLayout = ({ children }: ChildType) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
