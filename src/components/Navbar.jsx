import { Link } from "react-router-dom";
import logo from "../assets/hamburgerlogo.png";

function Navbar() {
  return (
    <div className="navBar">
      <div className="leftSide">
        <img src={logo} alt="" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
