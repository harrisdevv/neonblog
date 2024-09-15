import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Code Chronicles",
  description: "Insights and tutorials on web development by Hien Phan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} antialiased fade-in`}
      >
        {children}
      </body>
    </html>
  );
}
