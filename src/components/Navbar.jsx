import React from "react"
import { Link } from "react-router-dom"
import "./CSS/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-cont">
        <div className="navbar">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/new" className="nav-link">
            NEW
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
