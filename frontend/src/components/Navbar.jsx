// import React from 'react'
// import { NavLink} from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <div>
//          <nav className="navbar navbar-expand-lg sticky-top">
//         <div className="container-fluid ">
//           <button className="navbar-toggler bg-primary text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="container-fluid">
//            <NavLink>
//            <img src="./asserts/Screenshot (4).png" alt="" width="35" height="25" className="d-inline-block align-text-top"/>SustainTech Builders
//             </NavLink>  {/* <a className="navbar-brand" href="#"> */}
             
           
//           </div>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item navHome">
//                   <NavLink className="nav-link" aria-current="page" to="/">Home </NavLink> {/* <a className="nav-link" aria-current="page" href="#">Home</a> */}
//               </li>
//               <li className="nav-item navHome">
//               <NavLink className="nav-link" aria-current="page" to="/services">Services </NavLink>  {/* <a className="nav-link" href="#our">Services</a> */}
//               </li>
//               <li className="nav-item navHome">
//               <NavLink className="nav-link" aria-current="page" to="/about">About </NavLink>   {/* <a className="nav-link" href="#about">About</a> */}
//               </li>
//               <li className="nav-item navHome">
//               <NavLink className="nav-link" aria-current="page" to="/projects">Projects </NavLink>    {/* <a className="nav-link" href="#projects">Projects</a> */}
//               </li>
//               <li className="nav-item navHome">
//               <NavLink className="nav-link" aria-current="page" to="/clients">Clients </NavLink>    {/* <a className="nav-link" href="#client">Clients</a> */}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-primary text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand" to="/">
            <img
              src="Screenshot (4).png"
              alt=""
              width="35"
              height="25"
              className="d-inline-block align-text-top"
            />
            SustainTech Builders
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item navHome">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item navHome">
              <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item navHome">
              <NavLink className="nav-link" aria-current="page" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item navHome">
                <NavLink className="nav-link" aria-current="page" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item navHome">
                <NavLink className="nav-link" aria-current="page" to="/clients">
                  Clients
                </NavLink>
              </li>
              <li className="nav-item navHome">
                <NavLink className="nav-link" aria-current="page" to="/profile">
                  profile
                </NavLink>
              </li>
              <li className="nav-item navHome">
                <NavLink className="nav-link" aria-current="page" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
