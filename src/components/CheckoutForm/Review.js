import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getCartItems} from '../../actions/cartActions';
import data from '../../data'

const Review = () => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    console.log({cartItems});
    console.log(data.products)
    return(
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
    {data.products.map((product) => (
        <div style={{border: '0.1px solid'}}>
        <ListItem style={{ padding: '10px 5px' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.qty}`} />
          <Typography variant="body2">₹ {product.price}</Typography>
        </ListItem>
        </div>
      ))}
    </List>
    
  </>
  )
};

export default Review;

/* {Object.keys(subjects).map((keyName, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label">key: {i} Name: {subjects[keyName]}</span>
    </li>
))} */

{/* <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List> */}