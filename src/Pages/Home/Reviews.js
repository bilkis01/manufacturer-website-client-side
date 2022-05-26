import React from 'react';

const Reviews = ({ reviews }) => {
    return (
        <div className="card lg:mx-w bg-base-100 shadow-xl">
            <div className="card-body">
                <p>I am pleased with the tool bag, no crescent wrench, no needle nose pliers, no regular pliers, no hammer, no tape measure - all of which were shown as being included with the tools set I purchased!!
                </p>

                <div className=''>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={reviews.img} />
                        </div>
                    </div>
                </div>
                <div>
                    {reviews.name}
                </div>
            </div>

        </div>
      
    );
};

export default Reviews;