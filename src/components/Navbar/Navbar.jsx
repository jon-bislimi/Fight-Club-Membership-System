import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import UserProfile from "../UI/UserProfile";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center bg-white p-4 border-b border-gray-200 shadow-md">
      <button onClick={toggleSidebar}>
        <FaBars size={30} />
      </button>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FaBell
            size={30}
            className="text-[#D4AF37] cursor-pointer transition-all duration-200 hover:scale-110 hover:text-[#F5C542]"
          />
        </div>
        <UserProfile name="Filan Fisteku" />
      </div>
    </header>
  );
};

export default Navbar;
