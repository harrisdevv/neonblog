import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "HinCode | Coding is fun",
  description:
    "Innovative Insights and Tutorials on Web Development by Hien Phan",
  icons: {
    icon: "/programmer.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} antialiased fade-in bg-black`}>
        {children}
      </body>
    </html>
  );
}
