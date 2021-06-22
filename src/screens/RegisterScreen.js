import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import us from "../userStore";
import "./Register.css";
import AfterRegister from "./AfterRegister";

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Vpassword, setVpassword] = useState("");
  const [isAdmin, setAdmin] = useState(true);
  //const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector((state) => state.userRegister); //reads a value from the store state this takes the current state as an argument and returns whatever data we want from it.
  const { userInfo } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/afterRegister"); //If user registred then redirect to verification page
    }
    return () => {};
  }, [userInfo]); //Only re-run the effect if userInfo changes

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, Vpassword, isAdmin)); //dispatch an action to trigger a state change(register).
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3 className="h3-color">
              Sign-up<i className="fa">&#xf007;</i>
            </h3>
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="Vpassword">Re-Enter the Password</label>
            <input
              type="password"
              id="Vpassword"
              name="Vpassword"
              onChange={(e) => setVpassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit" className="button primary">
              Sign-up
            </button>
          </li>
          <li>
            Already have an account?
            <Link to="/signin" className="button secondary text-center">
              Login
            </Link>
          </li>
          <li>
            <p style={{ color: "red" }}>{us.getregMes()}</p>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default RegisterScreen;
