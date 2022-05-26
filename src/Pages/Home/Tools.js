import React from 'react';
import { Link } from 'react-router-dom';


const Tools = ({ tool, setPurchase }) => {
    const { name, img, available,minimum, Description, price, _id } = tool;
    return (
        <div>
            <div className="card lg:mx-w bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{Description}</p>
                    <p className='font-bold text-purple-400'>Available quantity : {available}</p>
                    <p className='font-bold text-base-400'>Minium : {minimum}</p>
                    <p className='font-bold'>${price}</p>
                    
                    <div className="card-actions justify-end">
                        
                    <Link className='btn btn-primary' to={`/shop/${_id}`}>Purchase</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tools;