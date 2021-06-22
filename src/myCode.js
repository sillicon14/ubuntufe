import React, { useEffect, useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AfterRegister from "./screens/AfterRegister";
import ThankYou from "./screens/ThankYou";
import Footer from "./footer/footer";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import NavBar from "./screens/NavBar";
import us from "./userStore";
import Admin from "./adminCode/Admin";
import { set } from "js-cookie";
import { useSelector } from "react-redux";

const UserInterface = () => {
  const [isAdmin, setAdmin] = useState();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  useEffect(() => {
    if (userInfo) setAdmin(userInfo.isAdmin);
  });

  return (
    <div>
      {console.log(isAdmin)}
      {isAdmin && <Admin />}
      {!isAdmin && (
        <div className="grid-container">
          <NavBar />

          <main className="main">
            <div className="content">
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/afterRegister" component={AfterRegister} />
              <Route path="/thankYou" component={ThankYou} />
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/" exact={true} component={HomeScreen} />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};
export default UserInterface;
