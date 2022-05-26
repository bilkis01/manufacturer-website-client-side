import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch(`https://sleepy-escarpment-69683.herokuapp.com/myorder?email=${user?.email}`)
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[user])
 
    return (
        <div>
            <h1>my order: {orders?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((a, index) =>
                                <tr>
                                    <th>{index}</th>
                                    <td>{a.buyerName}</td>
                                    <td>{a.totalQuantity}</td>
                                    <td>{a.totalPrice}</td>
                                    <td>{(a.totalPrice && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>}</td>
                                    <td>{(a.totalPrice && a.paid) && <span className='btn btn-xs btn-primary'>Paid</span>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;