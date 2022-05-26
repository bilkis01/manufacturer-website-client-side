import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from "react-router-dom";
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Shop = () => {

    const id = useParams()
    const newId = id?.id
    const [item, setItem] = useState({})
    const [quantity, setQuantuty] = useState()
    const [user, loading, error] = useAuthState(auth);
    console.log(newId)

    // load item 
    useEffect(() => {
        fetch(`https://sleepy-escarpment-69683.herokuapp.com/tools/${newId}`)
            .then(res => res.json())
            .then(data => {
                const minquantuty = data.minimum
                setItem(data)
                setQuantuty(minquantuty)
            })
    }, [newId])

    // set orders



    const handleOrder = event => {
        event.preventDefault()
        const buyerName = event.target.name.value
        const buyerEmail = event.target.email.value
        const buyerPhone = event.target.phone.value
        const totalQuantity = quantity;
        const totalPrice = item?.price * quantity;
        const order = { buyerName, buyerEmail, buyerPhone, totalQuantity, totalPrice }
   

        fetch(`https://sleepy-escarpment-69683.herokuapp.com/orders`, {
            method: 'POST',
            body: JSON.stringify(
                order
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                toast('Order complete')
                event.target.reset() 
            });
 
    }

    const handleIncreaseBtn = () => {

        const newQuantity = quantity + 1
        setQuantuty(newQuantity)
    }
    const handleDecressBtn = () => {

        const newQuantity = quantity - 1
        setQuantuty(newQuantity)

        if (quantity <= item?.minimum) {
            setQuantuty(item?.minimum)
            toast(`minimum order quantity is required`)
        }
    }


    return (
        <div className='flex justify-between items-center h-screen px-12'>
            <div style={{ marginTop: '5rem' }}>

                <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure><img src={item?.img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p> Available quantity : {item?.available}</p>
                        <p> Minium : {item?.minimum}</p>
                        <p>${item?.price}</p>

                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">Order Form</h2>
                        <div>
                            <button className='mx-2' onClick={handleIncreaseBtn}>+</button>
                            <input type="text" disabled className='text-center border' value={quantity} style={{ width: "50px" }} />
                            <button onClick={handleDecressBtn} className='mx-2'>-</button>
                        </div>
                    </div>

                    <form onSubmit={handleOrder} >
                        <input type="name" name='name' disabled value={user?.displayName} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="phone" required className="input input-bordered input-secondary w-full max-w-xs" />
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary w-full" type='submit' >Order</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Shop;