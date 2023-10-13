import React from "react";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import SearchBar from "./searchBar";
import Link from "next/link";

// const Navbar = () => {
//   return (
//     // <div className="flex">
//     //   <Image src={logo} alt="logo of dev" height="90" width="90" className="px-1"/>
//     //   <div className="flex justify-end px-12 py-4 items-center ">
//     //     <ul className=" list-none flex justify-end">
//     //       <li className="px-3">HOME</li>
//     //       <li className="px-3">ABOUT US</li>
//     //       <li className="px-3">Contact US</li>
//     //     </ul>
//     //   </div>
//     // </div>
//     <>
//       <div className="flex relative">
//         <Image
//           src={logo}
//           alt="logo of dev"
//           height="90"
//           width="90"
//           className="absolute top-0 left-0"
//         />
//       </div>
//       <div className="flex justify-center py-9 items-center ">
//         <ul className=" list-none flex">
//           <li className="px-3">
//             <Link href="/">
//               HOME
//             </Link>
//           </li>
//           <li className="px-3">
//             <Link href="/about">
//               ABOUT US
//             </Link>
//           </li>
//           <li className="px-3">
//             <Link href="/contact">
//               Contact US
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="flex justify-end absolute top-9 right-3">
//         <SearchBar />
//       </div>
//     </>
//   );
// };

const Navbar = () => {
  return (
    <>
      <div className="flex lg:relative sm:items-center sm:justify-center">
        <Image
          src={logo}
          alt="logo of dev"
          height="90"
          width="90"
          className="lg:absolute lg:top-0 lg:left-0 sm:relative"
        />
      </div>
      <p className="md:hidden sm:text-xl sm:font-medium sm:flex sm:justify-center ">where all comes together</p>
      <div className="flex lg:justify-center pt-9 items-center sm:flex-col">
        <ul className=" list-none flex sm:flex-col sm:justify-stretch lg:flex-row">
          <li className="px-3 sm:flex sm:justify-center">
            <Link href="/">HOME</Link>
          </li>
          <li className="px-3 sm:flex sm:justify-center">
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className="px-3 sm:flex sm:justify-center">
            <Link href="/contact">Contact US</Link>
          </li>
          <li className="px-3 sm:flex sm:justify-center">
            <Link href="/">Portfolios</Link>
          </li>
          <li className="px-3 sm:flex sm:justify-center">
            <Link href="/">Refrences</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end absolute top-9 right-3 lg:absolute lg:top-9 lg:right-0 sm:relative sm:top-3 sm:right-0 sm:justify-center ">
        <SearchBar />
      </div>
    </>
  );
};
export default Navbar;
