import Axios from "axios";
import Cookie from "js-cookie";
import us from "../userStore"; // It is used to set and get userId and CartId
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    console.log("Inside sign-in", data);
    //us.setCartId(data.cartId);
    //dispatch(createCart(data._id));
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));

    //token
    /*var csrftokenCookie = Cookie.get('token');
        console.log("csrftokenCookie",csrftokenCookie);
        console.log("token",document.cookie);*/
  } catch (error) {
    //console error
    if (error.response && error.response.data) {
      var signMes = error.response.data.state;
      us.setsignMes(signMes);
      console.log(signMes);
    }
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

const register =
  (name, email, password, Vpassword, isAdmin) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { name, email, password, Vpassword, isAdmin },
    });
    try {
      const { data } = await Axios.post("/api/users/register", {
        name,
        email,
        password,
        Vpassword,
        isAdmin,
      });
      console.log("Inside register ", data);
      us.setUserId(data._id);
      var regMes = "Check mail for verification!!";
      us.setregMes(regMes);
      var regMes1 = "";
      //createCart(data._id);
      //dispatch(createCart(data._id));
      setTimeout(() => {
        us.setregMes(regMes1);
      }, 3000);

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      Cookie.set("userInfo", JSON.stringify(data));
    } catch (error) {
      //console error
      if (error.response && error.response.data) {
        var regMes2 = error.response.data.state;
        //setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
        //setTimeout(function(){  us.setregMes(regMes); }, 5000);
        us.setregMes(regMes2);

        console.log(regMes2);
      }
      dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
  };

/*
const updateUser = (id,cartId) => async  (dispatch) => {
    dispatch({type: USER_UPDATE_REQUEST, payload: {id,cartId}});
    try{
        const {data} = await Axios.put(`/api/users/${id}`,{cartId});
       
        dispatch({ type:USER_UPDATE_SUCCESS, payload:data});
        Cookie.set('userInfo',JSON.stringify(data));
    }
    catch(error){
        dispatch({ type:USER_UPDATE_FAIL, payload:error.message});
    }
}
*/

export { signin, register };
