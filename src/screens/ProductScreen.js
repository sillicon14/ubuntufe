import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import './Product.css';
import Rating from './Rating';

function ProductScreen(props) {

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails); //reads a value from the store state this takes the current state as an argument and returns whatever data we want from it.
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id)); //dispatch an action to trigger a state change(Product details).
        return () => { };
    }, []);


    const handleAddToCart = (e) => {

        console.log(" handle add to cart", props.match.params.id);
        //console.log("userInfo isAdmin",userInfo.isAdmin);
        if (props.match.params.id) {
            dispatch(addToCart(props.match.params.id, qty)); //dispatch an action to trigger a state change(Add to cart).
            //popup
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
            //popup-end
        }
        //props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)  //redirect to cartScreen
    }
    const handleAddToCartSignIn = (e) => {
        props.history.push("/signin"); //If the user is not sign-in and his/her is trying to add to cart then it will redirect to sign-in page
    }

    return <div>
        {
            loading ? <div>Loading...</div> :
                error ? <div>{error} </div> :
                    (
                        <div className="details">
                            <div className="details-image">
                                <img src={product.image} alt="product"></img>
                            </div>
                            <div className="details-info">
                                <ul>
                                    <li>
                                        <h4 className="pname"> <b> {product.name} </b> </h4>
                                    </li>
                                    <li>
                                        <b>Category: </b>{product.category}
                                    </li>

                                    <li>
                                        <b>Price: </b> ₹{product.price}
                                    </li>
                                    <li>
                                        <Rating
                                            rating={product.rating}
                                            numReviews= {product.numReviews}>
                                        </Rating>
                                    </li>
                                    <li>
                                        <b>Description: </b>
                                        <div>
                                            <p> {product.description} </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="details-action">
                                <ul>
                                    <li>
                                        <div><b>Status:</b> 
                                            {product.countInStock > 5 ? 
                                            <span className="success"> In stock</span>
                                              : 
                                            product.countInStock > 0 ? 
                                            <span className="fail"> Hurry!! Few left.</span> :
                                            <span className="fail"> Unavailable.</span>
                                             }
                                                </div>
                                    </li>
                                    <li>
                                        <b>Qty:</b> <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                    </li>
                                    <li>
                                        <div id="snackbar">Added to cart.</div>
                                        {product.countInStock > 0 &&
                                            <button onClick={ (e) => handleAddToCart(e)} className="button primary" >Add to Cart</button>
                                        }
                                    </li>
                                </ul>

                            </div>
                        </div>
                    )
        }
    </div>
}

export default ProductScreen;