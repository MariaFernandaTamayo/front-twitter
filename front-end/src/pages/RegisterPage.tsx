import React, { useEffect } from "react"
import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage (){
    const {register,handleSubmit, formState: {
        errors,
    }} = useForm();
    const {signup,isAuthenticated, errors:registerErrors} = useAuth();
    const navigate =  useNavigate();


    useEffect(() => {
        if(isAuthenticated) navigate("/tasks");

    },[isAuthenticated])

    
    const onSubmit= handleSubmit(async(values)=>{
        signup(values);
    });
    return(
        <div className="flex justify-center items-center h-screen">
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white" key={i}>
                {error}
            </div>
        ))}
        <form onSubmit={onSubmit}>
        <h1 className="text-2xl font-bold">Register</h1>
            <input 
                type="text" 
                {...register("username", { required: true })} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border border-purple-500 my-2" 
                placeholder="Username"
            />
            {errors.username && (
                <p className="text-red-500">Username is required</p>
            )}

            <input 
                type="email" 
                {...register("email", { required: true })} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border border-purple-500 my-2" 
                placeholder="Email"
            />
            {errors.email && (
                <p className="text-red-500">Email is required</p>
            )}

            <input 
                type="password" 
                {...register("password", { required: true })} 
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border border-purple-500 my-2" 
                placeholder="Password"
            />
            {errors.password && (
                <p className="text-red-500">Password is required</p>
            )}

            <button 
                type="submit" 
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
                Register
            </button>
        </form>
        <p className="flex gap-x-2 justify-between">¿Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Login</Link></p>
    </div>
</div>
    )
}
export default RegisterPage