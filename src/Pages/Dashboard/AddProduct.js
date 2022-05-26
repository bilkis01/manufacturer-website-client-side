import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const addProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const Description = event.target.Description.value;
        const available = event.target.available.value;
        const minimum = event.target.minimum.value;
        const price = event.target.price.value;
        const img = event.target.img.value;

        const tools = {
            name ,Description,available,minimum,price,img
        }


        fetch('https://sleepy-escarpment-69683.herokuapp.com/tools', {
            method: 'POST',
            body: JSON.stringify(
                tools
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) =>{
                toast.success('product added successfully')
                event.target.reset();
            });
    }


    return (
        <div>
            <form onSubmit={addProduct}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text font-bold">Product Name</span>
                    </label>
                    <input type="text" required name='name' placeholder="Product Name" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text font-bold">Description</span>
                    </label>
                    <input type="text" required name='Description' placeholder="description" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text font-bold">Quantity</span>
                    </label>
                    <input type="number" required name='available' placeholder="quantity" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text font-bold">Minimum Quantity</span>
                    </label>
                    <input type="number" required name='minimum' placeholder="Minimum Quantity" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text font-bold">Price</span>
                    </label>
                    <input type="number" required name='price' placeholder="Price" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text font-bold">Image</span>
                    </label>
                    <input type="text" required name='img' placeholder="image url" class="input input-bordered w-full max-w-xs" />
                </div>
                <br />
                <button class="btn">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;