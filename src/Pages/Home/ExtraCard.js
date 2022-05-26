import React from 'react';

const ExtraCard = ({img}) => {
    return (
        <div className="card lg:mx-w bg-base-100 shadow-xl">
        <figure><img src={img} alt="" /></figure>
       
      </div>
    );
};

export default ExtraCard;