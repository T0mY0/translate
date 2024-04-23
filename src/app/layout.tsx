import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TomYo Translate",
  description: "TomYo Translate нь англи - монгол хэлний хооронд үгс, хэллэгүүдийг орчуулах боломжийг олгодог онлайн орчуулгын хэрэгсэл юм.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID!} />
    </html>
  );
}
