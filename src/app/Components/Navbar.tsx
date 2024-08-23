import Link from "next/link";
import { SearchIcon } from "./search-icon";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full max-w-[1440px] h-[80px] flex items-center px-8 justify-between z-50 bg-white text-gray-300 mx-auto">
      <Link href="/" className="h-full flex items-center">
        <img src="/e-commerce-bike.png" alt="E-commerce Bike Logo" className="h-full object-contain" />
      </Link>
      <div className="relative">
        <input type="text" placeholder="Procurando por algo específico?" className="w-[352px] h-[42px] pl-3 pr-3 rounded-[8px] bg-[#F3F5F6] border border-gray-300 focus:outline-none"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          {SearchIcon()}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
