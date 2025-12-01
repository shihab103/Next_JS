'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "About", href: "/about" },
    { name: "Address", href: "/about/address" },
  ];

  const linkItems = links.map((item) => (
    <li key={item.href} className="h-full">
      <Link
        href={item.href}
        className="flex items-center px-4 h-full hover:bg-pink-500 hover:text-white transition-colors"
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div className="navbar bg-base-100 shadow-sm h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {linkItems}
          </ul>
        </div>
        <a className="font-bold text-xl">SRS</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 h-full">{linkItems}</ul>
      </div>

      <div className="navbar-end">
        <a onClick={()=>router.push('/login')} className="btn">Login</a>
      </div>
    </div>
  );
}
