import type { Metadata } from "next";
import { cereal } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  description: "Entire serviced apartment in Candolim, India",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cereal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}