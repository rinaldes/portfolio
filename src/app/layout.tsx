import "./globals.css";
import { ChildType } from "@/types";
import { geistSans, geistMono } from "@/fonts";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/toaster";
export { metadata } from "./metadata";

const RootLayout = ({ children }: ChildType) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}
    >
      <Providers>{children}</Providers>
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
