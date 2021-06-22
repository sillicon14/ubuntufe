import Cookie from "js-cookie";
import axios from "axios";

function LogoutScreen(props) { 
    //If the user logout then cart-details and user-details stored in cookie will be removed. And then redirect to home page.
   
    const logout = async () => {
        Cookie.remove('userInfo');
        Cookie.remove('cartItems');
        await axios.get(`/api/users/logout`);
      // window.open
      //location.navigate
        props.history.push('/');
    }
   
    return(
        <div>{logout()}</div>
    )
} 
export default LogoutScreen;