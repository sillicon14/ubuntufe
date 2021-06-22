import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiPackage } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { CgLogOut } from "react-icons/cg";
import Cookie from "js-cookie";
import axios from "axios";
const Nav1 = (props) => {
  const [showNav, setNav] = useState(false);
  const [isLogout, setLogout] = useState(false);
  const logoutHandler = async () => {
    Cookie.remove("userInfo");
    Cookie.remove("cartItems");
    await axios.get(`/api/users/logout`);
    setLogout(true);
    // window.open
    //location.navigate
  };
  return (
    <div>
      <header className="admin-header">
        <GiHamburgerMenu onClick={() => setNav(!showNav)} />
      </header>
      <div className={showNav ? "admin-sidenav active" : "admin-sidenav"}>
        <ul className="admin-ul">
          <li className="admin-li">
            <Link to="/" onClick={() => setNav(false)}>
              <RiShoppingBag2Fill /> New Orders
            </Link>
          </li>
          <li className="admin-li">
            <Link to="/packed" onClick={() => setNav(false)}>
              <BiPackage /> Packed Orders
            </Link>
          </li>
          <li className="admin-li">
            <Link to="/Delvered" onClick={() => setNav(false)}>
              <FaShippingFast />
              Delivered Orders
            </Link>
          </li>
          <li className="admin-li">
            <Link to="/cancelledOrder" onClick={() => setNav(false)}>
              <ImCancelCircle />
              Cancelled Order
            </Link>
          </li>
          <li className="admin-li">
            <Link to="/add" onClick={() => setNav(false)}>
              <AiFillFolderAdd />
              Add items
            </Link>
          </li>
          <li className="admin-li">
            <a onClick={logoutHandler} href="/">
              <CgLogOut />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav1;
