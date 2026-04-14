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
  title: "Johnny Celario — Go-To-Market Engineer",
  description: "I've built production-grade GTM automations that replace a whole marketing team.",
  openGraph: {
    title: "Johnny Celario — Go-To-Market Engineer",
    description: "I've built production-grade GTM automations that replace a whole marketing team.",
    url: "https://johnnycelario.github.io/portfolio/",
    siteName: "Johnny Celario",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Johnny Celario — Go-To-Market Engineer",
    description: "I've built production-grade GTM automations that replace a whole marketing team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
