import type { Metadata } from "next";
import { Imprima } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const impact = localFont({
  src: "/assets/fonts/Impact.ttf",
  variable: "--impact",
  weight: "100 900",
});
const impacted = localFont({
  src: "/assets/fonts/Impacted.ttf",
  variable: "--impacted",
  weight: "100 900",
});
const imprima = Imprima({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Watch now Deadpool's movies - Cine Nightly",
  description: "Watch Deadpool's triology in our platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${impact.variable} ${impacted.variable} ${imprima.className} text-main-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
