import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phantom.dev"),
  title: "Phantom",
  description: "Systems that think. Interfaces that feel alive. Software with intent.",
  keywords: [
    "software engineer",
    "systems design",
    "AI development",
    "product engineering",
  ],
  openGraph: {
    title: "Phantom",
    description: "Systems that think. Interfaces that feel alive.",
    url: "https://phantom.dev",
    siteName: "Phantom",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Phantom",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phantom",
    description: "Systems that think. Interfaces that feel alive.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} bg-[#08090f] text-[#c8d0e0] antialiased`}
      >
        {/* Grid background */}
        <div className="fixed inset-0 -z-30 grid-bg" />
        {/* Grid signal pulses */}
        <div className="grid-signals -z-25">
          {/* Horizontal signals */}
          <div className="signal-line signal-h signal-h-1" />
          <div className="signal-line signal-h signal-h-2" />
          <div className="signal-line signal-h signal-h-3" />
          <div className="signal-line signal-h signal-h-4" />
          <div className="signal-line signal-h signal-h-5" />
          {/* Vertical signals */}
          <div className="signal-line signal-v signal-v-1" />
          <div className="signal-line signal-v signal-v-2" />
          <div className="signal-line signal-v signal-v-3" />
          <div className="signal-line signal-v signal-v-4" />
          <div className="signal-line signal-v signal-v-5" />
          {/* Intersection nodes */}
          <div className="signal-node signal-node-1" />
          <div className="signal-node signal-node-2" />
          <div className="signal-node signal-node-3" />
          <div className="signal-node signal-node-4" />
          <div className="signal-node signal-node-5" />
        </div>
        {/* Atmospheric gradients */}
        <div className="fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-violet-500/[0.03] blur-[120px] drift" />
          <div className="absolute -right-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-blue-500/[0.04] blur-[100px] breathe" />
          <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-emerald-500/[0.02] blur-[80px] drift" style={{ animationDelay: '-10s' }} />
        </div>
        {children}
      </body>
    </html>
  );
}
