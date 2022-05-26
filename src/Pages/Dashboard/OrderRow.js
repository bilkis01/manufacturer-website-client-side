import React from 'react';


const OrderRow = ({ allorders, index, setAllOrders, allOrder }) => {
    // data
    const { buyerName, buyerEmail, totalPrice, _id } = allorders;
    const handleDelete = (id) => {
        const url = `https://sleepy-escarpment-69683.herokuapp.com/allorder/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const remainingOrder = allOrder.filter(o => o._id !== id)
                setAllOrders(remainingOrder);

            })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{buyerName}</td>
            <td>{buyerEmail}</td>
            <td>{totalPrice}</td>

            <td><button onClick={() => handleDelete(_id)} class="btn btn-xs bg-red-500 text-white">DELETE</button></td>
        </tr>
    );
};

export default OrderRow;