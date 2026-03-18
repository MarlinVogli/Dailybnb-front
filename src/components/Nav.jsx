import Img from '/Users/marlinvogli/Desktop/React JS/dailybnb/FrontEnd/src/assets/Staycation copy.svg';
import "./Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navigation() {
  const [isResponsive, setIsResponsive] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  const handleLogout = () => {
    logout();
    setIsResponsive(false);
  };

  return (
    <div className={`topnav ${isResponsive ? "responsive" : ""}`}>

      <div className="left-side">
        <img src={Img} alt="Logo" height="80" width="80" />
        <Link to="/"><span>STAYcation</span></Link>
      </div>

      <div className="center-side">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/guides">Guides</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="right-side">
        <Link to="/list">List Property <i className="bi bi-house"></i></Link>

        {isAuthenticated ? (
          
          <button className="icon-btn" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i>
          </button>
        ) : (
          
          <Link to="/login" className="profile-link">
            <i className="bi bi-person-badge-fill"></i>
          </Link>
        )}

        <button className="icon" onClick={toggleMenu}>&#9776;</button>
      </div>

    </div>
  );
}

export default Navigation;