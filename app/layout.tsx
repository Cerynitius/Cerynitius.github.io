import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cerynitius.github.io"),
  title: "Ruixiu Zhang · Cerynitius",
  description: "Ruixiu Zhang (Cerynitius): LLM interpretability, inference infrastructure, the Alchemy AI club, open-source projects and contact.",
  icons: { icon: "/avatar.svg", apple: "/avatar.svg" },
  openGraph: {
    title: "Ruixiu Zhang · Cerynitius",
    description: "LLM interpretability, inference infrastructure, the Alchemy AI club, open-source projects and contact.",
    url: "https://cerynitius.github.io",
    siteName: "Ruixiu Zhang · Cerynitius",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary", title: "Ruixiu Zhang · Cerynitius", description: "LLM interpretability, inference infrastructure, the Alchemy AI club, open-source projects." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
