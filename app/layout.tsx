import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Calculix - Free Online Calculators",
    template: "%s | Calculix",
  },
  description:
    "Free online calculators including BMI, Age, Percentage, EMI and Loan calculators. Fast, accurate and easy to use.",

  keywords: [
    "calculator",
    "BMI Calculator",
    "Age Calculator",
    "EMI Calculator",
    "Loan Calculator",
    "Percentage Calculator",
    "online calculator",
    "free calculator",
  ],

  authors: [{ name: "Calculix" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}