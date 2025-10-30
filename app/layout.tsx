import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shailesh Suryawanshi - Software Developer Portfolio",
  description: "Electronics & Telecommunication Engineering student specializing in Android development, AI-powered web applications, and innovative tech solutions.",
  keywords: ["software developer", "android developer", "AI", "Python", "Java", "web developer", "portfolio", "Next.js", "React"],
  authors: [{ name: "Shailesh Suryawanshi" }],
  openGraph: {
    title: "Shailesh Suryawanshi - Software Developer Portfolio",
    description: "Android & AI developer building innovative solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
