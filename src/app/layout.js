import "./globals.css";

import { Footer } from "./footer";
import Navigation from "./navbar";
import { About, Hero, Skills } from "./hero";
import React from "react";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata = {
  title: "JP.me",
  description: "Portfolio Website for JP",
  authors: [{name: "JP", url:"https://jp.me", email: "jay199610@gmail.com"}],
  creator: 'Jay P',
  publisher: 'Jay P',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png?v=4']
  }
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Footer />
      </body>
    </html>
  );
}
