import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/APU_logo.png";
import cart_icon from "../assets/cart_icon.png";
import cartCounter from "./cartCounter";

const Navbar = ({ count }) => {
  return (
    <div
      className="navBar"
      class="container flex flex-wrap justify-between items-center mx-auto"
    >
      <img src={logo} />
      <Link to="/checkout">
        <img src={cart_icon} />
        <cartCounter count={count} />
        {count}
      </Link>
    </div>
  );
};

export default Navbar;
