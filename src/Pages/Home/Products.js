import { useEffect, useState } from "react";

import Tools from "./Tools";

const Products = () => {
    const [tools, setTools] = useState([]);


    useEffect(() => {
        fetch("https://sleepy-escarpment-69683.herokuapp.com/tools")
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);


    return (

        <div>
            <h1 className="text-black text-center font-bold text-5xl uppercase">New products on market</h1>
            <h1 className='text-green-400 text-center font-bold text-2xl'>There are many type of tools manufacturer parts</h1>
            <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-5">
                {
                    tools.map(tool => <Tools
                        key={tool._id}
                        tool={tool}
    
                    ></Tools>)
                }
            </div>

        </div>

    );

};

export default Products;