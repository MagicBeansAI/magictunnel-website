import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";
import { Providers } from './providers';

// Initialize Inter font with variable support
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MagicTunnel - The Intelligent Bridge for MCP Clients",
    template: "%s | MagicTunnel",
  },
  description: "Connect, discover, and orchestrate capabilities across internal systems and external APIs with unprecedented ease and intelligence.",
  keywords: ["MCP", "API", "Integration", "Orchestration", "Microservices", "AI"],
  authors: [{ name: "MagicTunnel Team" }],
  creator: "MagicTunnel Team",
  publisher: "MagicTunnel",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    title: "MagicTunnel - The Intelligent Bridge for MCP Clients",
    description: "Connect, discover, and orchestrate capabilities across internal systems and external APIs with unprecedented ease and intelligence.",
    url: "/",
    siteName: "MagicTunnel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MagicTunnel - The Intelligent Bridge for MCP Clients",
    description: "Connect, discover, and orchestrate capabilities across internal systems and external APIs with unprecedented ease and intelligence.",
    creator: "@magictunnel",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/safari-pinned-tab.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add your Google verification code here
    yandex: "", // Add your Yandex verification code here
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Providers>
          <Script src="https://buttons.github.io/buttons.js" strategy="afterInteractive" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
