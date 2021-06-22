import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './logo.png';
import './NavBar.css';
import Cookie from "js-cookie";
import axios from "axios";

function NavBar() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const [isLogout,setLogout] = useState(false);

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  //Cart count
  var count = 0;
  for (const item in cartItems) {
    count = parseInt(count) + parseInt(cartItems[item].qty);
  }
  //Cart count end

  //Cookie count
  const cart2 = useSelector(state => state.cart2);
  const { cartItems2 } = cart2;
  var ccount = 0;
  for (const item2 in cartItems2) {
    ccount = parseInt(ccount) + parseInt(cartItems2[item2].qty);
  }
  //Cookie count end

  const logoutHandler = async () => {
    Cookie.remove('userInfo');
    Cookie.remove('cartItems');
    await axios.get(`/api/users/logout`);
    setLogout(true);
  // window.open
  //location.navigate
    
  }

  
  return (

    <div>

      <header className="header">
        <div className="brand">
          <Link to="/">Home</Link>
        </div>

        <div>
          <div className="dropdown">
            <button className="dropbtn">Categories &#9776;</button>
            <div className="dropdown-content">
              <Link to="/">Drone Parts</Link>
              <Link to="/">Drone Kits</Link>
              <Link to="/">Robotic Kits</Link>
              <Link to="/">Sensor Kits</Link>
              <Link to="/">Arduino Compatible Kits</Link>
            </div>
          </div>

        </div>



        <div className="header-links">
          <Link to="/cart">Cart<i className="fa">&#xf07a;</i>

            <span class='badge badge-warning' id='lblCartCount'>
              {
                userInfo ? count : ccount
              } </span>
          </Link>
          {
            userInfo ?
              <span>
                <Link to="/"> {userInfo.name}<i className="fa">&#xf007;</i> </Link>
                <a onClick={logoutHandler} href="/">Logout</a>
              </span>
              :
              <Link to="/signin">Login</Link>
              
          }
        </div>
      </header>



    </div>

  );
}
export default NavBar;

/*
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './logo.png';

function NavBar() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  return (

    <div>
      <div>
        <img className="header__logo" src={logo} alt="logo" />
        <div className="dropdown">
          <button className="dropbtn">Categories &#9776;</button>
          <div className="dropdown-content">
            <Link to="/">Drone Parts</Link>
            <Link to="/">Drone Kits</Link>
            <Link to="/">Robotic Kits</Link>
            <Link to="/">Sensor Kits</Link>
            <Link to="/">Arduino Compatible Kits</Link>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="brand">
          <i class="fa fa-home homeIcon" ></i> <Link to="/">Home</Link>
        </div>

        <div>
        </div>
        <div className="header-links">
          <Link to="/cart">Cart</Link>
          {
            userInfo ?
              <span>
                <Link to="/profile"> {userInfo.name} </Link>
                <Link to="/logout">Logout</Link>
              </span>
              :
              <Link to="/signin">Login</Link>
          }
        </div>
      </header>
    </div>

  );
}
export default NavBar;
*/