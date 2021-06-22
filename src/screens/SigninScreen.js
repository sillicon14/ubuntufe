import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import us from "../userStore";
import "./Register.css";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin); //reads a value from the store state this takes the current state as an argument and returns whatever data we want from it.
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  /*
    find()
    
function find(){
    axios.get("http://localhost:3000/api/users/")
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          console.log(response.data.[i].email,{email})
      }
        console.log(response)
        console.log(response.data.length)});
  } */

  /* let id = 0
axios.post("http://localhost:3000/api/users/signin",{email: email , password: password}).then(response => 
  {
    console.log(response)
    id = response.data._id
    //console.log(id) 
  }) */

  //let obj = arr.find(o => o.name === 'string 1');

  /* var i=1;
    let obj = arr.find(o => o.name === 'string 1'); */

  /* const options = {
      "key":  __DEV__ ? 'rzp_test_8mtVT1x94JsEtr' : 'PRODUCTION_KEY', // Enter the Key ID generated from the Dashboard
      "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": data.currency,
      "name": "Silicon14",
      "description": "Thank you for making your payment",
      "image": "http://localhost:5000/symbol.png",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (res){
          alert(res.razorpay_payment_id);
          alert(res.razorpay_order_id);
          alert(res.razorpay_signature)  */
  /* console.log(res)
          console.log(id)
        axios.put(`http://localhost:3000/api/orders/${id}`, {id: res.razorpay_order_id})
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          }) */
  //axios.post(`http://localhost:3000/api/orders/:userId/`, {})

  /* },
      "prefill": {
         name,
      },
  };
  const paymentObject = new window.Razorpay(options)
		paymentObject.open()
  }  */

  useEffect(() => {
    //If user signined then redirect to checkout page
    if (userInfo) {
      props.history.push("/");
      //displayRazorPay();
      //props.history.push("/checkout");
      //redirectUser();
    }
    return () => {};
  }, [userInfo]); //Only re-run the effect if userInfo changes

  const submitHandler = (e) => {
    e.preventDefault(); //Prevent a submit button from submitting a form
    dispatch(signin(email, password)); //dispatch an action to trigger a state change(sign-in).
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3 className="h3-color">
              Login<i className="fa">&#xf007;</i>
            </h3>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
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
            <button type="submit" className="button primary">
              Login
            </button>
          </li>
          <li>New to Sillicon14?</li>
          <li>
            <Link to="/register" className="button secondary text-center">
              Create your Sillicon14 account
            </Link>
          </li>
          <li>
            <p style={{ color: "red" }}>{us.getsignMes()}</p>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default SigninScreen;
