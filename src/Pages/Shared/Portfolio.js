import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div  className='px-16'> 
            <div className='about-page'>
                <h1>Hello</h1>
                <h1>I'm <span className='text-primary font-bold'>Suzan</span></h1>
                <h5 className='text-primary  font-bold'> a new web developer</h5>
                <p>I want to became a web developer. My journey begin  with this course I am a new code learner.
                    I want to learn everything to became a good web developer. I learned a lot from things from this course,
                    For Example:
                </p>
                <p> * Web design, </p>
                <p> * javascript, </p>
                <p> * javascripts framework react, </p>
                <p> * Design  framework , </p>
                <p> * Backend, </p>
                <p>My journey begins here and there is much more to learn and I want to Explore everything.</p>
                <br />
                <p className='text-white font-bold text-2xl'>Educational Background :</p>
                <p className='font-bold'>Hsc science: 2022</p>
                <p className='font-bold'>SSC science : 2016</p>
                <br />
                <p className='text-white font-bold text-2xl'>Email Address: asadsuzan@gmail.com</p>
            </div>

        </div>
    );
};

export default Portfolio;