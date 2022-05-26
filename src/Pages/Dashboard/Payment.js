import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(' pk_test_51L3JOnE8KtqC255AhMYDSpbFu9e5OgHERVKI6H16liqd9U81kbEaL2VTUPpiBJ9DpoANjYy9j5WqNh8Tsj3ZHwbG00UVP8xRQo');

const Payment = () => {
    const { id } = useParams()

    const url = `https://sleepy-escarpment-69683.herokuapp.com/myorder/${id}`;
    const { data:orders, isLoading } = useQuery(['myorder', id], () => fetch(url, {
        method: "GET",
    }).then(res => res.json()));

    if (isLoading) {
        return <button className="btn btn-square  loading"></button>
    }

    return (
        <div>
            <h2>Please pay for : {id}</h2>


            <div class="card  w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Pay for : {orders.buyerName}</h2>
                    <p className='text-purple-500'>Please pay : ${ orders.totalPrice}</p>
                    <p className='text-purple-500'>Total Product : ${ orders.totalQuantity}</p>


                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>
                </div>
               
            </div>
        </div>

    );
};

export default Payment;