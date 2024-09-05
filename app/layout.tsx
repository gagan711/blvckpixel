import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blvckpixel",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageTitle = "BLVCKPIXEL";
  return (
    <html lang="en">
      <head>
        <title>{pageTitle}</title>
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <meta property="og:title" content="BLVCKPIXEL : the foresight company" />
        <meta property="og:description" content="The ability to judge correctly what is going to happen in the future and plan your action based on this knowledge." />
        <meta property="og:image" content="/blvckpixel_og.png" />
        <meta property="og:url" content="https://www.blvckpixel.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BLVCKPIXEL : the foresight company" />
        <meta name="twitter:description" content="The ability to judge correctly what is going to happen in the future and plan your action based on this knowledge." />
        <meta name="twitter:image" content="/blvckpixel_og.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
