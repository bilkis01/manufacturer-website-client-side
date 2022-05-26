import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signError;

    if (error || gerror) {
        signError = <p className='text-red-500'>{error.message || gerror.message}</p>
    }

    if (loading || gloading) {
        return <button className="btn btn-square  loading"></button>
    }

    if (user || guser) {
        console.log(user || guser);
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    const addminpass = 'adminadmin'

 
        if (user?.email === `admin@gmail.com` && addminpass === 'adminadmin') {
            const url = `https://sleepy-escarpment-69683.herokuapp.com/admin`
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: 'admin@gmail.com',
                    role: 'admin',
                    pass: 'adminadmin'
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

        }
  

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email" placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Please provide a valid email"
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password" placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 character or longer "
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        <input />

                        {signError}

                        <input className='btn w-full max-w-xs' type="submit" value="login" />
                    </form>
                    <p className='text-center'><small>Already Have an Account ? <Link className='text-secondary ' to='/signup'>Creat an account</Link></small></p>

                    <div className="divider">or</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Sign in with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;