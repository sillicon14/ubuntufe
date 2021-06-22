
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import ImageSlider from './ImageSlider';
import './Home.css'
import Rating from './Rating';

function HomeScreen(props) {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts()); //dispatch an action to trigger a state change(List of Products).
    return () => { };
  }, []) //An empty array []: the side-effect runs once after the initial rendering.

  return (
    loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <div>
          <div>

         
            <ul className="products">
              {

                products.map(product =>

                  <li key={product._id}>
                    <div className="product">
                      <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link>
                      </div>
                      <Link to={'/product/' + product._id}>
                        <div className="inner">
                          <img className="product-image" src={product.image} alt="product" />
                        </div>
                      </Link>

                      <div className="product-price">₹{product.price}</div>
                      <div className="rating">
                        <Rating 
                        rating={product.rating} 
                        numReviews={product.numReviews}>
                        </Rating>
                      </div>

                    </div>
                  </li>)
              }
            </ul>
          </div>

        </div>
  )
}

export default HomeScreen;