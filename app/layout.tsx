import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding Văn Hiếu & Kiều Anh",
  description: "Hãy đến chúc mừng đám cưới của Văn Hiếu & Kiều Anh",
  authors: [
    {
      name: "Van Hieu",
    },
  ],
  keywords: "wedding, celebration, love, marriage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Lễ cưới của Văn Hiếu & Kiều Anh</title>
        <meta name="title" content="Lễ cưới của Văn Hiếu & Kiều Anh" />
        <meta name="description" content="Gửi lời chúc đến chú rể và cô dâu" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:title" content="Lễ cưới của Văn Hiếu & Kiều Anh" />
        <meta
          property="og:description"
          content="Gửi lời chúc đến chú rể và cô dâu"
        />
        <meta property="og:image" content="/images/main_background.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_SITE_URL}
        />
        <meta
          property="twitter:title"
          content="Lễ cưới của Văn Hiếu & Kiều Anh"
        />
        <meta
          property="twitter:description"
          content="Gửi lời chúc đến chú rể và cô dâu"
        />
        <meta property="twitter:image" content="/images/main_background.jpg" />
      </Head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
