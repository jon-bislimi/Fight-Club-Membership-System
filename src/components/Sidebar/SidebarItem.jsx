"use client";
import Link from "next/link";

const SidebarItem = ({ icon, title, link, isOpen }) => {
  return (
    <Link href={link}>
      <div className="flex items-center p-2 mb-2 rounded hover:bg-gray-100 cursor-pointer">
        <span className="text-lg">{icon}</span>
        {isOpen && <span className="ml-3">{title}</span>}
      </div>
    </Link>
  );
};

export default SidebarItem;
