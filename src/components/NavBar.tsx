"use client";
import NavLink from "./NavLink";
import SideBar from "./SideBar";
import { useState } from "react";
import { navlinks } from "@/config/navConfig";
import logo from "../../public/logo.svg";

// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavBar = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    state: boolean
  ) => {
    setIsOpen(state);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-black ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="text-white text-3xl font-semibold">
          <Image src={logo} alt="LOGO" width={50} height={50} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isOpen ? (
            <button
              onClick={(e) => handleMobileNavBar(e, true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={(e) => handleMobileNavBar(e, false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navlinks.map((nav, index) => (
              <NavLink name={nav.name} path={nav.path} key={index} />
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? <SideBar handleClose={() => setIsOpen(false)} /> : null}
    </nav>
  );
};

export default NavBar;
