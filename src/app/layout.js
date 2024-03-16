import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


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
        <Footer />
      </body>
    </html>
  );
}
const Navbar = () => {
  return (
    <nav className="flex justify-between py-1">
      <h1 className="logo px-5 text-2xl font-semibold font-sans">
        <Link href="/">
          JP.me
        </Link>
      </h1>
      <ul>
        <li><a href="#" className="btn-circle mr-20 bg-slate-600 text-lg">Resume</a></li>
      </ul>
    </nav>
  );
}

const Footer = () => {
  return (
    <>
      <hr className="mx-40 px-10"/>
      <div className="footer-container justify-between flex mt-5">
        <p className="ml-60 text-xs">
          © {new Date().getFullYear()} JP.me
        </p>
        <div className="social-icons flex mr-60">
          <a
            href="https://twitter.com/nemesis_jay"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            <FontAwesomeIcon icon={faTwitter} className="size-8"/>
          </a>
          <a
            href="https://github.com/JP09"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            <FontAwesomeIcon icon={faGithub} className="size-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/jay-patel-5374a416b/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            <FontAwesomeIcon icon={faLinkedin} className="size-8" />
          </a>
          <a
            href="https://www.instagram.com/jaylo_lambo"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            <FontAwesomeIcon icon={faInstagram} className="size-8" />
          </a>
        </div>
      </div>
    </>
  );
}