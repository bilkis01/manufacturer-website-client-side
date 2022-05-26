import React from 'react';
import quote from '../../asset/quote.svg'
import people1 from '../../asset/people1.png'
import people2 from '../../asset/people2.png'
import people3 from '../../asset/people3.png'
import Reviews from './Reviews';

const Testimonial = () => {
    const review = [
        {
            _id: 1,
            name: 'Winson Harry',
            reviews: '',
            img: people1,
        },
        {
            _id: 2,
            name: 'Komola Harry',
            reviews: '',
            img: people2,
        },
        {
            _id: 3,
            name: 'Andson Harry',
            reviews: '',
            img: people3
        },
    ];
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-secondary font-bold text-2xl">Testimonials</h1>
                    <h1 className="text-black  text-4xl">What Ours Clients Says !</h1>
                </div>
                <div>
                    <img src={quote} className='lg:w-48 w-24' alt="" />
                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                   review.map(reviews=><Reviews
                   key={reviews._id}
                   reviews={reviews}
                   
                   >

                   </Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;