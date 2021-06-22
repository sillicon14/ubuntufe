import { CART_ADD_ITEM, CART_REMOVE_ITEM,SET_CART_ITEMS,CART_UPDATE_ITEM } from "../constants/cartConstants";

//Reducers are functions that take the current state and an action as arguments, and return a new state result. 
function cartReducer(state = { cartItems: [],isCartItemsLOaded : false }, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);

            if(product){
                return { cartItems: state.cartItems.map(x => x.product === product.product ? item: x)};
                
            }
            return { cartItems: [...state.cartItems, item] ,isCartItemsLOaded : state.isCartItemsLOaded};
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x=>x._id !== action.payload) ,isCartItemsLOaded : state.isCartItemsLOaded }  
        case SET_CART_ITEMS:
            return {cartItems: action.payload ,isCartItemsLOaded : true}

        case CART_UPDATE_ITEM:
            const itemu = action.payload;
            const productu = state.cartItems.find(x => x.productu === itemu.productu);

            if(productu){
                return { cartItems: state.cartItems.map(x => x.productu === productu.productu ? itemu: x)};
                
            }
            return { cartItems: [...state.cartItems, itemu] ,isCartItemsLOaded : state.isCartItemsLOaded};

        default:
            return state
    }
}  

export {cartReducer} 