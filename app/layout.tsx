import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "イラストレーター",
  description: "ポートフォリオサイト",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}