import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import UserProfile from "../UI/UserProfile";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center bg-white p-2 sm:p-4 md:p-6 border-b border-gray-200 shadow-md">
      <button
        onClick={toggleSidebar}
        className="hover:bg-gray-100 p-2 rounded-lg transition"
      >
        <FaBars size={20} className="sm:w-6 sm:h-6" />
      </button>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative">
          <FaBell
            size={20}
            className="sm:w-6 sm:h-6 text-[#D4AF37] cursor-pointer transition-all duration-200 hover:scale-110 hover:text-[#F5C542]"
          />
        </div>
        <UserProfile name="Filan Fisteku" />
      </div>
    </header>
  );
};

export default Navbar;
