import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';


const CheckoutForm = ({ orders }) => {

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  // const { totalPrice } = orders;


  // useEffect(() => {
  //   fetch('https://sleepy-escarpment-69683.herokuapp.com/create-payment-intent',{
  //     method : "POST",
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //     body: JSON.stringify({
  //      totalPrice
  //     }),

  //   })
  //   .then((response) => response.json())
  //   .then(data =>{
  //     if(data?.clientSecret){
  //       setClientSecret(data.clientSecret)
  //     }
  //   })


  // }, [totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message)
    } else {
      setCardError('')
    }

  }


  return (

    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button onClick={()=>toast('payment success')} type="submit" className='btn btn-primary btn-xs mt-4 ' disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }

    </>
  );
};

export default CheckoutForm;