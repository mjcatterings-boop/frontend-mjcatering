// import React from "react";
// import logo from "../assets/logo.png";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="navbar">
//       <div className="navbar-inner">

//         <Link to="/" className="logo">
//           <img src={logo} alt="Brand Logo" className="logo-image" />
//           <div className="logo-text">
           
//             <span className="logo-sub">Catering & Events</span>
//           </div>
//         </Link>

//         <nav className="nav-links">
//           <NavLink to="/" end>Home</NavLink>
//           <NavLink to="/menu">Menu</NavLink>
//           <NavLink to="/locations">Locations</NavLink>
//           <NavLink to="/get-quote">Get Quote</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </nav>

//         <a
//           href="#"
//           className="nav-whatsapp"
//           onClick={(e) => e.preventDefault()}
//         >
//           <span>WhatsApp</span>
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Brand Logo" className="logo-image" />
          <div className="logo-text">
            <span className="logo-sub">Catering & Events</span>
          </div>
        </Link>

        {/* MENU TOGGLE (MOBILE) */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </NavLink>
          <NavLink to="/locations" onClick={() => setMenuOpen(false)}>
            Locations
          </NavLink>
          <NavLink to="/get-quote" onClick={() => setMenuOpen(false)}>
            Get Quote
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>

        {/* WHATSAPP BUTTON */}
       {/* WHATSAPP BUTTON */}
<a
  href="https://wa.me/923445809168?text=Hi%2C%20I%20need%20information%20about%20your%20catering%20services."
  className="nav-whatsapp"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>WhatsApp</span>
</a>

      </div>
    </header>
  );
};

export default Navbar;
