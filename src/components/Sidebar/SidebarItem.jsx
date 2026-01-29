"use client";
import Link from "next/link";

const SidebarItem = ({ icon, title, link, isOpen }) => {
  return (
    <Link href={link}>
      <div
        className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium text-gray-800 text-base sm:text-lg ${
          isOpen ? "justify-start gap-3" : "justify-center"
        }`}
      >
        <span className="text-lg flex-shrink-0">{icon}</span>
        {isOpen && <span className="ml-3 flex-1 text-left">{title}</span>}
      </div>
    </Link>
  );
};

export default SidebarItem;
