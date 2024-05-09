"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isVisibled, setIsVisibled] = useState(false);
  return (
    <header className="bg-white sticky z-50 top-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="https://translate.tomyo.io" className="-m-1.5 p-1.5">
            <span className="sr-only">TomYo translate</span>
            <img className="h-8 w-auto" src="https://www.tomyo.mn/wp-content/uploads/2023/10/TOMYO-LOGO-H.png" alt="TomYo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setIsVisibled(!isVisibled)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="https://translate.tomyo.io" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
          <Link href="/showcase" className="text-sm font-semibold leading-6 text-gray-900">Showcase</Link>
          <a href="https://api.translate.tomyo.io/docs" className="text-sm font-semibold leading-6 text-gray-900">API Docs</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#"  className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> */}
          <a href="https://github.com/T0mY0/translate" className="text-sm font-semibold leading-6 text-gray-900"><Image src={`/github.svg`} width={24} height={24} alt="Github" /></a>
        </div>
      </nav>
      {isVisibled && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 absolute bg-white w-full">
            <Link href="/"
              className="leading-6 text-gray-900 px-3 py-2 text-base font-medium block"
            >
              Home
            </Link>
            <Link href="/showcase" className="leading-6 text-gray-900 px-3 py-2 text-base font-medium block">Showcase</Link>
            <a href="https://api.translate.tomyo.io/docs" className="leading-6 text-gray-900 px-3 py-2 text-base font-medium block">API Docs</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;