import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-gray-800">Job Tracker</h1>

      {/* Search Bar */}
      <div className="relative w-1/3 hidden md:block">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <p className="text-sm text-gray-700 font-medium">Hi, Devanshu 👋</p>
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border border-gray-200"
        />
      </div>
    </header>
  );
};

export default Header;
