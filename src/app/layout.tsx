import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BuildLabs Internship",
  description: "A platform connecting interns with top companies worldwide.",
  keywords: [
    "internship",
    "BuildLabs",
    "job placement",
    "career development",
    "professional growth",
    "BuildLabs internship",
    "mentorship",
    "skill building",
    "resume building",
    "job search",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Toaster
          richColors
          position="top-right"
          toastOptions={{
            duration: 4000,
            classNames: {
              success: "bg-green-600 text-white",
              error: "bg-red-100 text-white",
            },
          }}
        />
      </body>
    </html>
  );
}
