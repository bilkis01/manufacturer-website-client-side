import React from 'react';
import Banner from './Banner';
import Bussiness from './Bussiness';
import ContactUs from './ContactUs';
import Extra from './Extra';
import Testimonial from './Testimonial';
import Footer from './../Shared/Footer'
import Products from './Products';

const Home = () => {
    return (
        <div className='px-12 '>
            <Banner></Banner>
            <br /><br /><br />
            <Extra></Extra>
            <br /><br /><br />
            <Products></Products>
            <br /><br /><br />
            <Bussiness></Bussiness>
            <br /><br /><br />
            <Testimonial></Testimonial>
            <br /><br /><br />
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;