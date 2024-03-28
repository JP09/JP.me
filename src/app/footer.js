import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
      <>
        <hr className="mx-40 px-10"/>
        <div className="footer-container justify-between flex mt-5" id="footer">
          <p className="ml-60 text-xs">
            © {new Date().getFullYear()} JP.me
          </p>
          <div className="social-icons flex mr-80">
            <Link
              href="https://twitter.com/nemesis_jay"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1"
            >
              <FontAwesomeIcon icon={faXTwitter} className="size-8"/>
            </Link>
            <Link
              href="https://github.com/JP09"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1"
            >
              <FontAwesomeIcon icon={faGithub} className="size-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jay-patel-5374a416b/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1"
            >
              <FontAwesomeIcon icon={faLinkedin} className="size-8" />
            </Link>
            <Link
              href="https://www.instagram.com/jaylo_lambo"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1"
            >
              <FontAwesomeIcon icon={faInstagram} className="size-8" />
            </Link>
          </div>
        </div>
      </>
    );
  }