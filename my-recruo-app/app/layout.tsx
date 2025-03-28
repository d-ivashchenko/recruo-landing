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
  title: "Recruo",
  description: "Connecting the Right Talent to the Right Opportunity.",
  icons: {
    icon: '/logo-recruo-test1-phs-400x400.ico', 
  },
  openGraph: {
    title: 'Recruo',
    description: 'Connecting the Right Talent to the Right Opportunity.',
    images: [
      {
        url: 'https://recruo.com/yt-preview.png',
        width: 1200,
        height: 630,
        alt: 'Recruo logo',
      },
    ],
    url: 'https://recruo.com',
    siteName: 'Recruo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo-recruo-test1-phs-400x400.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
