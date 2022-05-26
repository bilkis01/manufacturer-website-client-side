import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [role, setRole] = useState(false)

    const [admin, isAdmin] = useState(false)
    useEffect(() => {
        if (user?.email === 'admin@gmail.com') {
            isAdmin(true)
        }
    }, [user])

    useEffect(() => {
        const url = `https://sleepy-escarpment-69683.herokuapp.com/admin/${user?.email}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {

                const userCredential = data[0]
                if (userCredential?.role) {
                    setRole(true)
                }

            })
            

    }, [user])



    return (

        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl font-bold text-purple-500'>Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    {
                        admin ? <li><Link to='/dashboard/user'>All Users </Link></li> : ''

                    }
                    {
                        role ? <li><Link to='/dashboard/user'>All Users </Link></li> : ''

                    }
                   {
                       role &&  <li><Link to='/dashboard/manageorders'>Manage  Orders</Link></li>
                       
                   }
                   {
                    
                     role && <li><Link to='/dashboard/mangaeallproducts'>Manage All Product</Link></li>
                   }
                   {
                     
                    role &&  <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                   }
                  
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>



                </ul>

            </div>
        </div>
    )
};

export default Dashboard;