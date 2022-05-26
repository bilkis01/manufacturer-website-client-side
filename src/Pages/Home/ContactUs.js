import React from 'react';
import appointment from '../../asset/appointment.png'

const ContactUs = () => {
    return (
        <section  style={
            {
                background: `url(${appointment})`
            }
           }>
              <div className='py-5'>
              <h4 className="text-xl text-primary font-bold text-center">Contact Us</h4>
               <h4 className="text-5xl text-white text-center">Stay connected with us</h4>
              </div>
              <div className='text-center py-5'>
    
              <input type="email" placeholder="Email Address" className="input w-full max-w-xs" />
              <br /><br />
              <input type="email" placeholder="Subject" className="input w-full max-w-xs" />
              <br /><br />
              <textarea className="textarea" id="" cols="60" rows="5" placeholder="Your message"></textarea>
              <br />
              <button className="btn btn-primary text-black">Submit</button>
              </div>
           </section>
        );
   
};

export default ContactUs;