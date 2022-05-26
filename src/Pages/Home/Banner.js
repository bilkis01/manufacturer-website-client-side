import React from 'react';
import banner from './../../asset/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={banner} className="rounded-lg shadow-2xl" />
                    <div className="max-w-md  ">
                        <h1 className="mb-5 text-center  text-6xl font-bold">Hello there <span className='text-secondary'>!!!</span></h1>
                        <p className="mb-5 text-4xl text-center">NEED</p>
                        <p className="mb-5 text-4xl text-center">NEW</p>
                        <p className="mb-5 text-4xl text-center">TOOLS ?</p>
                        <br />
                        
                       
                    </div>
                    
                </div>
                
            </div>


        </div>
    );
};

export default Banner;