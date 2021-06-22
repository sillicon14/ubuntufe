import { CART_ADD_ITEM2, CART_REMOVE_ITEM2 } from "../constants/cartConstants";

function cartReducer2(state = { cartItems2: [] }, action){
    switch(action.type){
        case CART_ADD_ITEM2:
            const item = action.payload;
            const product = state.cartItems2.find(x => x.product === item.product);

            if(product){
                return { cartItems2: state.cartItems2.map(x => x.product === product.product ? item: x)};
                
            }
            return { cartItems2: [...state.cartItems2, item]};
        case CART_REMOVE_ITEM2:
            return { cartItems2: state.cartItems2.filter(x=>x.product !== action.payload) }    
        default:
            return state
    }
}  

export {cartReducer2} 