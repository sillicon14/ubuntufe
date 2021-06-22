import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, getCartItems,updateCart } from '../actions/cartActions';
import './Cart.css';
import Axios from "axios";
import Rating from './Rating';

function CartScreen(props) {

    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector(state => state.cart);
    const { cartItems, isCartItemsLOaded } = cart;

    const cart2 = useSelector(state => state.cart2);
    const { cartItems2 } = cart2;

    if (userInfo) {

       
        // const [ttqty,setTtqty] = useState(0);
        //Total calculation
        var total = 0, tqty = 0;
        for (const item in cartItems) {
            total = total + cartItems[item].price * cartItems[item].qty;
            tqty = parseInt(tqty) + parseInt(cartItems[item].qty);
        }
        console.log(total);
        //Total calculation end
       
        if (!isCartItemsLOaded) {
            dispatch(getCartItems()); //If CartItems are not LOaded then get the cartitems.
        }

        const removeFromCartHandler = (productId,itemId) => {
            if(itemId){
           // console.log("removeFromCartHandler",productId);
            dispatch(removeFromCart(itemId)); //dispatch an action to trigger a state change(Remove item from cart).
            //popup
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
            //popup-end
            }
            else{
                Axios.get("/api/products/" + productId).then(response => {
                    dispatch(removeFromCart(response._id));
                });
                
            }
            console.log("removeFromCartHandler",productId);
        }

        const updateCartHandler = (updateId,updateQty) => {
            console.log("updateCartHandler id",updateId);
            console.log("updateCartHandler qty",updateQty);
            dispatch(updateCart(updateId,updateQty));
        }
       
        const checkoutHandler = () => {
            props.history.push("/checkout");
        }

        return <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div style={{fontSize: "18px" }}>
                            Price
                        </div>
                    </li>

                    {
                        cartItems.length === 0 ?
                            <div>
                                Cart is empty
                            </div>
                            :
                            cartItems.map(item =>
                                <li>

                                    <div className="cart-image">
                                        <img src={item.image} alt="product" />
                                    </div>
                                    <div className="cart-name">
                                        <div>
                                            <Link to={"/product/" + item.product}>
                                                <b>{item.name}</b>
                                            </Link>
                                        </div>
                                        <div>
                                            <Rating
                                                rating={item.rating}
                                                numReviews={item.numReviews}>
                                            </Rating>
                                        </div>
                                        <div>
                                        ₹{item.price}
                                        </div>
                                        <div>
                                            {item.countInStock > 5 ?
                                                <p style={{ color: "green", fontSize: "15px" }}>In stock</p> :
                                                <p style={{ color: "red", fontSize: "15px" }}>Hurry!! Few left.</p>
                                            }
                                        </div>
                                        <div>
                                            Qty:
                                            <select value={item.qty} onChange={(e) => updateCartHandler(item._id, e.target.value)}>
                                                {[...Array(item.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>
                                            <div id="snackbar">Deleted from cart.</div>
                                            <button type="button" className="del-but" onClick={() => removeFromCartHandler(item.product,item._id)} >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        ₹{item.price * item.qty}
                                    </div>

                                </li>

                            )
                    }
                    <div className="cart-Subtotal">
                        <p>
                            Subtotal ({tqty} items)
                            :
                            <b>₹{total}</b>
                        </p>
                    </div>
                </ul>
            </div>

            <div className="cart-action">

                <h3>

                    Subtotal ({tqty} items)
                    :
                    <b>₹{total}</b>

                </h3>
                <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
        //reduce((previousScore, currentScore, index)=>previousScore+currentScore, 0);
    }
    /* inside cart action
      <div className="cart-action-Free"> 
              {
                    total >= 500 ?
                    <i class="fa fa-check-circle">Your order is eligible for FREE Delivery.</i> :
                    cartItems.length > 0 && <p> FREE Delivery on orders over ₹500.</p> 
                }
                </div>*/

    if (!userInfo) {
       
        //Total calculation
        var total = 0, tqty = 0;
        for (const item2 in cartItems2) {
            total = total + cartItems2[item2].price * cartItems2[item2].qty;
            tqty = parseInt(tqty) + parseInt(cartItems2[item2].qty);
        }
        console.log(total);
        //Total calculation end

        const removeFromCartHandler = (productId2) => {
            dispatch(removeFromCart(productId2)); //dispatch an action to trigger a state change(Remove item from cart).
            //popup
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
            //popup-end
        }
      
        const checkoutHandler = () => {
            props.history.push("/checkout");
        }

        return <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div style={{fontSize: "18px" }}>
                            Price
                        </div>
                    </li>

                    {
                        cartItems2.length === 0 ?
                            <div>
                                Cart is empty
                            </div>
                            :
                            cartItems2.map(item2 =>
                                <li>

                                    <div className="cart-image">
                                        <img src={item2.image} alt="product" />
                                    </div>
                                    <div className="cart-name">
                                        <div>
                                            <Link to={"/product/" + item2.product}>
                                                <b>{item2.name}</b>
                                            </Link>
                                        </div>
                                        <div>
                                            <Rating
                                                rating={item2.rating}
                                                numReviews={item2.numReviews}>
                                            </Rating>
                                        </div>
                                        <div>
                                        ₹{item2.price}
                                        </div>
                                        <div>
                                            {item2.countInStock > 5 ?
                                                <p style={{ color: "green", fontSize: "15px" }}>In stock</p> :
                                                <p style={{ color: "red", fontSize: "15px" }}>Hurry!! Few left.</p>
                                            }
                                        </div>
                                        <div>
                                            Qty:
                                            <select value={item2.qty} onChange={(e) => dispatch(addToCart(item2.product, e.target.value))}>
                                                {[...Array(item2.countInStock).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>
                                            <div id="snackbar">Deleted from cart.</div>
                                            <button type="button" className="del-but" onClick={() => removeFromCartHandler(item2.product)} >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        ₹{item2.price * item2.qty}
                                    </div>

                                </li>

                            )
                    }
                    <div className="cart-Subtotal">
                        <p>
                            Subtotal ({tqty} items)
                            :
                            <b>₹{total}</b>
                        </p>
                    </div>
                </ul>
            </div>

            <div className="cart-action">

                <h3>
                Subtotal ({tqty} items)
                            :
                            <b>₹{total}</b>

                </h3>
                <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    }

}
export default CartScreen;