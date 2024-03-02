import React from "react";

import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

// Small Screen Navbar

function NavSm() {
  return (
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">It All Starts Here!!</h3>
        <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
          Delhi NCR<BiChevronDown />
        </span>
      </div>
      <div className="w-8 h-8">
        <BiSearch className="w-full h-full" />
      </div>
    </div>
  );
}

// Medium Screen Navbar

function NavMd() {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, plays, sports and activities"
      />
    </div>
  );
}

// Large Screen Navbar

function NavLg() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
        Delhi NCR <BiChevronDown />
      </span>
      <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
        Sign In
      </button>
      <div className="w-8 h-8 text-white">
        <BiMenu className="w-full h-full" />
      </div>
    </div>
  );
}

// Main Navbar Component

const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Small Screen Navbar */}
      <div className="md:hidden">
        <NavSm />
      </div>

      {/* Medium Screen Navbar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      {/* Large Screen Navbar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
