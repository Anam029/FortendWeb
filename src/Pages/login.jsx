 import React from 'react'
 import { authApi } from '../api/authApi'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import logo from "../assets/logo.jpg";
import image from "../assets/image.svg"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
   try {
    const res = await authApi
    console.log({
     email,
     password

   })
   console.log(res)
   } catch (error) {
    console.log(error.response?.status)
   console.log(error.response?.data)

   }

   

    
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-color bg-center bg-no-repeat bg-black/70 p-4"
     style={{backgroundImage:`url(${logo})`}}
    >
      <div className="w-full max-w-md rounded-none border border-neutral-800 bg-black p-8 shadow-2xl"
       
      >
        
        <div className="mb-8 flex flex-col items-center">
          <img
            src={image}
            alt="image"
            className="mb-4 h-20 w-20 rounded-full object-cover"
          />

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-neutral-400">
            Login to continue
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-5">
        
          <div>
            <label className="mb-2 block text-sm text-neutral-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white outline-none transition focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          
          <div>
            <label className="mb-2 block text-sm text-neutral-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white outline-none transition focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Forgot Password?
            </Link>
          </div>

          
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <Send size={18} />
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-8 text-center text-sm text-neutral-400">
          Don't have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}