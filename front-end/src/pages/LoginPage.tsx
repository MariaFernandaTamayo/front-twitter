import React from "react"
import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
function LoginPage (){
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {signin, errors: signinErrors} = useAuth(); 
    const onSubmit = handleSubmit((data) => {
        signin(data);
    })
    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            {
                signinErrors.map((error,i) => (
                    <div className="bg-red-500 p-2 text-white text center" key={i}>
                        {error}
                    </div>
                ))
            }
            <h1 className="text-2xl font-bold">Login</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
    <input 
        type="text" 
        {...register("username", { required: true })} 
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border border-purple-500 focus:outline-none focus:border-purple-700" 
        placeholder="Username"
    />
    {errors.username && (
        <p className="text-red-500">Username is required</p>
    )}

    <input 
        type="password" 
        {...register("password", { required: true })} 
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border border-purple-500 focus:outline-none focus:border-purple-700" 
        placeholder="Password"
    />
    {errors.password && (
        <p className="text-red-500">Password is required</p>
    )}

    <button 
        type="submit" 
        className="w-full bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
    >
        Login
    </button>
</form>
<p className="flex gap-x-2 justify-between">¿Aún no estás registrado? <Link to="/register" className="text-sky-500">Sign Up</Link></p>
        </div>
        </div>
    )
}
export default LoginPage