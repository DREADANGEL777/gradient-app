import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./CSS/Navbar.css"

const Navbar = () => {
  const location = useLocation()

  return (
    <div className="navbar-wrapper">
      <div className="falling-shapes">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="ball" key={`ball-${i}`}></div>
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="square" key={`square-${i}`}></div>
        ))}
      </div>

      <div className="navbar-cont">
        <div className="navbar">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            HOME
          </Link>
          <Link to="/new" className={`nav-link ${location.pathname === "/new" ? "active" : ""}`}>
            NEW
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
