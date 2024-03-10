import { Link } from "react-router-dom";
import { SVG_D } from "../utils/constants";

const Header = () => {
    
    return (
        <div className="header">
            <svg className="logo" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019"><path fillRule="evenodd" clipRule="evenodd" d={SVG_D} fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stopColor="#FF993A"></stop><stop offset="1" stopColor="#F15700"></stop></linearGradient></defs></svg>
            <div className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/">Home </Link></li>
                    <li className="navbar-item"><Link to="/about">About Us</Link></li>
                    <li className="navbar-item"><Link to="/contact">Contact Us</Link></li>
                    <li className="navbar-item">Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;