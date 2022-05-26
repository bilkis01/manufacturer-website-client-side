import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';

const ManageOrders = () => {
    const [allOrder, setAllOrders] = useState([]);
    // console.log(allOrder);

    
  useEffect(() => {
    fetch('https://sleepy-escarpment-69683.herokuapp.com/allorder',{

    })
    .then((response) => response.json())
    .then(data =>{
     setAllOrders(data)
    })


  }, [])
  
    // if (isLoading) {
    //     return <button className="btn btn-square  loading"></button>
    // }
    return (
        <div>
            <h1 className="text-xl">Manage Orders: {allOrder.length}</h1>


            <div class="overflow-x-auto">
                <table class="table w-full">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>User Email</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                         {
                            allOrder.map((allorders,index)=><OrderRow
                            key={allorders._key}
                            allorders={allorders}
                            allOrder={allOrder}
                            index={index}
                            setAllOrders={setAllOrders}
                           
                            >

                            </OrderRow>)
                        } 
                        
                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default ManageOrders;