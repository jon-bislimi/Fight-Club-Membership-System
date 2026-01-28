"use client";
import { useState } from "react";
import Link from "next/link";

const SidebarDropdown = ({ isOpen, icon, title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 w-full p-2 rounded hover:bg-gray-100 transition-colors"
      >
        <span className="text-lg">{icon}</span>
        {isOpen && <span className="ml-1 flex-1 text-left">{title}</span>}
        {isOpen && <span>{open ? "▾" : "▸"}</span>}
      </button>

      {open && isOpen && (
        <div className="mt-2 flex justify-center flex-col gap-1">
          {items.map((item, index) =>
            item.type === "link" ? (
              <Link key={index} href={item.href}>
                <div className="text-sm p-1 rounded hover:bg-gray-200 cursor-pointer flex justify-center">
                  {item.label}
                </div>
              </Link>
            ) : (
              <button
                key={index}
                onClick={item.onClick}
                className="text-sm p-1 rounded hover:bg-gray-200 text-blue-600 text-left flex justify-center"
              >
                {item.label}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarDropdown;
