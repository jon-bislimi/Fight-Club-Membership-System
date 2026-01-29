"use client";
import { useState } from "react";
import Link from "next/link";

const SidebarDropdown = ({ isOpen, icon, title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Buttoni kryesor */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center ${isOpen ? "gap-3 justify-start" : "justify-center gap-0"} w-full p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-gray-800 text-base sm:text-lg`}
      >
        <span className="text-xl">{icon}</span>
        {isOpen && <span className="flex-1 text-left">{title}</span>}
        {isOpen && (
          <span className="text-lg transition-transform duration-300">
            {open ? "▾" : "▸"}
          </span>
        )}
      </button>

      {/* Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open && isOpen ? "max-h-96 mt-2" : "max-h-0 mt-0"
        } flex flex-col gap-1`}
      >
        {items.map((item, index) =>
          item.type === "link" ? (
            <Link key={index} href={item.href}>
              <div className="text-sm sm:text-base p-2 rounded-lg hover:bg-gray-200 cursor-pointer flex items-center justify-center transition-colors duration-200">
                {item.label}
              </div>
            </Link>
          ) : (
            <button
              key={index}
              onClick={item.onClick}
              className="text-sm sm:text-base p-2 rounded-lg hover:bg-gray-200 text-blue-600 flex items-center justify-center transition-colors duration-200"
            >
              {item.label}
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default SidebarDropdown;
