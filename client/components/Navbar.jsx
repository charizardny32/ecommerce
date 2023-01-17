import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/APU_logo.png";
import cart_icon from "../assets/cart_icon.png";
import CartCounter from "./CartCounter";

const Navbar = ({ total }) => {
  return (
    <div
      className="navBar container flex flex-row justify-between items-center mx-auto"
    >
    <div>
      <Link to="/">
        <img src={logo} />
      </Link>
      
    </div>
    <div>
      <Link to="/checkout">
      
      {/* <button 
          type="button"
          // onClick={redirect to product page}
          class="inline-block px-6 py-2.5 mb-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Checkout
          </button> */}
        <img src={cart_icon} />
        <CartCounter total={total} />
      </Link>

    </div>  
    </div>
  );
};

export default Navbar;
