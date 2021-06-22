import { Link } from 'react-router-dom';
import React from 'react';
import './AfterRegister.css';

export default function AfterRegister(props) {

    return(
     <div>
<form>
  <div className="container1">
    <h2 style={{fontSize: "25px",color: "green" }}> 
     A verification link has been sent to your email account.
    </h2>
    <hr></hr>
    <p style={{fontSize: "16px" }}>Please click on the link that has just been sent to your email account to verify your email and complete the registration process.</p>
  </div>  
</form>
 <div className="back-to-result">
 <Link to="/">Back to Home</Link>
</div>
</div>   
    )
}
