import { useState } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

export default function UserProfile({ name }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full p-2 gap-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
      >
        <FaUserCircle size={30} className="text-gray-700" />
        <span className="flex-1 text-gray-800 font-medium">{name}</span>
        <FaChevronDown
          size={16}
          className={`text-gray-600 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
                Edit Profile
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
