import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";



const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "NetworkHer InternHub",
  description: "A platform connecting interns with top companies worldwide.",
  keywords: [
    "internship",
    "NetworkHer",
    "job placement",
    "career development",
    "professional growth",
    "networking",
    "mentorship",
    "skill building",
    "resume building",
    "job search",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
