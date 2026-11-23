
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
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
  title: {
    default: "KP Sarees | Saree Pre-Pleating Studio",
    template: "%s | KP Sarees",
  },
  description:
    "KP Sarees - Professional saree pre-pleating, saree draping and bridal saree styling services.",
  icons: {
    icon: "/images/kp-new-logo.png",
    shortcut: "/images/kp-new-logo.png",
    apple: "/images/kp-new-logo.png",
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
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
