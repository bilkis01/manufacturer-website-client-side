import React from 'react';

const MyProfile = () => {
    return (
        <div className='px-12'>
          <div className='mt-5'>
          <div>
            <h1 className='text-xl font-bold '>Bilkis Akhter</h1>
            <p className=' font-bold '>Passionate Web Developer</p>
            <h1 className=' font-bold  text-purple-500'>Profile</h1>
        <p>I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role.</p>
            </div>

            <div>
                <h1 className='text-xl font-bold '>Education</h1>
                <h1 className=' font-bold '>Diploma in Textile Engineering, Shaymoli Polytechnic Institute, Dhaka</h1>
                <small>October 2021- pssout</small>
                <br />
                <h1 className=' font-bold '>SSC, Gonovobon Govt. High School</h1>
                <small>January 2016</small>
            </div>

            <div>
                <h1 className='text-xl font-bold '>Course</h1>
                <p className=' font-bold '>Complete Web Development Course In programming Hero</p>
                <small>January-2022- May 2022</small>
            </div>
          </div>

            <div>
                <h1 className='text-xl font-bold '>Skill</h1>
                <p>HTML and CSS</p>
                <progress class="progress progress-success w-56" value="100" max="100"></progress>
                <br />
                <p>Javascript</p>
                <progress class="progress progress-success w-56" value="70" max="100"></progress>
                <br />
                <p>NodeJs</p>
                <progress class="progress progress-success w-56" value="40" max="100"></progress>
                <br />
                <p>MongoDB</p>
                <progress class="progress progress-success w-56" value="70" max="100"></progress>
            </div>
        </div>
    );
};

export default MyProfile;