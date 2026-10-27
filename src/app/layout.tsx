import type { Metadata, Viewport } from "next";
import { Syne, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const editorialSerif = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const techMono = Space_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080907",
};

export const metadata: Metadata = {
  title: "Rishabh Raj - Official Portfolio",
  description:
    "Official portfolio of Rishabh Raj — Full Stack Web Developer & Designer. Showcasing projects, technical stack, and modern interactive web experiences.",
  keywords: [
    "Rishabh Raj",
    "Rishab Raj",
    "Web Developer",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Rishabh Raj - Official Portfolio",
    description: "Official portfolio of Rishabh Raj — Full Stack Web Developer & Designer.",
    siteName: "Rishabh Raj",
    type: "website",
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
      className={`${syne.variable} ${editorialSerif.variable} ${techMono.variable} dark`}
    >
      <body className="bg-[#080907] text-[#F7F7F2] font-sans antialiased selection:bg-[#D2FF00] selection:text-[#080907] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
