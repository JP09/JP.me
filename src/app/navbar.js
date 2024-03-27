"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();

  const [navigation] = useState([
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Contact', href: '#' },
  ]);

  return (
    <header className="top-0 z-30 w-full px-4 sm:fixed backdrop-blur bh-zinc-900/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-2 pt-6 sm:h-20 sm:flex-row sm:pt-0">
          <div className="flex items-center">
            <Image src="/android-chrome-512x512.png" width={80} height={80}/>
            <Link href="/" passHref className="text-2xl font-semibold duration-150 text-zinc-100 hover:text-white">
              JP.me
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex items-center">
            <ul className="flex flex-wrap items-center justify-end gap-4">
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} passHref className={`flex items-center px-3 py-2 duration-150 text-sm sm:text-base hover:text-zinc-50 ${router.asPath === item.href ? 'text-zinc-200' : 'text-zinc-400'}`}>
                      {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;