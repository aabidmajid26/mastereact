

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { SVG_D } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const isOnline = useOnlineStatus();
    const cartItems = useSelector((state) => state.cart.items)

    
    return (
        <div className="flex justify-between items-center bg-[#232323] text-white pt-3 pl-3 mb-10 mt-2 shadow-[#202020] shadow-lg sticky top-0">
            <div className="">
                <svg className="w-9" viewBox="0 0 559 825" fill="#fc8019"><path fillRule="evenodd" clipRule="evenodd" d={SVG_D} fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stopColor="#FF993A"></stop><stop offset="1" stopColor="#F15700"></stop></linearGradient></defs></svg>
            </div>
            <div className="">
                <ul className="flex justify-evenly items-center">
                    <li className=" text-sm  px-8 cursor-pointer"><strong>Online Status:</strong> {(isOnline ? "✅" : "🔴")}</li>
                    <li className=" text-sm  px-8  "><Link to="/">Home </Link></li>
                    <li className=" text-sm  px-8  "><Link to="/about">About Us</Link></li>
                    <li className=" text-sm  px-8  "><Link to="/contact">Contact Us</Link></li>
                    <li className=" text-sm  px-8  "><Link to="/cart"> Cart - <strong>({cartItems.length + " items"})</strong> </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;