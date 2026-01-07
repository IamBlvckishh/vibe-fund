import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIBE/FUND",
  description: "funding for vibecoders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-white antialiased selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}
