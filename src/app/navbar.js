import Image from "next/image";
import Link from "next/link";
import { About } from "./hero";

export const Navbar = () => {
    return (
      <nav className="flex justify-between py-1 mx-40 items-center ">
        <h1 className="logo text-2xl font-semibold font-sans flex items-center">
        <Image src="/android-chrome-512x512.png" width={80} height={80}/>
          <Link href="#hero">
            JP.me
          </Link>
        </h1>
        <ul className="flex mr-10">
          <li><a href="#about" className="btn btn-ghost text-lg">About</a></li>
          <li><a href="#" className="btn btn-ghost text-lg">Projects</a></li>
          <li><a href="#" className="btn btn-ghost text-lg">Solutions</a></li>
          <li><a href="#" className="btn btn-ghost text-lg">Contact</a></li>
        </ul>
      </nav>
    );
  }