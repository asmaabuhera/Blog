import Link from "next/link";
import Logo from "./logo";

const NavBar = () => {
  return (
  <nav className="flex items-center justify-between px-40 max-md:px-20 max-sm:px-7 w-full h-16 border-b-2">
    <Logo/>
    <ul className="flex flex-wrap justify-center font-bold text-xl max-md:text-base">
      <li><Link href="/" className=" px-4 max-sm:px-1" >Home</Link></li>
      <li><Link href="/about" className=" ml-2 px-4 max-sm:px-1">About Us</Link></li>
      <li><Link href="/blogs" className=" ml-2 px-4 max-sm:px-1">Blogs</Link></li>
    </ul>
  </nav>
  );
};

export default NavBar;
