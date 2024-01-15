import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "atletics",
  description: "atletics web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pt-br">
        <body className={`${inter.className} dark:bg-slate-700`}>
          <Header />

          {children}
        </body>
      </html>
    </>
  );
}
