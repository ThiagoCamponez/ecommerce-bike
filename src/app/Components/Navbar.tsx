import Link from "next/link";
function Navbar() {
    return(
        <nav className="fixed top-0 w-full max-w-[1440px] h-[80px] flex items-center px-8 justify-between z-50 bg-white text-gray-300 mx-auto">
        <Link href="/" className="h-full flex items-center">
            <img src="/e-commerce-bike.png" alt="E-commerce Bike Logo" className="h-full object-contain" />
        </Link>
        <div className="relative">
        <input type="text" placeholder="Procurando por algo específico?" className="w-[352px] h-[42px] px-3 rounded-[8px] bg-[#F3F5F6] border border-gray-300 focus:outline-none"/>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1110.64-10.64 7.5 7.5 0 01-10.64 10.64z" />
          </svg>
        </div>
      </div>
        </nav>
    )
}

export default Navbar;