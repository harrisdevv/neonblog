import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "HienSpace | Where Code Meets Creativity",
  description:
    "Discover innovative insights and tutorials on web development by Hien Phan. Join us to elevate your coding skills and explore the latest trends and technologies in the web development sphere.",
  keywords:
    "web development, coding tutorials, Hien Phan, innovative insights, programming, frontend development, backend development, JavaScript, React, Next.js",
  authors: [{ name: "Hien Phan", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "HienSpace | Unleashing Creativity Through Code",
    description:
      "Join Hien Phan on a journey through web development with insightful tutorials and resources.",
    url: "https://yourwebsite.com", // Replace with your actual site URL
    images: "/programmer.png",
    type: "website",
  },
  icons: {
    icon: "/programmer.png",
    shortcut: "/programmer.png",
    apple: "/programmer.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased fade-in bg-black`}>
        {children}
      </body>
    </html>
  );
}
