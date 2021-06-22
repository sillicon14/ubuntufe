import { Link } from 'react-router-dom';
import React from 'react';
import './ThankYou.css';

export default function ThankYou(props) {

    return(
     <div>
<form>
  <div className="container1">
  <i class="fa fa-check-circle pass"> </i>
    <h1>Thank You!!</h1>
    <hr></hr>
    <p style={{fontSize: "16px" }}>Your account has been successfully registered.</p>
  </div>  
</form>
</div>   
    )
}
