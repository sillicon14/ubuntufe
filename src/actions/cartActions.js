import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, SET_CART_ITEMS, CART_UPDATE_ITEM, CART_ADD_ITEM2, CART_REMOVE_ITEM2 } from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
    const userInfo = Cookie.get('userInfo');
    if (userInfo) {
        try {
            const { data } = await Axios.get("/api/products/" + productId);
            console.log("Data ", data);
            const { cart: { cartItems } } = getState();

            console.log("Cart Item before", cartItems);
           let productFound = false;
                cartItems.map(item => {
                    if (item.product === productId) {
                       // console.log("Product found", item);
                       //item.qty = parseInt(item.qty) + parseInt(qty);
                       dispatch(updateCart(item._id,parseInt(item.qty) + parseInt(qty)));
                       productFound = true;
                    }
                    return item;
                }
                )
           if(productFound){
               return;
           }

            dispatch({
                type: CART_ADD_ITEM, payload: {
                    product: data._id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    countInStock: data.countInStock,
                    rating: data.rating,
                    numReviews: data.numReviews,
                    qty
                }
            });
            const item = [{
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                rating: data.rating,
                numReviews: data.numReviews,
                qty
            }]
            const userInfo = Cookie.get('userInfo');
            if (userInfo) {
                console.log("User inso parse: ", JSON.parse(userInfo));
                Axios.get(`/api/users/${JSON.parse(userInfo)._id}`).then(response => {
                    Axios.post(`/api/carts/${response.data.cartId}/addToCart`, { "cartItems": item }).then(response => {
                        console.log("Cart data", response);
                    });
                });
            }
            else {
                console.log();
            }
        }
        catch (error) {
        }
    }
    //Cookie
    if (!userInfo) {

        try {
            const { data } = await Axios.get("/api/products/" + productId);
            dispatch({
                type: CART_ADD_ITEM2, payload: {
                    product: data._id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    countInStock: data.countInStock,
                    rating: data.rating,
                    numReviews: data.numReviews,
                    qty
                }
            });

            const { cart2: { cartItems2 } } = getState();
            Cookie.set("cartItems2", JSON.stringify(cartItems2));

        }
        catch (error) {

        }
    }
}


const removeFromCart = (productId) => async (dispatch, getState) => {
    const userInfo = Cookie.get('userInfo');
    if (userInfo) {
       // dispatch({ type: CART_REMOVE_ITEM, payload: productId });


        const userInfo = Cookie.get('userInfo');
        if (userInfo) {
            console.log("User inso parse: ", JSON.parse(userInfo));
            Axios.get(`/api/users/${JSON.parse(userInfo)._id}`).then(response => {

                Axios.delete(`/api/carts/${response.data.cartId}/${productId}`).then(response => {
                    console.log("Romove item:", response);
                    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
                });
            });
        }
        //Cookie.set("cartItems", JSON.stringify(cartItems));
    }
    if (!userInfo) {
        dispatch({ type: CART_REMOVE_ITEM2, payload: productId });

        const { cart2: { cartItems2 } } = getState();
        Cookie.set("cartItems2", JSON.stringify(cartItems2));
    }

}

const getCartItems = () => async (dispatch, getState) => {


    var { cart: { cartItems } } = getState();
    console.log("Inside getCartItems", cartItems);
    const userInfo = Cookie.get('userInfo');
    // to get token 
    // const token = Cookie.get('token');

    if (userInfo) {
        console.log("User info parse: ", JSON.parse(userInfo));
        Axios.get(`/api/users/${JSON.parse(userInfo)._id}`).then(response => {

            Axios.get(`/api/carts/${response.data.cartId} `).then(response => {
                dispatch({ type: SET_CART_ITEMS, payload: response.data[0].cartItems });

                console.log("Cart items:", response.data[0].cartItems);
            });
        });
    }

    console.log("Before set", cartItems);
    Cookie.set("cartItems", JSON.stringify(cartItems));
    // const {cookie} = Cookie.get("cartItems");
}

const updateCart = (_id, qty) => async (dispatch, getState) => {
    var { cart: { cartItems } } = getState();
    try {
        console.log("Cart Item before", cartItems);
        let updatedCart =
            cartItems.map(item => {
                if (item._id === _id) {
                    console.log("Product found", item);
                    item.qty = qty;
                }
                return item;
            }
            )
        console.log("Cart Item after", updatedCart);
        const userInfo = Cookie.get('userInfo');
        if (userInfo) {
            console.log("User inso parse: ", JSON.parse(userInfo));
            Axios.get(`/api/users/${JSON.parse(userInfo)._id}`).then(response => {
                Axios.put(`/api/carts/${response.data.cartId}`, { "cartItems": updatedCart }).then(response => {
                    dispatch({ type: SET_CART_ITEMS, payload: response.data.cart.cartItems });
                    console.log("Update data", response.data.cart.cartItems);
                });
            });
        }

    }
    catch (error) {
    }
}

export { addToCart, removeFromCart, getCartItems, updateCart }