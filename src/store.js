import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import { cartReducer2 } from './reducers/cartReducer2';
import Cookie from 'js-cookie';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';


const cartItems =Cookie.getJSON("cartItems") || [];
const userInfo =Cookie.getJSON("userInfo") || null;

const cartItems2 =Cookie.getJSON("cartItems2") || [];

const initialState={ cart: {cartItems}, userSignin: {userInfo},cart2: {cartItems2} };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    cart2: cartReducer2
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;