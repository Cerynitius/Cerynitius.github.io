import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cerynitius.github.io"),
  title: "张睿修 · Cerynitius",
  description: "张睿修 (Cerynitius) 的个人主页。LLM 可解释性、推理基础设施、炼丹社、开源项目与联系方式。",
  icons: { icon: "/avatar.svg", apple: "/avatar.svg" },
  openGraph: {
    title: "张睿修 · Cerynitius",
    description: "LLM interpretability, inference infrastructure, 炼丹社, open-source projects and contact.",
    url: "https://cerynitius.github.io",
    siteName: "张睿修 · Cerynitius",
    locale: "zh_CN",
    type: "website",
  },
  twitter: { card: "summary", title: "张睿修 · Cerynitius", description: "LLM interpretability, inference infrastructure, 炼丹社, open-source projects." },
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
