





// import React, { useContext, useState } from "react";
// import logo from "../assets/frontend_assets/manya_logo.png";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass, faUser, faBagShopping} from "@fortawesome/free-solid-svg-icons";
// import "../pages/notify.css";


// const Navbar = () => {
//   const [isActive, setIsActive] = useState(false);
//   const {
//     setShowSearch,
//     getCartCount,
//     navigate,
//     token,
//     setToken,
//     setCartItems,
//   } = useContext(ShopContext);

//   const logout = () => {
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   const toggleCart = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className="relative navbar">
//       {/* Main Navbar */}
//       <div className="flex items-center justify-between py-5 px-6 sm:px-10 font-medium">
//         <Link to="/">
//           <img
//             src={logo}
//             className="w-20 h-auto bg-black shadow-md hover:scale-105 transition-transform"
//             alt="Logo"
//           />
//         </Link>

//         {/* All Category Dropdown */}
//         <div
//           className="relative group"
//           onMouseEnter={() => setIsActive(true)}
//           onMouseLeave={() => setIsActive(false)}
//         >
//           <button className="text-sm font-medium py-2 px-4 rounded text-white-700">
//           All Categories
//           </button>
//           <div
//             className={`absolute top-6 left-0 mt-2 bg-white shadow-md rounded w-48  ${
//               isActive ? "block" : "hidden"
//             }`}
//           >
//             <ul className="flex flex-col text-gray-700 hover:text-black ">
//               {[
//                 { path: "/pattu", label: "Pattu" },
//                 { path: "/banarasi-sarees", label: "Banarasi Sarees" },
//                 {path:"/Hand-Loom",label:"Hand Loom"},
//                 {path:"/pettu-badi saree",label:" Pettu badi sarees"},
//                 {path:"/organza-saree",label:"Organza saree"},
//                 { path: "/chanderi-sarees", label: "Chanderi sarees" },
//                 { path: "/kanchi-silk", label: "Kanchi Silk" },
//                 { path: "/semi-pattu", label: "Semi pattu" },
//                 { path: "/fancy ", label: "Fancy" },
//               ].map(({ path, label }) => (
//                 <li key={path} className="px-4 py-2 hover:bg-gray-100">
//                   <NavLink to={path}>{label}</NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden sm:flex gap-10 text-sm text-white-700">
//           {[
//             { path: "/", label: "HOME" },
//             { path: "/Collection", label: "COLLECTION" },
//             { path: "/PureSilkSaree", label: " PURE SILK SAREE" },
//             { path: "/Kurtis", label: "KURTIS" },
//           ].map(({ path, label }) => (
//             <NavLink key={path} to={path} className="flex flex-col items-center gap-1">
//               <p>{label}</p>
//               <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
//             </NavLink>
//           ))}
//         </ul>

//         {/* Icons Section */}
//         <div className="flex items-center gap-4 bg-white search">
//           <FontAwesomeIcon
//             className="w-5 cursor-pointer h-10"
//             icon={faMagnifyingGlass}
//             onClick={() => setShowSearch(true)}
//           />

//           {/* User Dropdown */}
//           <div className="group relative">
//             <FontAwesomeIcon
//               className="h-5 cursor-pointer"
//               icon={faUser}
//               onClick={() => !token && navigate("login")}
//             />

//             {token && (
//               <div className="hidden group-hover:block absolute top-4 right-0 mt-2 bg-slate-100 dropdown-menu text-gray-500 rounded shadow-lg">
//                 <div className="flex flex-col gap-2 w-36 py-3 px-5">
//                   <p className="cursor-pointer hover:text-black" onClick={() => navigate("/profile")}>
//                     My Profile
//                   </p>
//                   <p className="cursor-pointer hover:text-black" onClick={() => navigate("/orders")}>
//                     Orders
//                   </p>
//                   <p className="cursor-pointer hover:text-black" onClick={logout}>
//                     Logout
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div onClick={toggleCart} className="relative bag">
//             <FontAwesomeIcon className="h-5" icon={faBagShopping} />
//             <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
//               {getCartCount}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="sm:hidden flex justify-around bg-black-200 py-2">
//         {[
//           { path: "/", label: "HOME" },
//           { path: "/Collection", label: "COLLECTION" },
//           { path: "/PureSilkSaree", label: " PURE SILK SAREE" },
//           { path: "/Kurtis", label: "KURTIS" },
//         ].map(({ path, label }) => (
//           <NavLink key={path} to={path} className="text-sm font-medium">
//             {label}
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useContext, useState } from "react";
// import logo from "../assets/frontend_assets/manya_logo.png";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
// import "../pages/notify.css";


// const Navbar = () => {
  
//   const [isActive, setIsActive] = useState(false);
//   const [isPattuActive, setIsPattuActive] = useState(false); // State for handling the hover effect of "Pattu"

//   const {
//     setShowSearch,
//     getCartCount,
//     navigate,
//     token,
//     setToken,
//     setCartItems,
//   } = useContext(ShopContext);

//   const logout = () => {
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   const toggleCart = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className="relative navbar">
//       {/* Main Navbar */}
//       <div className="flex items-center justify-between py-5 px-6 sm:px-10 font-medium">
//         <Link to="/">
//           <img
//             src={logo}
//             className="w-20 h-auto bg-black shadow-md hover:scale-105 transition-transform"
//             alt="Logo"
//           />
//         </Link>

//         {/* All Category Dropdown */}
//         <div
//           className="relative group"
//           onMouseEnter={() => setIsActive(true)}
//           onMouseLeave={() => setIsActive(false)}
//         >
//           <button className="text-sm font-medium py-2 px-4 rounded text-white-700 size-15">
//          All CATEGORIES
//           </button>
//           <div
//             className={`absolute top-4 left-0 mt-2 bg-white shadow-md rounded w-48  ${isActive ? "block" : "hidden"
//               }`}
//           >
//             <ul className="flex flex-col text-gray-500  hover:text-black ">
//               {[{ path: "/pattu", label: "Pattu" }].map(({ path, label }) => (
//                 <li
//                   key={path}
//                   className="px-4 py-2 tex-gray-500 hover:text-black  relative"
//                   onMouseEnter={() => setIsPattuActive(true)}
//                   onMouseLeave={() => setIsPattuActive(false)}
//                 >
//                   <NavLink to={path}>{label}</NavLink>
//                   {/* Subcategories for Pattu */}
//                   {isPattuActive && (

//                     <div className="absolute left-48 top-1 mt-2 text-gray-500 hover:text-black bg-white shadow-md rounded w-48">
//                       <ul className="flex flex-col">
//                         <li className="px-4 py-2 text-gray-500 hover:text-black">
//                           <NavLink to="/kanjeevaram">Kanjeevaram</NavLink>
//                         </li>
//                         <li className="px-4 py-2 text-gray-500 hover:text-black">
//                           <NavLink to="/venkatagiri">Venkatagiri</NavLink>
//                         </li>
//                         <li className="px-4 py-2 text-gray-500 hover:text-black">
//                           <NavLink to="/patola">Patola</NavLink>
//                         </li>
//                       </ul>
//                     </div>

//                   )}
//                 </li>
//               ))}

//               {[
//                 { path: "/banarasi-sarees", label: "Banarasi Sarees" },
//                 { path: "/Hand-Loom", label: "Hand Loom" },
//                 { path: "/pettu-badi-saree", label: "Pettu Badi Sarees" },
//                 { path: "/organza-saree", label: "Organza Saree" },
//                 { path: "/chanderi-sarees", label: "Chanderi Sarees" },
//                 { path: "/kanchi-silk", label: "Kanchi Silk" },
//                 { path: "/semi-pattu", label: "Semi Pattu" },
//                 { path: "/fancy", label: "Fancy" },
//               ].map(({ path, label }) => (
//                 <li key={path} className="px-4 py-2 text-gray-500 hover:text-black">
//                   <NavLink to={path}>{label}</NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden sm:flex gap-10 text-sm text-white-700">
//           {[
//             { path: "/", label: "HOME" },
//             { path: "/Collection", label: "COLLECTION" },
//             { path: "/PureSilkSaree", label: "PURE SILK SAREE" },
//             { path: "/Kurtis", label: "KURTIS" },
//           ].map(({ path, label }) => (
//             <NavLink key={path} to={path} className="flex flex-col items-center gap-1">
//               <p>{label}</p>
//               <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
//             </NavLink>
//           ))}
//         </ul>

//         {/* Icons Section */}
//         <div className="flex items-center gap-4 bg-white search">
//           <FontAwesomeIcon
//             className="w-5 cursor-pointer h-10"
//             icon={faMagnifyingGlass}
//             onClick={() => setShowSearch(true)}
//           />
//           <div className="group relative">
//             <FontAwesomeIcon
//               className="h-5 cursor-pointer"
//               icon={faUser}
//               onClick={() => !token && navigate("login")}
//             />
//             {token && (
//               <div className="hidden group-hover:block absolute top-4 right-0 mt-2 bg-slate-100 dropdown-menu text-gray-500 rounded shadow-lg">
//                 <div className="flex flex-col gap-2 w-36 py-3 px-5">
//                   <p className="cursor-pointer hover:text-black" onClick={() => navigate("/profile")}>
//                     My Profile
//                   </p>
//                   <p className="cursor-pointer hover:text-black" onClick={() => navigate("/orders")}>
//                     Orders
//                   </p>
//                   <p className="cursor-pointer hover:text-black" onClick={logout}>
//                     Logout
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div onClick={toggleCart} className="relative bag">
//             <FontAwesomeIcon className="h-5" icon={faBagShopping} />
//             <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
//               {getCartCount}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="sm:hidden flex justify-around bg-black-200 py-2">
//         {[
//           { path: "/", label: "HOME" },
//           { path: "/Collection", label: "COLLECTION" },
//           { path: "/PureSilkSaree", label: "PURE SILK SAREE" },
//           { path: "/Kurtis", label: "KURTIS" },
//         ].map(({ path, label }) => (
//           <NavLink key={path} to={path} className="text-sm font-medium">
//             {label}
//           </NavLink>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from "react";
import logo from "../assets/frontend_assets/manya_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from "../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "../pages/notify.css";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [isActive, setIsActive] = useState(false);
  const [isPattuActive, setIsPattuActive] = useState(false); // State for handling the hover effect of "Pattu"

  const {
    setShowSearch,
    getCartCount,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  const toggleCart = () => {
    navigate("/cart"); // Navigate to cart page when clicked
  };

  const handleUserClick = () => {
    if (token) {
      navigate("/profile"); // Navigate to profile page if logged in
    } else {
      navigate("/login"); // Navigate to login page if not logged in
    }
  };

  return (
    <div className="relative navbar">
      {/* Main Navbar */}
      <div className="flex items-center justify-between py-5 px-6 sm:px-10 font-medium">
        <Link to="/">
          <img
            src={logo}
            className="w-20 h-auto bg-black shadow-md hover:scale-105 transition-transform"
            alt="Logo"
          />
        </Link>

        {/* All Category Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <button className="text-sm font-medium py-2 px-4 rounded text-white-700 size-15">
            All CATEGORIES
          </button>
          <div
            className={`absolute top-5 left-0 mt-2 bg-white shadow-md rounded w-48  ${isActive ? "block" : "hidden"
              }`}
          >
            <ul className="flex flex-col text-gray-500  hover:text-black ">
              {[{ path: "/pattu", label: "Pattu" }].map(({ path, label }) => (
                <li
                  key={path}
                  className="px-4 py-2 tex-gray-500 hover:text-black  relative"
                  onMouseEnter={() => setIsPattuActive(true)}
                  onMouseLeave={() => setIsPattuActive(false)}
                >
                  <NavLink to={path}>{label}</NavLink>
                  {/* Subcategories for Pattu */}
                </li>
              ))}

              {[ 
                { path: "/banarasi-sarees", label: "Banarasi Sarees" },
                { path: "/Hand-Loom", label: "Hand Loom" },
                { path: "/pettu-badi-saree", label: "Pettu Badi Sarees" },
                { path: "/organza-saree", label: "Organza Saree" },
                { path: "/chanderi-sarees", label: "Chanderi Sarees" },
                { path: "/kanchi-silk", label: "Kanchi Silk" },
                { path: "/semi-pattu", label: "Semi Pattu" },
                { path: "/fancy", label: "Fancy" },
              ].map(({ path, label }) => (
                <li key={path} className="px-4 py-2 text-gray-500 hover:text-black">
                  <NavLink to={path}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10 text-sm text-white-700">
          {[{ path: "/", label: "HOME" }, { path: "/Collection", label: "COLLECTION" }, { path: "/PureSilkSaree", label: "PURE SILK SAREE" }, { path: "/Kurtis", label: "KURTIS" }].map(({ path, label }) => (
            <NavLink key={path} to={path} className="flex flex-col items-center gap-1">
              <p>{label}</p>
              <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
            </NavLink>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-4 bg-white search">
          <FontAwesomeIcon
            className="w-5 cursor-pointer h-10"
            icon={faMagnifyingGlass}
            onClick={() => setShowSearch(true)}
          />
          <div className="group relative">
            <FontAwesomeIcon
              className="h-5 cursor-pointer"
              icon={faUser}
              onClick={() => !token && navigate("login")} // Navigate to login or profile on user icon click
            />
            
            {token &&  (
              <div className="hidden group-hover:block absolute top-4 right-0 mt-2 bg-slate-100 dropdown-menu text-gray-500 rounded shadow-lg">
                <div className="flex flex-col gap-2 w-36 py-3 px-5">
                  <p className="cursor-pointer hover:text-black" onClick={() => navigate("/profile")}>
                    My Profile
                  </p>
                  <p className="cursor-pointer hover:text-black" onClick={() => navigate("/orders")}>
                    Orders
                  </p>
                  <p className="cursor-pointer hover:text-black" onClick={logout}>
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <div onClick={toggleCart} className="relative bag">
            <FontAwesomeIcon className="h-5 cursor-pointer" icon={faBagShopping} onClick={toggleCart} />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]">
              {getCartCount}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex justify-around bg-black-200 py-2">
        {[{ path: "/", label: "HOME" }, { path: "/Collection", label: "COLLECTION" }, { path: "/PureSilkSaree", label: "PURE SILK SAREE" }, { path: "/Kurtis", label: "KURTIS" }].map(({ path, label }) => (
          <NavLink key={path} to={path} className="text-sm font-medium">
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
