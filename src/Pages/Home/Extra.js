import React from 'react';
import ExtraCard from './ExtraCard';
import single from '../../asset/single.jpg'
import single2 from '../../asset/single2.jpg'
import single3 from '../../asset/single3.jpg'




const Extra = () => {
    return (
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          <ExtraCard img={single}></ExtraCard>
          <ExtraCard img={single2}></ExtraCard>
          <ExtraCard img={single3}></ExtraCard>
       </div>
    );
};

export default Extra;