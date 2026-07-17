import { useState } from "react";
import { Send, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { authApi } from "../api/authApi";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
    const res = await authApi({
      username,
      email,
      password
    })
     console.log(res)

   } catch (error) {
      console.log(error.response?.status);
       console.log(error.response?.data);
   } 
    
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-color bg-center bg-no-repeat bg-black/70 p-4"
    style={{
    backgroundImage: `url(${logo})`,
  }}
    >
      <div className="w-full max-w-md rounded-none border border-neutral-800 bg-black p-8 shadow-2xl"
      
      >
        
        <div className="mb-7 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-[28px]">
            Create Account
          </h2>
          <p className="mx-auto mt-2 max-w-xs text-sm text-neutral-400">
            Create your account to continue.
          </p>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label
              htmlFor="username"
              className="mb-1.5 block text-sm text-neutral-300"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-orange-500"
            />
          </div>

          
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm text-neutral-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-orange-500"
            />
          </div>

          
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm text-neutral-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="new-password"
              className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-orange-500"
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}

            </button>
          </div>

          
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm text-neutral-300"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              autoComplete="new-password"
              className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-orange-500"
            />
          </div>

          
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <Send size={16} className="fill-white" />
            Create Account
          </button>
        </form>

        
        <p className="mt-8 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-orange-400 hover:text-orange-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

