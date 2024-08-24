import React from "react";
import NavLink from "../nav-link";

export default function Navbar() {
  return (
    <div className="flex backdrop-blur bg-brand-beige/80 md:bg-brand-beige/80 sticky top-0 z-10 items-center mb-6  border-b border-brand-green/20 justify-between">
      {/* MENU */}
      <button className="transition-colors duration-200 p-4 hover:bg-brand-green hover:text-brand-beige border-r border-brand-green/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      {/* NAV */}
      <div className="flex items-center gap-8 ">
        <NavLink href="/" className="">
          Home
        </NavLink>
        <NavLink href="/collections" className="">
          Collections
        </NavLink>
        <span className="text-3xl px-4 italic">speedy shop</span>
        <NavLink href="/collections/summer" className="">
          Summer
        </NavLink>
        <NavLink href="/sale" className="">
          Sale
        </NavLink>
      </div>
      {/* CART */}
      <button className="transition-colors duration-200 p-4 border-l hover:bg-brand-green hover:text-brand-beige border-brand-green/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
