import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
    }
    const menuItems = <>
        <li><NavLink to="/home">Home</NavLink></li>
       
        {
            user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li>{user ? <button onClick={logOut} className="btn btn-ghost">SignOut</button> : <NavLink to="/login">Login</NavLink>}</li>

    </>



    return (
        <div className="navbar bg-accent px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-primary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-white text-2xl"><span className='text-primary'>Bau</span>meister</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white p-0">
                    {menuItems}
                </ul>

            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="my-drawer-2" className="btn btn-primary lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};

export default Navbar;