import "./globals.css";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { About, Hero, Skills } from "./hero";

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
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Footer />
      </body>
    </html>
  );
}
