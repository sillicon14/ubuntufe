import React, {useState} from 'react';
import { Typography, Button, Divider, List, ListItem, ListItemText } from '@material-ui/core';
//import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
//import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

//const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'


const PaymentForm = ({backStep, next}) => {
  const [name, setName] = useState('Meghana')

  async function displayRazorPay(){
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
			alert('Razorpay SDK failed to load. Are you connected to Internet?')
			return
    }

    const data =await fetch('http://localhost:5000/razorpay', {method: 'POST'}).then((t) =>
      t.json()
    )
    console.log(data)
    const options = {
      "key":  __DEV__ ? 'rzp_test_8mtVT1x94JsEtr' : 'PRODUCTION_KEY', // Enter the Key ID generated from the Dashboard
      "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": data.currency,
      "name": "Silicon14",
      "description": "Thank you for making your payment",
      "image": "http://localhost:5000/symbol.png",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (res){
          /* alert(res.razorpay_payment_id);
          alert(res.razorpay_order_id);
          alert(res.razorpay_signature); */
          next();
          /* console.log(res)
          console.log(id)
        axios.put(`http://localhost:3000/api/orders/${id}`, {id: res.razorpay_order_id})
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          }) */
          //axios.post(`http://localhost:3000/api/orders/:userId/`, {})
          
      },
      "prefill": {
         name,
      },
  };
  const paymentObject = new window.Razorpay(options)
		paymentObject.open()
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderData={
      //items

    }
  }

/*  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  }; */
  return (
    <>
      <Review/>
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '0px 0' ,paddingTop: '10px' }}>Payment method</Typography>
      <List>
      <ListItem>
      <ListItemText secondary={"RazorPay"} />
      </ListItem>
      </List>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained"  color="primary" onClick={displayRazorPay}>
                Pay 
              </Button>
      </div>
      </form>
    </>
  );
};

export default PaymentForm;


{/* <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements> */}