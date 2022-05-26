import React, { useEffect, useState } from 'react';


const MangaeAllProducts = () => {

    const [tools, setTools] = useState([]);


    useEffect(() => {
        fetch("https://sleepy-escarpment-69683.herokuapp.com/tools")
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);


    const handleDelete=(id)=>{
        const url = `https://sleepy-escarpment-69683.herokuapp.com/tools/${id}`
        console.log(url);
       fetch(url,{
        method: 'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        const remainingOrder = tools.filter(t=>t._id !== id)
    setTools(remainingOrder);
     
       
    })
}
    return (
        <div>
        <h1 className="text-black text-center font-bold text-5xl uppercase">New products on market</h1>
        <h1 className='text-primary text-center font-bold text-2xl'>There are many type of tools manufacturer parts</h1>
        <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-5">
            {
               tools.map(tool=>{
                const { name, img, available,minimum, Description, price, _id } = tool;
                   return (
                    <div className="card lg:mx-w bg-base-100 shadow-xl">
                    <figure><img src={img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{Description}</p>
                        <p className='font-bold text-purple-400'>Available quantity : {available}</p>
                        <p className='font-bold text-base-400'>Minium : {minimum}</p>
                        <p className='font-bold'>${price}</p>
                       
                        <div className="card-actions justify-end">
                         
                        <button onClick={()=>handleDelete(_id)}  className='btn bg-red-500 text-white'>DELETE</button>
                        </div>
                    </div>
                </div>
                   )
               })
            }
        </div>

    </div>
    );
};

export default MangaeAllProducts;